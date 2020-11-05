import React, { forwardRef, useImperativeHandle } from "react";
import "./InputField.css";
const InputField = forwardRef((props, ref) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setError("");
    props.onChange(event.target.name, event.target.value);
  };

  const validate = () => {
    //return true if is valid
    //else return false

    if (props.validation) {
      const rules = props.validation.split("|");

      for (let i = 0; i < rules.length; i++) {
        const current = rules[i];

        if (current === "required") {
          // In General Validation
          // if (!value) {
          //   setError("This field is required");
          //   return false
          // }

          if (props.name === "name") {
            if (!value) {
              setError("Name is required");
              return false;
            }
          }
          if (props.name === "feedback") {
            if (!value) {
              setError("Feedback is required");
              return false;
            }
          }
          if (props.name === "bookingDate") {
            if (!value) {
              setError("Booking Date is required");
              return false;
            }
          }
          if (props.name === "arrivalTime") {
            if (!value) {
              setError("Arrival Time is required");
              return false;
            }
          }
        }

        // Email validation
        // if (current === "invalid"){
        //   if (props.type == "email") {
        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //     if (!pattern.test(value)) {
        //       setError(`Please enter valid email address.`);
        //       return false
        //     }
        //   }
        // }

        // if (value !== "undefined") {
        //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //   if (!pattern.test(value)) {
        //     setError(`Please enter valid email address.`);
        //     return false
        //   }
        // }

        const pair = current.split(":");
        switch (pair[0]) {
          case "min":
            if (value.length < pair[1]) {
              setError(`Contact should be of  ${pair[1]} digits`);
              return false;
            }
            break;
          case "max":
            if (value.length > pair[1]) {
              setError(
                `This field must be no longer than ${pair[1]} charactesr long`
              );
              return false;
            }
            break;
          default:
            break;
        }
      }
    }

    return true;
  };

  useImperativeHandle(ref, () => {
    return {
      validate: () => validate(),
    };
  });

  return (
    <div className="input__wrapper">
      {props.label && <label>{props.label}</label>}
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={(event) => handleChange(event)}
        type={props.type}
        value={props.value ? props.value : value }
        autoComplete={props.autoComplete}
        className={props.name}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
});

InputField.defaultProps = {
  placeholder: "",
  name: "",
  type: "",
  value: "",
  autoComplete: "off",
  validation: "",
};

export default InputField;
