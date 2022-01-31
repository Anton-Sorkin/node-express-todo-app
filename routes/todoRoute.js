//requirements
const express = require("express");
const router = express.Router();
const todos = require("../data/todos");

//functions
function getNewId(list) {
  let maxId = 0;
  for (const item of list) {
    if (item.id > maxId) {
      maxId = item.id;
    }
  }
  return maxId + 1;
}

//get /localhost:8080/
router.get("/", (req, res) => {
  res.render("todos", {
    todos: todos,
  });
});

router.get("/addTodo", (req, res) => {
  res.render("todos-add", {});
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((i) => i.id === id);
  res.render("todos-single", todo);
});

router.get("/:id/deleteTodo", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((i) => i.id === id);
  res.render("todos-delete", todo);
});

router.post("/addTodo", (req, res) => {
  const id = getNewId(todos);
  const newtodo = {
    id: id,
    todo: req.body.todo,
  };
  todos.push(newtodo);
  res.redirect("/todos/" + id);
});

router.post("/:id/deleteTodo", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((i) => i.id === id);

  todos.splice(index, 1);

  res.redirect("/todos");
});
//exports
module.exports = router;
