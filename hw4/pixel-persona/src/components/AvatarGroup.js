import "./AvatarGroup.css";
import SectionTitle from "./SectionTitle";
import AvatarList from "./AvatarList";

function AvatarGroup() {
  return (
    <div className="Avatar-group">
      <SectionTitle title="My Group" />
      <AvatarList />
    </div>
  );
}

export default AvatarGroup;
