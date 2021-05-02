import { useEffect, useState, useRef } from "react";
import AddTodoButton from "./AddTodoButton";
import "./styles.css";

function TodoEditor() {
  // States
  const [addingNewTodo, setAddingNewTodo] = useState(false);

  const [inputText, setInputText] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const [todoList, setTodoList] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Active filter states:
  // all
  // completed
  // uncompleted
  const [activeFilter, setActiveFilter] = useState("all");
  const FILTER_MAP = {
    all: () => true,
    completed: (todo) => todo.completed,
    uncompleted: (todo) => !todo.completed,
  };

  // Refs
  const inputRef = useRef(null);

  // When input is empty don't allow 'Add new todo' action
  useEffect(() => {
    if (inputText.length > 0) setIsInputEmpty(false);
    else setIsInputEmpty(true);
  }, [inputText]);

  // Add new todo from the input form
  function addTodo() {
    let copy = [...todoList];
    copy = [
      ...copy,
      { id: todoList.length, name: inputText, completed: false },
    ];
    setTodoList(copy);

    // Reset input text
    setInputText("");
  }

  // Complete todo
  function completeTodo(event) {
    event.preventDefault();
    let copy = [...todoList];
    const todoID = event.target.id;
    copy[todoID].completed = !copy[todoID].completed;
    setTodoList(copy);
  }

  // Remove todo item
  function removeTodo(e) {
    e.preventDefault();
    const todoID = e.target.id;
    let copy = [];
    let k = 0;
    for (let i = 0; i < todoList.length; i++) {
      if (i === Number(todoID)) continue;
      copy.push({
        id: k,
        name: todoList[i].name,
        completed: todoList[i].completed,
      });
      k++;
    }
    setTodoList(copy);
  }

  function showFilters(e) {
    setFiltersVisible(!filtersVisible);
  }

  return (
    <div className="TodoEditor">
      <AddTodoButton
        addingNewTodo={addingNewTodo}
        setAddingNewTodo={setAddingNewTodo}
      />

      <div
        className="NewTodoForm"
        style={{ display: addingNewTodo ? "flex" : "none" }}
      >
        <input
          className="NewTodoInput"
          placeholder="Enter Task"
          value={inputText}
          onChange={() => {
            setInputText(inputRef.current.value);
          }}
          ref={inputRef}
        />
        <button
          className="NewTodoButton"
          style={{ color: isInputEmpty ? "grey" : "#eb4034" }}
          onClick={() => {
            setAddingNewTodo(false);
            addTodo();
          }}
        >
          ✓
        </button>
        <button
          className="NewTodoButton"
          onClick={() => {
            setInputText("");
            setAddingNewTodo(false);
          }}
        >
          X
        </button>
      </div>

      <div className="TodoList">
        <div className="TodoListTitle">TODO LIST</div>
        <button className="ShowFiltersButton" onClick={showFilters}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-filter"
            viewBox="0 -2 16 15"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
          SHOW FILTERS
        </button>
        <div
          className="FilterList"
          style={{ display: filtersVisible ? "flex" : "none" }}
        >
          <button
            className="FilterButton"
            style={{
              backgroundColor: activeFilter === "all" ? "lightgrey" : "white",
            }}
            onClick={() => {
              setActiveFilter("all");
            }}
          >
            All
          </button>
          <button
            className="FilterButton"
            style={{
              backgroundColor:
                activeFilter === "completed" ? "lightgrey" : "white",
            }}
            onClick={() => {
              setActiveFilter("completed");
            }}
          >
            Completed
          </button>
          <button
            className="FilterButton"
            style={{
              backgroundColor:
                activeFilter === "uncompleted" ? "lightgrey" : "white",
            }}
            onClick={() => {
              setActiveFilter("uncompleted");
            }}
          >
            Uncompleted
          </button>
        </div>
        {todoList.filter(FILTER_MAP[activeFilter]).map((todo) => (
          <div key={todo.id}>
            <div
              style={{
                display: "flex",
                flexFlow: "row nowrap",
                marginTop: "30px",
              }}
            >
              <div className="TodoItem">
                <div
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.name}
                </div>

                <button
                  className="NewTodoButton"
                  id={todo.id}
                  onClick={completeTodo}
                >
                  ✓
                </button>
              </div>
              <button
                className="NewTodoButton"
                id={todo.id}
                onClick={removeTodo}
              >
                X
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoEditor;
