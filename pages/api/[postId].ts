import knex from "knex";

export default function handler(req, res) {
  const query = req.query;
  knex("./db.sqlite3")
    .select()
    .from("posts")
    .where({ id: query.postId })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => console.log(err));
}
