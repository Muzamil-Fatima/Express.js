import express from "express";
import students from "./student.js";
import teachers from "./teacher.js";

const app = express();

app.use("/students", students);
app.use("/teachers", teachers);

// 1. Create routes folder and put your routes in a seperate file
// 2.Create instance of express. Rountes()
// 3. Instance of app. method change that to "routes.method"
// 4. Export routes
// 5. Import Routes
// 6. use the (app.use) built-in-middleware & provide your routes.

app.listen(8000, () => console.log("Server Up!"));
