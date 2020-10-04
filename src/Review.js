import React, { useState } from "react";
import "./Review.css";
import { db } from "./firebase";

function Review() {
    
  var obj = new Date();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [review, setReview] = useState("");

  const saveReview = (event) => {
    event.preventDefault();

    if (name && email && number && review) {
      db.collection("Reviews")
        .add({
          name: name,
          email: email,
          number: number,
          review: review,
          timestamp: obj.getTime(),
        })
        .then(alert("Review Saved Successfully"))
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill all the fields properly");
    }
    setName("");
    setEmail("");
    setNumber("");
    setReview("");
  };

  return (
    <div className="review">
      <div className="review__cantainor">
        <div className="review__heading">
          <h1> Your Experience </h1>
        </div>
        <div className="review__form">
          <form className="review__table">
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

            <label>Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <input
              className="review__button"
              type="submit"
              onClick={saveReview}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review;
