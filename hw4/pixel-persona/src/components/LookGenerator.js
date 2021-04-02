import "./LookGenerator.css";
import GeneratorProperties from "./GeneratorProperties";
import emptyAvatar from "../images/empty-avatar.png";

function LookGenerator() {
  return (
    <div className="Look-generator">
      <img
        id="Avatar-image-holder"
        width="240px"
        height="190px"
        src={emptyAvatar}
      />
      <GeneratorProperties />
    </div>
  );
}

export default LookGenerator;
