import knex from "knex";

export default function handler(req, res) {
  knex("./db.sqlite3")
    .select()
    .from("posts")
    .where({ id: req.body.id })
    .then((posts) => {
      let body = { ...posts[0].body };
      body.comments.push(req.body.comment);
      knex("./db.sqlite3")
        .update({ body: body })
        .from("posts")
        .where({ id: req.body.id })
        .then(() => {
          res.status(201).json({ message: "comment posted" });
        });
    });
}
