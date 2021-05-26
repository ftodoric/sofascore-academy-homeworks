import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Event } from "../Event";
import "./index.css";

export function Category(props) {
  const category = JSON.parse(props.match.params.id);
  const name = category.name;
  const id = category.id;

  // FETCH
  const [events, setEvents] = useState([]);

  // Events Fetch
  useEffect(() => {
    // Get today's date
    var today = new Date().toJSON().slice(0, 10);
    today = String(today);

    // Fetch
    const fetchEvents = async () => {
      const response = await fetch(
        "https://master.dev.sofascore.com/api/v1/category/" +
          id +
          "/scheduled-events/" +
          today
      );
      const { events } = await response.json();
      setEvents(events);
    };
    fetchEvents();
  }, [id]);

  function getEventLink(ev) {
    return "/event/" + ev.id;
  }

  return (
    <div className="event-list">
      <div>{name}</div>
      {events.map(function (item) {
        return (
          <div key={item.id}>
            <Link className="event-button" to={() => getEventLink(item)}>
              {item.homeTeam.name} - {item.awayTeam.name}
            </Link>
            <Route path="/event/:id" component={Event} />
          </div>
        );
      })}
    </div>
  );
}
