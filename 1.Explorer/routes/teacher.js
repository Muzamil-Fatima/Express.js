import express from "express";
const router = express.Router();  

router.get("/all", (req, res) => {
  res.send("All Teachers");
});

router.post("/create", (req, res) => {
  res.send("Sign in New  Teachers ");
});

router.put("/update", (req, res) => {
  res.send("Update  Teachers  ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove  Teachers  From The db.");
});

export default router;
