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
        <table style={{width:'100%' , border:' 1px solid black'}}>
        <col width="150"/> 
            <col width="100"/> 
                <col width="250"/> 
                <col width="130"/> 
                <col width="200"/> 
                <col width="200"/> 
                <col width="200"/> 
          <tr>
            <th>
              {book.data.name}     
              </th>
            <th>
              <a className={"contact__link"} href={`tel: ${book.data.number}`}>
            {book.data.contact}
          </a>
          </th>
            <th>
            <a
            className={"contact__link"}
            href={`mailto: ${book.data.email}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {book.data.email}
          </a>
            </th>
            <th>
              {book.data.bookingDate}
            </th>
            <th>
            {book.data.arrivalTime}
            </th>
            <th>
            {book.id}
            </th>
            <th onClick={deleteDoc} className="delete__iconbox">
        <DeleteIcon className="delete__icon" fontSize="large" />
      
      </th>
          </tr>
          
        </table>
      </div>
    </div>
  );
}

export default ShowBooking;
