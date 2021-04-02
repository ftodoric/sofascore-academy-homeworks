import "./GeneratorProperties.css";
import AvatarButton from "./AvatarButton";
import getAvatar from "./Avatar-API";
import RadioButton from "./RadioButton";

function GeneratorProperties() {
  return (
    <div className="Generator-properties">
      <AvatarButton
        name="Generate Look"
        action={() => getAvatar(getSprite(), getMood())}
      />
      <div>
        <input type="radio" id="avhappy" name="avmode" value="happy" />
        <label style={{ marginLeft: "10px" }} htmlFor="avhappy">
          Happy
        </label>
      </div>
      <div>
        <input type="radio" id="avsad" name="avmode" value="sad" />
        <label style={{ marginLeft: "10px" }} htmlFor="avsad">
          Sad
        </label>
      </div>
      <div>
        <input type="radio" id="avidenticon" name="avmode" value="identicon" />
        <label style={{ marginLeft: "10px" }} htmlFor="avidenticon">
          Identicon
        </label>
      </div>
      <div>
        <input type="radio" id="avbot" name="avmode" value="bot" />
        <label style={{ marginLeft: "10px" }} htmlFor="avbot">
          Bot
        </label>
      </div>
    </div>
  );
}

function getSprite() {
  var sprite = "";
  if (document.getElementById("avmale").checked) {
    sprite = "male";
  } else if (document.getElementById("avfemale").checked) {
    sprite = "female";
  }
  if (document.getElementById("avidenticon").checked) {
    sprite = "identicon";
  }
  if (document.getElementById("avbot").checked) {
    sprite = "bottts";
  }

  return sprite;
}

function getMood() {
  if (document.getElementById("avidenticon").checked) {
    return "";
  } else if (document.getElementById("avhappy").checked) {
    return "happy";
  } else if (document.getElementById("avsad").checked) {
    return "sad";
  }
}

export default GeneratorProperties;
