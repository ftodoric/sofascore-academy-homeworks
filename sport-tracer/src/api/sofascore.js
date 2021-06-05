export const fetchCategories = async (sport, date, offset, setCategories) => {
  const response = await fetch(
    "https://master.dev.sofascore.com/api/v1/sport/" +
      sport +
      "/" +
      date +
      "/" +
      offset +
      "/categories"
  );
  const { categories } = await response.json();
  setCategories(categories);
};

export const fetchEvents = async (id, date, setEvents) => {
  const response = await fetch(
    "https://master.dev.sofascore.com/api/v1/category/" +
      id +
      "/scheduled-events/" +
      date
  );
  const { events } = await response.json();
  setEvents(events);
};

export const fetchEvent = async (eventID, setMatchDetails) => {
  const response = await fetch(
    "https://master.dev.sofascore.com/api/v1/event/" + eventID
  );
  const { event } = await response.json();
  //console.log(event);
  setMatchDetails(event);
};

export function getTournamentLogo(tournamentID) {
  return (
    "https://master.dev.sofascore.com/api/v1/unique-tournament/" +
    tournamentID +
    "/image"
  );
}

export function getTeamLogo(teamID) {
  return "https://master.dev.sofascore.com/api/v1/team/" + teamID + "/image";
}
