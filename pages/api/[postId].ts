const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});

export default function handler(req, res) {
  const query = req.query;
  knex("posts")
    .select()
    .where({ id: query.postId })
    .then((post) => {
      console.log(post);
      res.status(200).json(post);
    })
    .catch((err) => console.log(err));
}
