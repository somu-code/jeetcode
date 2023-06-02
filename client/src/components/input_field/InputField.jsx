import "./InputField.css";

function InputField(props) {
  return (
    <>
      <input
        type={props.inputType}
        name=""
        id=""
        placeholder={props.placeholderText}
        className="input-field"
      />
    </>
  );
}

export default InputField;
