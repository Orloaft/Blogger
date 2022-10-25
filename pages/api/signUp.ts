import nodemailer from "nodemailer";
import { uuid } from "uuidv4";
const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
  secure: true,
});
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
export default function handler(req, res) {
  console.log(req.body);
  if (isValidEmail(req.body.email)) {
    console.log("valid email");
    let newUser = { ...req.body };
    knex(`users`)
      .select()
      .where({ username: newUser.username })
      .then((users) => {
        if (users[0]) {
          res.json({ message: "name taken" });
        } else {
          knex("users")
            .select()
            .where({ email: newUser.email })
            .then((users) => {
              if (users[0]) {
                res.json({ message: "email in use" });
              } else {
                let activationCode = uuid();
                knex(`pendingCredentials`)
                  .insert({ ...newUser, token: activationCode })
                  .then(() => {
                    const mailData = {
                      from: process.env.USER_EMAIL,
                      to: req.body.email,
                      subject: `Message From ${process.env.USER_EMAIL}`,
                      text: `hello ${req.body.username}!
                    Use this url to confirm your email ${process.env.CLIENT}/users/confirmations/${activationCode}.`,
                    };
                    transporter.sendMail(mailData, function (err, info) {
                      if (err) console.log(err);
                      else {
                        console.log(info);
                        res.status(200).json({
                          message: "confirmation sent",
                        });
                      }
                    });
                  })
                  .catch((err) =>
                    res.status(500).json({ message: "server error" })
                  );
              }
            });
        }
      })
      .catch((err) => res.status(500).json({ message: "" }));
  } else {
    res.json({ message: "invalid email" });
  }
}
