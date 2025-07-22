import express from "express";
const app = express();

// Route Params
app.get("/ecom/product/iphone/:model", (req, res) => {
//  res.send("Iphone", req.params.model, " Pro Max");
// destructure the data
const { model } = req.params;
res.send(`IPhone ${model} Pro Max`)
});
// ecom/product/iphone/:iphone

app.listen(8000, () => console.log("Server Up!"));
