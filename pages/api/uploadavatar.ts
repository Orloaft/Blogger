import fs from "fs";
const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});
function base64ToFile(file: {
  base64: string;
  fileName: string;
  token: string;
}) {
  const fileContents = file.base64.replace(
    /^data:image\/(jpeg|png|gif|webp);base64,/,
    ""
  );

  fs.mkdirSync("./public/uploads", { recursive: true });

  const fileName = `uploads/${Date.now().toString() + file.fileName}`;

  fs.writeFile(`./public/` + fileName, fileContents, "base64", function (err) {
    return { error: err };
  });
  return { error: null, file: fileName };
}
export default async function handler(req: any, res: any) {
  let response = base64ToFile(req.body);

  knex("users")
    .update({ avatarurl: response.file })
    .where({ token: req.body.token })
    .then(() => {
      if (response.error) {
        res.json({ error: response.error });
      } else {
        res.status(201).json({ file: response.file });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}
