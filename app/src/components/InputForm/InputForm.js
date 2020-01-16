import React from "react";
import "./InputForm.scss";

function InputForm(props) {

  const { id, label, name, value, type, onChange } = props;

  return (
    <div className="input-form">
      {type === 'submit' && null ? null :
        <label htmlFor={name} className="input-form__label">
          {label}
        </label>
      }
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        className="input-form__input"
        onChange={onChange}
      />
    </div>
  );
}

export default InputForm;
