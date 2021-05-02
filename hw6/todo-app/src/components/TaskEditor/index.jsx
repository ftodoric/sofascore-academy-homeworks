import { useEffect, useState, useRef } from "react";
import "./styles.css";

function TaskEditor() {
  // States
  const [showToDoButton, setShowToDoButton] = useState(true);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Refs
  const inputRef = useRef(null);

  // Tracking Changes
  useEffect(() => {
    setShowNewTaskForm(!showToDoButton);
  }, [showToDoButton]);

  function addTodo(event) {
    event.preventDefault();

    // Hide Todo button
    setShowToDoButton(false);
  }

  useEffect(() => {
    if (inputRef.current.value.length > 0) setIsInputEmpty(false);
    else setIsInputEmpty(true);
  }, [inputText]);

  function addTask() {
    let copy = [...taskList];
    copy = [
      ...copy,
      { id: taskList.length, name: inputText, completed: false },
    ];
    setInputText("");
    setTaskList(copy);
  }

  function finishTask(e) {
    e.preventDefault();
    let copy = [...taskList];
    const taskID = e.target.id;
    copy[taskID].completed = !copy[taskID].completed;
    setTaskList(copy);
  }

  function removeTask(e) {
    e.preventDefault();
    const taskID = e.target.id;
    let copy = [];
    let k = 0;
    for (let i = 0; i < taskList.length; i++) {
      if (i === Number(taskID)) continue;
      copy.push({
        id: k,
        name: taskList[i].name,
        completed: taskList[i].completed,
      });
      k++;
    }
    setTaskList(copy);
  }

  function showFiltersAction(e) {
    setShowFilters(!showFilters);
  }

  return (
    <div className="AddTodo">
      <button
        className="AddTodoButton"
        style={{ display: showToDoButton ? "flex" : "none" }}
        onClick={addTodo}
      >
        + ADD TODO
      </button>

      <div
        className="NewTaskForm"
        style={{ display: showNewTaskForm ? "flex" : "none" }}
      >
        <input
          className="NewTaskInput"
          placeholder="Enter Task"
          value={inputText}
          onChange={() => {
            setInputText(inputRef.current.value);
          }}
          ref={inputRef}
        />
        <button
          className="NewTaskButton"
          style={{ color: isInputEmpty ? "grey" : "#eb4034" }}
          onClick={() => {
            setShowToDoButton(true);
            addTask();
          }}
        >
          ✓
        </button>
        <button
          className="NewTaskButton"
          style={{ color: "#eb4034" }}
          onClick={() => {
            setInputText("");
            setShowToDoButton(true);
          }}
        >
          X
        </button>
      </div>

      <div className="TaskList">
        <div className="TodoListTitle">TODO LIST</div>
        <button className="ShowFilterButton" onClick={showFiltersAction}>
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
          style={{ display: showFilters ? "flex" : "none" }}
        >
          <button className="FilterButton">All</button>
          <button className="FilterButton">Completed</button>
          <button className="FilterButton">Not Completed</button>
        </div>
        {taskList.map((task) => (
          <div key={task.id}>
            <div
              style={{
                display: "flex",
                flexFlow: "row nowrap",
                marginTop: "30px",
              }}
            >
              <div className="TaskItem">
                <div
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </div>

                <button
                  className="NewTaskButton"
                  id={task.id}
                  onClick={finishTask}
                >
                  ✓
                </button>
              </div>
              <button
                className="NewTaskButton"
                id={task.id}
                onClick={removeTask}
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

export default TaskEditor;
