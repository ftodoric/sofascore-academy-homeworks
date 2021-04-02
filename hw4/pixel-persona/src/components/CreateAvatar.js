import "./CreateAvatar.css";
import AvatarProperties from "./AvatarProperties";
import SectionTitle from "./SectionTitle";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import AvatarBuilder from "./AvatarBuilder";

function CreateAvatar() {
  return (
    <div className="Create-avatar">
      <SectionTitle title="Create avatar" />
      <AvatarBuilder />
    </div>
  );
}

export default CreateAvatar;
