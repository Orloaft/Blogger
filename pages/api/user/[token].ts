import knex from "knex";

export default function handler(req, res) {
  const query = req.query;
  knex("./db.sqlite3")
    .select()
    .from("users")
    .where({ token: query.token })
    .then((user) => {
      res.status(200).json(user[0]);
    })
    .catch((err) => console.log(err));
}
