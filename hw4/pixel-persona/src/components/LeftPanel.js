import "./LeftPanel.css";

import AvatarProperties from "./AvatarProperties";
import LookGenerator from "./LookGenerator";

function LeftPanel() {
  return (
    <div className="Left-panel">
      <AvatarProperties />
      <LookGenerator />
    </div>
  );
}

export default LeftPanel;
