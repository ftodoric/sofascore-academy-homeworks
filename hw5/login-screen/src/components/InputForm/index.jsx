import { useEffect, useState } from "react";
import "./styles.css";

function InputForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPassHidden, setPassHidden] = useState(false);

  useEffect(() => {
    document.getElementById("password").value = username;
  }, [username]);

  useEffect(() => {
    document.getElementById("password").type = isPassHidden
      ? "password"
      : "text";
  }, [isPassHidden]);

  return (
    <div>
      <form className="input-form">
        <div className="input-space">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={() => {
              setUsername(document.getElementById("username").value);
            }}
          />
        </div>
        <div className="input-space">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={() => {
              setPassword(document.getElementById("password").value);
            }}
          />
        </div>
        <div>
          <input
            className="button hide-pass-button"
            type="button"
            id="hide-password"
            onClick={() => setPassHidden(!isPassHidden)}
            value={isPassHidden ? "Show password" : "Hide password"}
          />
        </div>
        <div>
          <input
            className="button"
            type="button"
            id="submit-button"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}

export default InputForm;
