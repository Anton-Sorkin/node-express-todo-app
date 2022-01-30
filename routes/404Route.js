//requirements
const express = require("express");
const router = express.Router();

//get all non existing pages
router.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found.",
  });
});

//exports
module.exports = router;
