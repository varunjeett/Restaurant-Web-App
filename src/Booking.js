import React, { useState } from "react";
import { db } from "./firebase";
import "./Booking.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import InputField from "./InputField";

function Booking() {
  // eslint-disable-next-line

  const [state, dispatch] = useStateValue();
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const [data, setData] = useState({});
  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    // console.log(data.name);
    // console.log(data.contact);
    // console.log(data.email);
    // console.log(data.arrivalTime);

    db.collection("Bookings")
      .add({
        name: data.name,
        contact: data.contact,
        email: data.email,
        arrivalTime: data.arrivalTime,
        bookingDate: data.bookingDate,
        timestamp: new Date().getTime(),
      })
      .then((docRef) => {
        console.log(docRef.id);
        dispatch({
          type: actionTypes.SET_BOOKING,
          id: docRef.id,
          name: data.name,
          email: data.email,
          contact: data.contact,
          arrivalTime: data.arrivalTime,
          bookingDate: data.bookingDate,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    
    <div className="booking">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      <div className="booking__fields">
        <form onSubmit={submitForm} className="booking__form">
          <h1 className="booking-head">Booking</h1>
          <br/>
          <InputField
            ref={inputRefs.current[0]}
            name="name"
            type="text"
            label="Name*:"
            onChange={handleChange}
            validation={"required"}
            placeholder=" Enter your Name"
          />

          <InputField
            ref={inputRefs.current[1]}
            name="email"
            type="email"
            label="Email:"
            onChange={handleChange}
            validation={"invalid"}
            placeholder=" Enter your Email"
          />

          <InputField
            ref={inputRefs.current[2]}
            name="contact"
            type="text"
            label="Contact*:"
            validation="required|min:10|max:10"
            onChange={handleChange}
            placeholder=" Enter your Contact No."
          />

          <InputField
            ref={inputRefs.current[3]}
            name="bookingDate"
            type="text"
            label="Booking Date*:"
            validation="required"
            onChange={handleChange}
            placeholder=" Format : Date/Month"
          />

          <InputField
            ref={inputRefs.current[4]}
            name="arrivalTime"
            type="text"
            label="Arrival time*:"
            validation="required"
            onChange={handleChange}
            placeholder=" Format : Hour/Min AM/PM"
          />

          <button className="booking__button" type="submit">Confirm</button>
          <label className="booking__caution">* mandatory fields</label>
        </form>
      </div>
    </div>
  );
}

export default Booking;

