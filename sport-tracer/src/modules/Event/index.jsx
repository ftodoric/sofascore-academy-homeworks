import { useEffect, useState } from "react";

export function Event(props) {
  const eventID = props.match.params.id;

  // FETCH
  const [matchDetails, setMatchDetails] = useState(null);

  // Events Fetch
  useEffect(() => {
    // Fetch
    const fetchEvent = async () => {
      const response = await fetch(
        "https://master.dev.sofascore.com/api/v1/event/" + eventID
      );
      const { matchDetails } = await response.json();
      console.log(matchDetails);
      setMatchDetails(matchDetails);
    };
    fetchEvent();
  }, [eventID]);

  return <div className="match-details">details</div>;
}
