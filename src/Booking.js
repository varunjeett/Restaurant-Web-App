import React, { useState } from "react";
import { db } from "./firebase";
import "./Booking.css";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const DoneBooking = (event) => {
    var obj = new Date();
    event.preventDefault();
    if (name && email && number && date && time) {
      db.collection("Bookings")
        .add({
          name: name,
          email: email,
          number: number,
          date: date,
          time: time,
          timestamp: obj.getTime(),
        })
        .then(alert("Booking Done Successfully"))
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill all the fields properly");
    }
    setName("");
    setEmail("");
    setNumber("");
    setTime("");
    setDate("");
  };

  return (
    <div className="booking">
      <div className="booking__box">
        <div className="booking__img">
          <h2>Let us serve you better</h2>
          <p>
            Don’t wait in a line to enjoy your meal.
            <br /> Reserve a table in advance with us:{" "}
          </p>
          <div className="booking__form">
            <form className="booking__table">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Mobile</label>
              <input
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />

              <label>Date:</label>
              <input
                type="text"
                value={date}
                placeholder="Date-Month"
                onChange={(e) => setDate(e.target.value)}
              />

              <label>Time:</label>
              <input
                type="text"
                value={time}
                placeholder="Start-Time: Hour-Min End-Time: Hour-Min "
                onChange={(e) => setTime(e.target.value)}
              />

              <button
                className="booking__button"
                type="submit"
                onClick={DoneBooking}
              >
                {" "}
                Book Now! ! !
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
