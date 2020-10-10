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
          Phone Number :
          <a className={"contact__link"} href={`tel: ${book.data.number}`}>
            {book.data.number}
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

        <h3>Date : {book.data.date}</h3>

        <h3>Time : {book.data.time}</h3>

        <h5>ID : {book.id}</h5>
      </div>

      <div onClick={deleteDoc} className="delete__iconbox">
        <DeleteIcon className="delete__icon" fontSize="large" />
        <h4>Delete Permanently</h4>
      </div>
    </div>
  );
}

export default ShowBooking;
