import express from "express";
import userCredentials from "./middleware/logs.js";

const app = express();

app.use(userCredentials);
/*
=> Request 
      => Middleware
=>Response
*/
app.get("/", (req, res) => {
  res.send("<h1>Hello Admin</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.listen(8000, () => console.log("Server Up!"));
