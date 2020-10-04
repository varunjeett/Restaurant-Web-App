import React from "react";
import "./ShowBooking.css";

function ShowBooking({ book }) {
  return (
    <div className="show__Booking">
    
      <h1>Name : {book.data.name}</h1>

      <h3>Phone Number : {book.data.number}</h3>

      <h3>Email : {book.data.email}</h3>

      <h3>Date : {book.data.date}</h3>

      <h3>Time : {book.data.time}</h3>

      <h4>ID : {book.id}</h4>

    </div>
  );
}

export default ShowBooking;
