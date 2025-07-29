import express from "express";
const app = express();

// regex
app.get(/x/, (req, res) => {
  res.send("If The  user hit (acd) or (abcd) then this will work");
});
// users/1234555
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("Working");
});
app.listen(8000, () => console.log("Server Up!"));
