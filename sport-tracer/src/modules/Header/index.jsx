import "./index.css";
import headerLogo from "../../images/ball-1.png";

export function Header() {
  return (
    <div className="header">
      <img className="logo" src={headerLogo} alt="headerLogo" />
      <div className="title-frame">
        <div className="title">SportTracer</div>
        <div className="subtitle">Live Football Results</div>
      </div>
    </div>
  );
}
