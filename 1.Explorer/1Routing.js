import express from "express";

const app = express();
// HTTP => METHODS
// GET => Retrive Data
// POST =>  create/Insert Data
// PUT =>  completely Update Data
// PATCH =>  Partially UPdate Data
// DELETE =>  Delete Data
// ALl =>  any HTTP Request Method

app.get("/", (req, res) => {
  res.send("Welcome to HOME Page ");
});

app.get("/about", (req, res) => {
  res.send("<h1>About </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is Contact Page </h1>");
});

app.listen(8000, () => console.log("Server Up!"));