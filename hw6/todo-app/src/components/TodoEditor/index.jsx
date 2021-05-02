import { useState } from "react";
import "./styles.css";
import * as Util from "./util.js";

import AddTodoButton from "./AddTodoButton";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function TodoEditor() {
  // States
  const [addingNewTodo, setAddingNewTodo] = useState(false);
  const [todoList, setTodoList] = useState([]);

  // Add new todo from the input form
  function handleNewTodo(inputText) {
    // Change state
    setAddingNewTodo(false);

    // Add new todo to the list
    let updated = Util.addTodoToList(
      { id: todoList.length, name: inputText, completed: false },
      todoList
    );
    setTodoList(updated);
  }

  return (
    <div className="TodoEditor">
      <AddTodoButton
        addingNewTodo={addingNewTodo}
        setAddingNewTodo={setAddingNewTodo}
      />

      <NewTodoForm
        addingNewTodo={addingNewTodo}
        setAddingNewTodo={setAddingNewTodo}
        handleNewTodo={handleNewTodo}
      />

      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default TodoEditor;
