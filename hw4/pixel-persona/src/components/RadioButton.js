import "./RadioButton.css";

function RadioButton(id, name, value, labelText) {
  return (
    <div className="Radio-button">
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
}

export default RadioButton;
