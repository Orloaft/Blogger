import knex from "knex";

export default function handler(req, res) {
  knex("./db.sqlite3")
    .delete()
    .from("users")
    .where({ token: req.body.token })
    .then(() => {
      res.status(200).json("deleted successfully");
    })
    .catch((err) => res.json("error: " + err));
}
