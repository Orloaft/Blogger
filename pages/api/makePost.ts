const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});

export default function handler(req, res) {
  let date = new Date();

  let body = { ...req.body };
  let token = body.token;
  knex("users")
    .select()
    .where(token === token)
    .then((user) => {
      body.form.author = user[0].username;
      body.form.timestamp = date;
      knex("posts")
        .insert({ data: body.form })
        .then(() => {
          res.status(200).json("inserted");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
