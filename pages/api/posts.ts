// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      author: "John Doe",
      tags: ["action", "adventure"],
      body: "lorem ipsum ",
      time: "5 seconds",
      date: "Sept 14th 22",
    },
    {
      id: 2,
      author: "Jane Doe",
      tags: ["programming"],
      body: "lorem ipsum ",
      time: "5 seconds",
      date: "Sept 13th 22",
    },
  ]);
}
