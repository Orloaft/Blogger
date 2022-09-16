import sqlite3 from "sqlite3";

export const getDb = () => {
  let db = new sqlite3.Database(`./sample1.sqlite3`, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the in-memory SQlite database.");
  });
  db.run("CREATE TABLE posts(id number,body text)");
  db.close();
};
