import React from "react";
import "./ShowBooking.css";
import { db } from "./firebase.js";
import DeleteIcon from "@material-ui/icons/Delete";


function ShowBooking({ book }) {
  const deleteDoc = (e) => {
    e.stopPropagation();
    db.collection("Bookings").doc(book.id).delete();
  };

  return (
    <div className="ShowBooking">
      <div className="show__Booking">
        <h1>Name : {book.data.name}</h1>

        <h3>
          Contact Number :
          <a className={"contact__link"} href={`tel: ${book.data.number}`}>
            {book.data.contact}
          </a>
        </h3>

        <h3>
          Email : 
          <a
            className={"contact__link"}
            href={`mailto: ${book.data.email}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {book.data.email}
          </a>
        </h3>

        <h3>Booking Date : {book.data.bookingDate}</h3>

        <h3>Arrival Time : {book.data.arrivalTime}</h3>

        <h3>Booking ID : {book.id}</h3>
      </div>

      <div onClick={deleteDoc} className="delete__iconbox">
        <DeleteIcon className="delete__icon" fontSize="large" />
        <h4>Delete Permanently</h4>
      </div>
    </div>
  );
}

export default ShowBooking;
