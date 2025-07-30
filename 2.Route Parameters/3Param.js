import express from "express";
const app = express();
console.clear();
app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});
app.get("/user/:id", (req, res) => {
  console.log("This is User ID path");
  res.send("Response OK");
});
app.listen(8000, () => console.log("Server Up!"));