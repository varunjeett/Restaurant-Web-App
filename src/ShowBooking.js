import React from "react";
import "./ShowBooking.css";

function ShowBooking({ book }) {
  return (
    <div className="show__Booking">
    
      <h1>Name : {book.data.name}</h1>

      <h3>Phone Number : {book.data.number}</h3>

      <h3>Email : {book.data.email}</h3>

      <h3>ID : {book.id}</h3>
    </div>
  );
}

export default ShowBooking;
