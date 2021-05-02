import "./styles.css";

function AddTodoButton({ addingNewTodo, setAddingNewTodo }) {
  return (
    <button
      className="AddTodoButton"
      style={{ display: !addingNewTodo ? "flex" : "none" }}
      onClick={() => setAddingNewTodo(true)}
    >
      + ADD TODO
    </button>
  );
}

export default AddTodoButton;
