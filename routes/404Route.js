//REQUIREMENTS
const express = require("express");
const router = express.Router();

//GETS

//gets all non existing pages
router.get("*", (req, res) => {
  res.render("404", {
    style: "main.css",
    title: "404",
    errorMessage: "Page not found.",
  });
});

//EXPORTS
module.exports = router;
