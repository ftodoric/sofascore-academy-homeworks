import "./RightPanel.css";
import AvatarButton from "./AvatarButton";
import emptyAvatar from "../images/empty-avatar.png";

function RightPanel() {
  return (
    <div className="Right-panel">
      <AvatarButton
        name="Add Person to My Group"
        action={createItemListWithCurrentData}
      />
      <AvatarButton
        name="Discard Person"
        action={() => {
          document.getElementById("Avatar-form").reset();
          document.getElementById("Avatar-image-holder").src = emptyAvatar;
          var generatorRadioElement = document.getElementsByName("avmode");
          for (var i = 0; i < generatorRadioElement.length; i++)
            generatorRadioElement[i].checked = false;
        }}
      />
    </div>
  );
}

function createItemListWithCurrentData() {
  const avatarList = document.getElementById("avatar-list");

  // create list item with current data
  const item = document.createElement("li");

  // create div for image and name
  const itemDiv = document.createElement("div");
  itemDiv.className = "Avatar-item";

  item.appendChild(itemDiv);

  // create image div
  const imageDiv = document.createElement("img");
  imageDiv.src = document.getElementById("Avatar-image-holder").src;
  imageDiv.className = "Item-icon";

  itemDiv.appendChild(imageDiv);

  // create name div
  const nameDiv = document.createElement("div");
  nameDiv.style =
    "display: flex; flex-flow: column nowrap; justify-content: center; margin-left: 50px; width: 200px; font-size: 23px; text-transform: capitalize;";
  nameDiv.innerHTML =
    "<div>" +
    document.getElementById("avfirst").value +
    "</div><div>" +
    document.getElementById("avlast").value +
    "</div>";

  itemDiv.appendChild(nameDiv);

  // create remove button
  const removeButton = document.createElement("button");
  removeButton.className = "Avatar-button";
  removeButton.innerText = "Remove";
  removeButton.onclick = function () {
    item.remove();
  };

  itemDiv.appendChild(removeButton);

  // create separator
  const separator = document.createElement("hr");
  item.appendChild(separator);

  // append item to the list
  avatarList.appendChild(item);
}

export default RightPanel;
