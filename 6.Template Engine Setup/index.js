import express from "express";
import {join} from "path";
import routeTemp from './routes/routeTemp.js'

const app = express();

app.set('view engine', "ejs")
app.use(express.static(join(process.cwd(), "public")))

app.use('/', routeTemp)

app.listen(8000, () => console.log("Server Up!"));
