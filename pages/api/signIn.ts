import { v4 as uuid } from "uuid";
const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});
export default function handler(req, res) {
  knex("users")
    .select()
    .where({ email: req.body.email })
    .then((user) => {
      if (user.length === 0) {
        res.json({ message: "user does not exist" });
      } else if (user[0].password === req.body.password) {
        let token = uuid();
        knex("users")
          .update({ token: token })
          .where({ name: user[0].name })
          .then(() => {
            res.json({ token: token, message: "signed in succesfully" });
          });
      } else {
        res.json({ message: "incorrect password" });
      }
    });
}
