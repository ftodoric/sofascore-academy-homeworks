export function getCategories() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://master.dev.sofascore.com/api/v1/sport/football/2021-05-24/7200/categories",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) =>
      result.categories.map((category) => category.category.name)
    )
    .catch((error) => console.log("error", error));
}
