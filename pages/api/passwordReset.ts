import knex from "knex";

export default function handler(req, res) {
  knex("./db.sqlite3")
    .update({ password: req.body.password })
    .from("users")
    .where({ token: req.body.token })
    .then(() => {
      res.json({ message: "password changed succesfully" });
    });
}
