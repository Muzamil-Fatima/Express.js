import express from "express";
const app = express();

// ugly Code
// app.get("/student", (req, res)=>{
//     res.send("All Student");
// });
// app.post("/student", (req, res)=>{
//     res.send("Add new Student");
// });
// app.put("/student", (req, res)=>{
//     res.send("Update Student");
// });
// app.delete("/student", (req, res)=>{
//     res.send("Delete Student");
// });

app
  .route("/student")
  .get((req, res) => res.send("All Student"))
  .post((req, res) => res.send("Add New Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));

app.listen(8000, () => console.log("Server Up!"));
