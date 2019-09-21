require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("good morning!");
});

app.listen(port, () => {
  console.log(`Working at port: ${port}`);
});
