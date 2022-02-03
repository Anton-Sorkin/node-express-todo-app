//REQUIREMENTS
const express = require("express");
const router = express.Router();
const todos = require("../data/todos");

//ULITS
const { getNewId } = require("../utils/getNewId");
const { filterCheck } = require("../utils/filterChecker");

//GETS

router.get("/", (req, res) => {
  res.render("todos", {
    todos: todos,
    style: "main.css",
    title: "todo-page",
  });
});

router.get("/addTodo", (req, res) => {
  res.render("todos-add", {
    style: "main.css",
    title: "todo-add",
  });
});

router.get("/incomplete", (req, res) => {
  const todo = filterCheck(false);
  res.render("todos", {
    todos: todo,
    style: "main.css",
    title: "todo-incompleted",
  });
});

router.get("/complete", (req, res) => {
  const todo = filterCheck(true);
  res.render("todos", {
    todos: todo,
    style: "main.css",
    title: "todo-completed",
  });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((i) => i.id === id);
  res.render("todos-single", {
    todo: todo,
    style: "main.css",
    title: "todo-single",
  });
});

router.get("/:id/deleteTodo", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((i) => i.id === id);
  res.render("todos-delete", {
    todo: todo,
    style: "main.css",
    title: "todo-delete",
  });
});

router.get("/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((i) => i.id === id);
  res.render("todos-edit", {
    todo: todo,
    style: "main.css",
    title: "todo-edit",
  });
});

//POSTS

router.post("/addTodo", (req, res) => {
  const id = getNewId(todos);
  const newtodo = {
    id: id,
    todo: req.body.todo,
    created: new Date().toLocaleString(),
    done: false,
  };
  todos.push(newtodo);
  res.redirect("/todos/" + id);
});

router.post("/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((i) => i.id === id);

  todos[index].todo = req.body.todo;
  todos[index].done = Boolean(req.body.done);

  res.redirect("/todos/" + id);
});

router.post("/:id/deleteTodo", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((i) => i.id === id);

  todos.splice(index, 1);

  res.redirect("/todos");
});

//EXPORTS

module.exports = router;
