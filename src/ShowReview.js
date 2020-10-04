import React from "react";
import "./ShowReview.css";

function ShowReview({ rev }) {
  return (
    <div className="show__Review">
      <h1>Name : {rev.data.name}</h1>

      <h3>Phone Number : {rev.data.number}</h3>

      <h3>Email : {rev.data.email}</h3>

      <h4>Review : {rev.data.review}</h4>

      <h4>ID : {rev.id}</h4>
    </div>
  );
}

export default ShowReview;
