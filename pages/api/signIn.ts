import knex from "knex";

import { v4 as uuid } from "uuid";
export default function handler(req, res) {
  knex("../db.sqlite3")
    .select()
    .from("users")
    .where({ email: req.body.email })
    .then((user) => {
      if (user.length === 0) {
        res.json({ message: "user does not exist" });
      } else if (user[0].password === req.body.password) {
        let token = uuid();
        knex("../db.sqlite3")
          .update({ token: token })
          .from("users")
          .where({ name: user[0].name })
          .then(() => {
            res.json({ token: token, message: "signed in succesfully" });
          });
      } else {
        res.json({ message: "incorrect password" });
      }
    });
}