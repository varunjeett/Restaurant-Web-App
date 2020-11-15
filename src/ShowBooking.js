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
    <div className="show_booking">
        <div class="name">
          {book.data.name}
        </div>
        <div class="contact_num">
          <a className={"contact__link"} href={`tel: ${book.data.number}`}>
            {book.data.contact}
          </a>
        </div>
        <div class="email">
          <a
            className={"contact__link"}
            href={`mailto: ${book.data.email}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {book.data.email}
          </a>
        </div>
        <div class="booking_date">
          {book.data.bookingDate}
        </div>
        <div class="arrival_time">
          {book.data.arrivalTime}
        </div>
        <div class="booking_id">
          {book.id}
        </div>
        <div onClick={deleteDoc} className="delete__iconbox">
          {/* <DeleteIcon className="delete__icon" fontSize="large" /> */}
          {/* <Button>  */}
                   Delete
                   {/* </Button> */}
        </div>


      </div>
  );
}

export default ShowBooking;
