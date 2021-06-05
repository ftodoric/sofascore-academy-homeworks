import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { fetchEvents, getTournamentLogo } from "../../api/sofascore";
import { getEventURL } from "../../utils/route-urls";
import { isTournamentInTournaments } from "../../utils/data-manipulation";
import { transformSlug } from "../../utils/string-formating";
import { LoadingData } from "../../components/LoadingData";
import { EventTile } from "../EventTile";

export function Category(props) {
  // Props
  const slug = props.match.params.slug;
  const categoryID = props.match.params.id;
  const date = props.match.params.date;

  // Events
  const [events, setEvents] = useState([]);
  // List of unique tournaments
  const [tournaments, setTournaments] = useState([]);

  // Fetch events
  useEffect(() => {
    fetchEvents(categoryID, date, setEvents);
  }, [categoryID, date]);

  // Refresh events every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchEvents(categoryID, date, setEvents);
    }, 60000);

    return () => clearInterval(intervalId);
  }, [categoryID, date]);

  // Print events
  /* useEffect(() => {
    if (events.length !== 0) {
      console.log(events);
    }
  }, [events]); */

  // Get all unique tournaments
  useEffect(() => {
    if (events.length !== 0) {
      let tournaments = [];
      events.forEach((item) => {
        var tournament = item.tournament.uniqueTournament.name;
        var id = item.tournament.uniqueTournament.id;
        if (!isTournamentInTournaments(tournament, tournaments))
          tournaments.push([id, tournament]);
      });

      setTournaments(tournaments);
    }
  }, [events]);

  return events.length === 0 ? (
    <LoadingData />
  ) : (
    <div className="category-container">
      <div className="event-list">
        <div className="title">{transformSlug(slug)}</div>
        {tournaments.map((tournament) => {
          return (
            <div key={tournament[0]}>
              <div className="unique-tournament">
                <img src={getTournamentLogo(tournament[0])} alt="404" />
                <div className="title">{tournament[1]}</div>
              </div>

              {events
                .filter(
                  (event) =>
                    event.tournament.uniqueTournament.id === tournament[0]
                )
                .map((event) => {
                  return (
                    <div key={event.id}>
                      <Link className="event-tile" to={getEventURL(event.id)}>
                        <EventTile event={event} />
                      </Link>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
