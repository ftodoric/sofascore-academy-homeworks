import "./index.css";

import { h_min, minutes_diff } from "../../utils/timestamp-conversion";
import { useEffect, useState } from "react";

export function EventTile(props) {
  const event = props.event;

  const [eventStatus, setEventStatus] = useState("");

  // Track event status
  useEffect(() => {
    switch (event.status.type) {
      case "notstarted":
        setEventStatus("-");
        break;
      case "inprogress":
        try {
          setEventStatus(
            minutes_diff(
              event.startTimestamp,
              event.currentTimestamp.timestamp
            ) + "'"
          );
        } catch (err) {
          setEventStatus("HT");
        }
        break;
      case "finished":
        setEventStatus("FT");
        break;
      case "postponed":
        setEventStatus("postp.");
        break;
      default:
        setEventStatus("-");
        break;
    }
  }, [event]);

  function getScore(scoreType) {
    if (scoreType.length === 0) return "";
    else return scoreType.current;
  }

  return (
    <div className="event-tile">
      <div className="status-section">
        <div>{h_min(event.startTimestamp)}</div>
        <div
          style={{
            fontSize: eventStatus === "postp." ? "12px" : "14px",
          }}
        >
          {eventStatus}
        </div>
      </div>
      <div className="team-section">
        <div>{event.homeTeam.name}</div>
        <div>{event.awayTeam.name}</div>
      </div>
      <div className="score-section">
        <div>{getScore(event.homeScore)}</div>
        <div>{getScore(event.awayScore)}</div>
      </div>
    </div>
  );
}
