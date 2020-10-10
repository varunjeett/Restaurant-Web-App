import React from "react";
import "./ShowReview.css";
import { db } from "./firebase.js";
import DeleteIcon from "@material-ui/icons/Delete";


function ShowReview({ rev }) {
  const deleteDoc = (e) => {
    e.stopPropagation();
    db.collection("Reviews").doc(rev.id).delete();
  };

  return (
    <div className="ShowReview">
      <div className="show__Review">
        <h1>Name : {rev.data.name}</h1>

        <h3>
          Phone Number :
          <a className={"contact__link"} href={`tel: ${rev.data.number}`}>
            {rev.data.number}
          </a>
        </h3>

       
        <h3>
          Email :
          <a
            className={"contact__link"}
            href={`mailto: ${rev.data.email}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {rev.data.email}
          </a>
        </h3>

        <h3>Review : {rev.data.fb}</h3>

        <h5>ID : {rev.id}</h5>
      </div>

      <div onClick={deleteDoc} className="delete__iconbox">
        <DeleteIcon className="delete__icon" fontSize="large" />
        <h4>Delete Permanently</h4>
      </div>
    </div>
  );
}

export default ShowReview;
