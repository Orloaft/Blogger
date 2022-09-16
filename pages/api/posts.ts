// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import knex from "knex";

export default function handler(req, res) {
  knex("./db.sqlite3")
    .select()
    .from("posts")

    .then((posts) => {
      res.status(200).json(posts.reverse());
    });
}
