import express from "express";
const app = express();
// console.log(clear)


app.get(
  "/double-cb",
  (req, res, next) => {
    console.log("First CallBack");
    next();
  },
  (req, res) => {
    console.log("Second CallBack");
  }
);
app.listen(8000, () => console.log("Server Up!"));
