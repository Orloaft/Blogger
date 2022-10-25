const knex = require("knex")({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./data.sqlite3",
  },
});
export default function handler(req, res) {
  knex("pendingCredentials")
    .select()
    .where({ token: req.params.code })
    .then((credentials) => {
      knex("users")
        .insert({ ...credentials[0] })
        .then(() => {
          knex("pendingCredentials")
            .delete()
            .where({ token: req.params.code })
            .then(() => res.json({ message: "email confirmed" }));
        })
        .catch((err) => console.log(err));
    });
}
