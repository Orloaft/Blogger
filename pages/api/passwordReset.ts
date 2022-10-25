const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});

export default function handler(req, res) {
  knex("users")
    .update({ password: req.body.password })
    .where({ token: req.body.token })
    .then(() => {
      res.json({ message: "password changed succesfully" });
    });
}
