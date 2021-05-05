import { useState } from "react";
import "./styles.css";
import * as Util from "../util";

// Props: todoList, setTodoList
function TodoList(props) {
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

  // Complete todo
  function completeTodo(event) {
    event.preventDefault();
    const todoID = event.target.id;
    let updated = Util.completeTodo(todoID, props.todoList);
    props.setTodoList(updated);
  }

  // Remove todo item
  function removeTodo(event) {
    event.preventDefault();
    const todoID = event.target.id;
    let updated = Util.removeTodo(todoID, props.todoList);
    props.setTodoList(updated);
  }

  // Show filters
  function showFilters(event) {
    setFiltersVisible(!filtersVisible);
  }

  return (
    <div className="TodoList">
      <div className="TodoListTitle">TODO LIST</div>
      <button className="ShowFiltersButton" onClick={showFilters}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-filter"
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
      {props.todoList.filter(FILTER_MAP[activeFilter]).map((todo) => (
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
            <button className="NewTodoButton" id={todo.id} onClick={removeTodo}>
              X
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
