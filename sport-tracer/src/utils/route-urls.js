export function getCategoryURL(slug, categoryID, date) {
  return "/category/" + slug + "/" + categoryID + "/" + date;
}

export function getEventURL(eventID) {
  return "/event/" + eventID;
}
