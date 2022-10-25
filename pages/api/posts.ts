// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});

export default function handler(req, res) {
  knex("posts")
    .select()
    .then((posts) => {
      res.status(200).json(posts.reverse());
    })
    .catch((err) => res.json({ message: "cant find posts" }));
}
