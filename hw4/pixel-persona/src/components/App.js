import "./App.css";
import CreateAvatar from "./CreateAvatar";
import AvatarGroup from "./AvatarGroup";

function App() {
  return (
    <div className="App">
      <CreateAvatar />
      <AvatarGroup />
      <script src="./components/avatar-api-script.js"></script>
    </div>
  );
}

export default App;
