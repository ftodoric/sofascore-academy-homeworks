/*
tournaments = [
  [id, tournament], ...
]
*/
export function isTournamentInTournaments(tournament, tournaments) {
  for (let i = 0; i < tournaments.length; i++) {
    if (tournament === tournaments[i][1]) return true;
  }
  return false;
}
