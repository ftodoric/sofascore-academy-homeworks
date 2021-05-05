import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";

function App() {
  return (
    <div className="App">
      <Header title="TODO APP" />
      <TodoEditor />
    </div>
  );
}

export default App;
