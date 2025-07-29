import express from "express";

const app = express();

app.set('view engine', "ejs")
app.use(express.static(join(process.cwd(), "public")))

app.listen(8000, () => console.log("Server Up!"));
