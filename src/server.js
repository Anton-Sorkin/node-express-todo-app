//remember to add nodemon as a dev: npm install nodemon --save-dev

//requirements
const express = require("express");
const exphbs = require("express-handlebars");

//routes requirements
const startRoute = require("../routes/startRoute");
const todoRoute = require("../routes/todoRoute");
const errorRoute = require("../routes/404Route");

//initalize app
const app = express();

//view engine
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
  })
);
app.use(express.static("public"));

//middlewares
app.use(express.urlencoded({ extended: true }));

//use routes
app.use("/", startRoute);
app.use("/todos", todoRoute);

//error route, ALWAYS LAST!
app.use("*", errorRoute);

//server listening
app.listen(8080, () => {
  console.log("Server is up at http://localhost:8080.");
});
