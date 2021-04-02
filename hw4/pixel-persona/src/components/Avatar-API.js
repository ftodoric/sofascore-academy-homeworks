export default function getAvatar(sprite, mood) {
  var seed = Math.floor(Math.random() * 100);
  var url;
  if (mood !== "") {
    url =
      "https://avatars.dicebear.com/api/" +
      sprite +
      "/" +
      seed +
      ".svg?mood[]=" +
      mood;
  } else {
    url = "https://avatars.dicebear.com/api/" + sprite + "/" + seed + ".svg";
  }
  const holder = document.getElementById("Avatar-image-holder");
  holder.src = url;
}
