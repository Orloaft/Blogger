import multer from "multer";
import fileType from "file-type";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

const uploadAvatar = async (req: any, res: any, NextFunction: any) => {
  try {
    upload.single("avatar")(req, res, NextFunction);
    const avatarFile = req.body.file;

    if (!avatarFile) {
      return res.status(400).json({ error: "No avatar file provided" });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(avatarFile.mimetype)) {
      return res.status(400).json({ error: "Invalid file type" });
    }

    const fileBuffer = avatarFile.buffer;
    const detectedType = fileType.fromBuffer(fileBuffer);
    if (!detectedType || !allowedTypes.includes(detectedType.mime)) {
      return res.status(400).json({ error: "File type detection failed" });
    }

    // Here you can save the file to your storage and return the URL of the saved image
    const imageUrl = "https://example.com/path/to/avatar.jpg";
    return res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default uploadAvatar;
