import express from "express";
const app = express();

// Route Params
// app.get("/product/:category/:id", (req, res) => {
// const {category, id} = req.params;
// res.send(`Product Category (${category}) and Product ID (${id}) Pro Max`)
// });

app.get("/product/order/:day/:month/:year",(req, res)=>{
    const { day, month, year} = req.params;
    res.send(`Product was ordered on: ${day}/${month}/${year}`)
})
app.listen(8000, () => console.log("Server Up!"));