import "./RightPanel.css";
import AvatarButton from "./AvatarButton";
import emptyAvatar from "../images/empty-avatar.png";

function RightPanel() {
  return (
    <div className="Right-panel">
      <AvatarButton name="Add Person to My Group" />
      <AvatarButton
        name="Discard Person"
        action={() => {
          document.getElementById("Avatar-form").reset();
          document.getElementById("Avatar-image-holder").src = emptyAvatar;
        }}
      />
    </div>
  );
}

export default RightPanel;
