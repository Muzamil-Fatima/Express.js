import express from "express";
const app = express();
console.clear();
const cb1 = (req, res, next) => {
  console.log("First Callback");
  next();
};
const cb2 = (req, res, next) => {
  console.log("Second Callback");
  next();
};

app.get(
  "/crazyness",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third CallBack");
    next();
  },
  
  (req, res, next) => {
    console.log("Fourth Callback");
    res.send("Crazyness")
  }
);


app.listen(8000, () => console.log("Server Up!"));
