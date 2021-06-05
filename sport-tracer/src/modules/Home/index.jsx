import { Link } from "react-router-dom";
import "./index.css";

import tileImageFootball from "../../images/tile-image-football.png";
import tileImageBasketball from "../../images/tile-image-basketball.png";
import tileImageRugby from "../../images/tile-image-rugby.png";

export function Home() {
  return (
    <div className="home">
      <div className="title">Sports:</div>
      <Link className="sport-tile" to="/categories/football/2021-06-04/7200">
        <img src={tileImageFootball} alt="tileImageFootball" />
        <div className="name">Football</div>
      </Link>
      <Link className="sport-tile" to="/categories/basketball/2021-06-04/7200">
        <img src={tileImageBasketball} alt="tileImageBasketball" />
        <div className="name">Basketball</div>
      </Link>
      <Link className="sport-tile" to="/categories/rugby/2021-06-04/7200">
        <img src={tileImageRugby} alt="tileImageRugby" />
        <div className="name">Rugby</div>
      </Link>
    </div>
  );
}
