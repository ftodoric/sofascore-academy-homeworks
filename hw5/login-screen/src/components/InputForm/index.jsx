import { useEffect, useRef, useState } from "react";
import "./styles.css";

function InputForm() {
  const [username, setUsername] = useState("testUser");
  const [password, setPassword] = useState("testUser-password");
  const [isPassHidden, setPassHidden] = useState(false);
  const [isLoginSuccess, setLoginSuccess] = useState(null);

  const passwordHidden = useRef(null);
  const loginStatus = useRef(null);

  // Show/Hide password
  useEffect(() => {
    passwordHidden.current.type = isPassHidden ? "password" : "text";
  }, [isPassHidden]);

  // Print Login Success
  useEffect(() => {
    switch (isLoginSuccess) {
      case null:
        loginStatus.current.innerText = "";
        break;
      case true:
        loginStatus.current.innerText = "Login successfull";
        break;
      case false:
        loginStatus.current.innerText = "Incorrect username and/or password";
        break;
      default:
        loginStatus.current.innerText = "";
    }
  }, [isLoginSuccess]);

  // Submit event
  function submitForm(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://private-leagues-api.herokuapp.com/api/login", requestOptions)
      .then((response) => {
        if (response.status === 200) setLoginSuccess(true);
        else if (response.status === 404) {
          setLoginSuccess(false);
        }
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <form className="input-form" id="form-userDataauserData">
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
            ref={passwordHidden}
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
            type="submit"
            id="submit-button"
            value="Login"
            onClick={submitForm}
          />
        </div>
        <div style={{ marginTop: "20px" }} ref={loginStatus}></div>
      </form>
    </div>
  );
}

export default InputForm;
