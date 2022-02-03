const todos = require("../data/todos");

module.exports.filterCheck = (bool) => {
  {
    let filteredTodos = todos.filter(function (product) {
      // Filter the data array by looking at each product in it
      //see if any of the keys have a value of true
      return Object.keys(product).some(function (key) {
        return product[key] === bool;
      });
    });
    return filteredTodos;
  }
};
