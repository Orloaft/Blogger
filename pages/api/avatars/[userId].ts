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
    .where({ id: query.userId })
    .then((users) => {
      console.log(users[0]);
      res.status(200).send(users[0].avatarurl);
    })
    .catch((err) => console.log(err));
}
