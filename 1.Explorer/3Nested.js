import express from "express";
const app = express();

app.get("/products/iphone", (req, res) => {
  res.send("This code will only run if you provide /products/iphone ");
});

app.listen(8000, () => console.log("Server Up!"));