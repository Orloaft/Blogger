import knex from "knex";

export default function handler(req, res) {
  let date = new Date();

  let body = { ...req.body };
  let token = body.token;
  knex("./db.sqlite3")
    .select()
    .from("users")
    .where(token === token)
    .then((user) => {
      body.form.author = user[0].name;
      body.form.timestamp = date;
      knex("./db.sqlite3")
        .insert({ body: body.form })
        .into("posts")
        .then(() => {
          res.status(200).json("inserted");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
