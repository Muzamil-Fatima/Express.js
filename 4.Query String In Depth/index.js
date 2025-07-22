import express from "express";
import products from "./product.js";
const app = express();
//  to be sending our data from the back

app.get("/product", (req, res) => {
  res.json(products);
});

app.listen(8000, () => console.log("Server Up!"));
