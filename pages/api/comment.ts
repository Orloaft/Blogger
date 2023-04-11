const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});

export default function handler(req, res) {
  let date = new Date();
  knex("posts")
    .select()
    .where({ id: req.body.id })
    .then((posts) => {
      let newbody = JSON.parse(posts[0].data);

      newbody.comments.push({ ...req.body.comment, timestamp: date });

      knex("posts")
        .update({ data: JSON.stringify(newbody) })
        .where({ id: req.body.id })
        .then(() => {
          res.status(201).send({ comments: newbody.comments });
        });
    });
}
