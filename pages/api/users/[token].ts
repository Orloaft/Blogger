const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});

export default function handler(req, res) {
  const query = req.query;
  knex("users")
    .select()
    .where({ token: query.token })
    .then((user) => {
      res.status(200).json(user[0]);
    })
    .catch((err) => console.log(err));
}
