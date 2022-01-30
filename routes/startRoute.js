//requirements
const express = require("express");
const router = express.Router();

//get /localhost:8080/
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    message: "you are on home page.",
  });
});

//exports
module.exports = router;
