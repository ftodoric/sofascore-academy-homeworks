module.exports = {
  addTodoToList: function (todo, todoList) {
    let updatedList = [...todoList];
    updatedList = [...updatedList, todo];
    return updatedList;
  },
  completeTodo: function (todoID, todoList) {
    let updatedList = [...todoList];
    updatedList[todoID].completed = !updatedList[todoID].completed;
    return updatedList;
  },
  removeTodo: function (todoID, todoList) {
    let updatedList = [];
    let k = 0;
    for (let i = 0; i < updatedList.length; i++) {
      if (i === Number(todoID)) continue;
      updatedList.push({
        id: k,
        name: todoList[i].name,
        completed: todoList[i].completed,
      });
      k++;
    }
    return updatedList;
  },
};
