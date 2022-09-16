import knex from "knex";

export default function handler(req, res) {
  let date = new Date();

  let body = { ...req.body };
  body.timestamp = date;
  knex("../db.sqlite3")
    .insert({ body: body })
    .into("posts")
    .then(() => {
      res.status(200).json("inserted");
    })
    .catch((err) => console.log(err));
}
