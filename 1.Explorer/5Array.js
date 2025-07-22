import express from "express";
const app = express();

console.clear();
const cb1 = (rq, res, next) => {
  console.log("First Callback");
  next();
};
const cb2 = (rq, res, next) => {
  console.log("Second Callback");
  next();
};
const cb3 = (rq, res, next) => {
  console.log("Third Callback");
  next();
};
const cb4 = (rq, res) => {
  console.log("Fourth Callback");
  res.send("Array of CallBacks");
};

app.get("/array-cb", [cb1, cb2, cb3, cb4]);

app.listen(8000, () => console.log("Server Up!"));
