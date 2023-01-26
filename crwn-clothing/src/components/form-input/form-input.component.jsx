import "./form-input.styles.scss";

const FormInput = ({ label, inputOtions }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOtions} />
      {label && (
        <label
          className={`${
            inputOtions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
