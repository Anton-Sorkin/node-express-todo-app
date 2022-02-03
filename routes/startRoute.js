//REQUIREMENTS
const express = require("express");
const router = express.Router();

//GETS
router.get("/", (req, res) => {
  res.render("index", {
    style: "main.css",
    title: "Anton Sorkin ",
    message: "Feel free to chech out my Todo app!",
  });
});

//EXPORTS
module.exports = router;
