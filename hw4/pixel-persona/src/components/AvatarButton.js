import "./AvatarButton.css";

function AvatarButton({ name, action }) {
  return (
    <button
      className="Avatar-button"
      onClick={action}
      style={{ fontFamily: "Ubuntu" }}
    >
      {name}
    </button>
  );
}

export default AvatarButton;
