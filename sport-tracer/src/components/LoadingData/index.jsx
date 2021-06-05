import "./index.css";
import loadingIcon from "../../images/icon-loading.svg";

export function LoadingData() {
  return (
    <div className="loading-container">
      <img src={loadingIcon} alt="loadingIcon" />
    </div>
  );
}
