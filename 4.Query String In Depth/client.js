import express from "express";
const app = express();

// how we can get data from the clients to server
// Query String follow the ?

app.get("/product", (req, res) => {
  //  res.send(`Response Ok ${req.query.category}`);
  const { category, id } = req.query;
  res.send(`Product Category: ${category} & Product ID: ${id}`);
});

app.listen(8000, () => console.log("Server Up!"));
