import { useEffect, useState } from "react";
import "./index.css";

import { fetchEvent, getTeamLogo } from "../../api/sofascore";
import {
  date_h_min,
  h_min_diff_to,
  minutes_diff,
} from "../../utils/timestamp-conversion";
import { LoadingData } from "../../components/LoadingData";
import { MobileResponsive } from "../../components/MobileResponsive";

function EventResponsive(props) {
  const eventID = props.match.params.id;

  const [event, setEvent] = useState(null);

  const [eventStatus, setEventStatus] = useState("");

  // Initial fetch
  useEffect(() => {
    fetchEvent(eventID, setEvent);
  }, [eventID]);

  // Refresh event every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchEvent(eventID, setEvent);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventID]);

  // Print event
  /* useEffect(() => {
    if (event !== null) {
      console.log(event);
    }
  }, [event]); */

  // Track event status
  useEffect(() => {
    if (event === null) return;
    if (event.status.type === "inprogress") {
      try {
        setEventStatus(
          minutes_diff(event.startTimestamp, event.statusTime.timestamp) + "'"
        );
      } catch (err) {
        setEventStatus("HT");
      }
    } else if (event.status.type === "finished") {
      setEventStatus("FT");
    } else if (event.status.type === "postponed") {
      setEventStatus("postponed");
    } else {
      setEventStatus("");
    }
  }, [event]);

  function getScore() {
    return event.status.type === "postponed" ? (
      <div className="score">-</div>
    ) : event.status.type === "notstarted" ? (
      <div className="score">{h_min_diff_to(event.startTimestamp)}</div>
    ) : (
      <div
        className="score"
        style={{
          color: event.status.type === "inprogress" ? "red" : "black",
        }}
      >
        {event.homeScore.current} - {event.awayScore.current}
      </div>
    );
  }

  function getVenueDetails() {
    var venue = event.venue;
    return (
      <div className="venue-details">
        {venue === undefined ? (
          ""
        ) : (
          <>
            <div>
              <div>Location:</div>
              {venue.city.name === undefined
                ? ""
                : " " + venue.city.name + ", "}
              {venue.country.name === undefined ? "" : venue.country.name}
            </div>
            {venue.stadium === undefined ? (
              ""
            ) : (
              <div>
                <div>Stadium:</div>
                {venue.stadium.name}
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  return event === null ? (
    <LoadingData />
  ) : !props.isMobile ? ( // Desktop Design
    <div className="event-container">
      <div className="event-title">
        <div className="category">{event.tournament.category.name}</div>
        <div className="tournament">{event.tournament.name}</div>
      </div>
      <div className="event-time">{date_h_min(event.startTimestamp)}</div>
      <div className="event-result">
        <div className="team-container">
          <img
            className="team-logo"
            src={getTeamLogo(event.homeTeam.id)}
            alt="team logo"
          />
          <div className="team-name home-team">{event.homeTeam.name}</div>
        </div>
        {getScore()}
        <div className="team-container">
          <div className="team-name away-team">{event.awayTeam.name}</div>
          <img
            className="team-logo"
            src={getTeamLogo(event.awayTeam.id)}
            alt="team logo"
          />
        </div>
      </div>
      <div className="event-status">{eventStatus}</div>
      {getVenueDetails()}
    </div>
  ) : (
    // Mobile Design
    <div className="event-container-m">
      <div className="event-title">
        <div className="category">{event.tournament.category.name}</div>
        <div className="tournament-m">{event.tournament.name}</div>
      </div>
      <div className="event-time">{date_h_min(event.startTimestamp)}</div>
      <div className="event-team-names-m">
        {event.homeTeam.name} - {event.awayTeam.name}
      </div>
      <div className="event-result event-result-m">
        <div className="team-container">
          <img
            className="team-logo"
            src={getTeamLogo(event.homeTeam.id)}
            alt="homeTeamLLogo"
          />
        </div>
        {getScore()}
        <div className="team-container">
          <img
            className="team-logo"
            src={getTeamLogo(event.awayTeam.id)}
            alt="awayTeamLogo"
          />
        </div>
      </div>
      <div className="event-status">{eventStatus}</div>
      {getVenueDetails()}
    </div>
  );
}

export const Event = MobileResponsive(EventResponsive);
