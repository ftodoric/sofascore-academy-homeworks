import { useState, useEffect, useRef } from "react";
import "./styles.css";

// Props: addingNewTodo, setAddingNewTodo, handleNewTodo
function NewTodoForm(props) {
  const [inputText, setInputText] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  // Refs
  const inputRef = useRef(null);

  // When form input is empty don't allow 'Add new todo' action
  useEffect(() => {
    if (inputText.length > 0) setIsInputEmpty(false);
    else setIsInputEmpty(true);
  }, [inputText]);

  return (
    <div
      className="NewTodoForm"
      style={{ display: props.addingNewTodo ? "flex" : "none" }}
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
          props.handleNewTodo(inputText);
          setInputText("");
        }}
      >
        ✓
      </button>
      <button
        className="NewTodoButton"
        onClick={() => {
          setInputText("");
          props.setAddingNewTodo(false);
        }}
      >
        X
      </button>
    </div>
  );
}

export default NewTodoForm;
