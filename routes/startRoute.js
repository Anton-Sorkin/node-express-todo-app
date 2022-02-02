//REQUIREMENTS
const express = require("express");
const router = express.Router();

//GETS
router.get("/", (req, res) => {
  res.render("index", {
    style: "main.css",
    title: "start-page",
    message: "you are on home page.",
  });
});

//EXPORTS
module.exports = router;
