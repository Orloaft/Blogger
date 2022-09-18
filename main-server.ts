import http from "http";
import express from "express";
import next from "next";

async function startServer() {
  const nextJsApp = next({ dev: false, conf: { reactStrictMode: true } });
  await nextJsApp.prepare();
  const app = express();
  app.all("*", nextJsApp.getRequestHandler() as any);

  const server = http.createServer(app);
  server.listen(process.env.PORT);
  console.log("listening at port:", process.env.PORT);
}
startServer();
