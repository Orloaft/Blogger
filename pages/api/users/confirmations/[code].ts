const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});
export default function handler(req, res) {
  console.log(req.query);
  knex("pendingCredentials")
    .select()
    .where({ token: req.query.code })
    .then((credentials) => {
      knex("users")
        .insert({
          email: credentials[0].email,
          username: credentials[0].username,
          password: credentials[0].password,
          token: credentials[0].token,
        })
        .then(() => {
          knex("pendingCredentials")
            .delete()
            .where({ token: req.query.code })
            .then(() => res.json({ message: "email confirmed" }));
        })
        .catch((err) => console.log(err));
    });
}
