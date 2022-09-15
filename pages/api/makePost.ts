import knex from "knex";

export default function handler(req, res) {
  knex("../posts.sqlite3")
    .insert({ body: req.body })
    .into("posts")
    .then(() => {
      res.status(200).json("inserted");
    })
    .catch((err) => console.log(err));
}
