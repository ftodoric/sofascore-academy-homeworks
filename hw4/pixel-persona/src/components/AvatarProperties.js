import "./AvatarProperties.css";

function AvatarProperties() {
  return (
    <div className="Avatar-properties">
      <form className="Avatar-form" id="Avatar-form">
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
          }}
        >
          <label htmlFor="avfirst">First Name</label>
          <input type="text" id="avfirst" name="avfirst" />
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <label htmlFor="avlast">Last Name</label>
          <input type="text" id="avlast" name="avlast" />
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div>
            <input type="radio" id="avmale" name="avgender" value="male" />
            <label style={{ marginLeft: "10px" }} htmlFor="avmale">
              Male
            </label>
          </div>

          <div>
            <input
              style={{ marginLeft: "30px" }}
              type="radio"
              id="avfemale"
              name="avgender"
              value="female"
            />
            <label style={{ marginLeft: "10px" }} htmlFor="avfemale">
              Female
            </label>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <label htmlFor="avage">Age</label>
          <input type="number" id="avage" name="avage" />
        </div>
      </form>
    </div>
  );
}

export default AvatarProperties;
