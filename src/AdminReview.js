import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import logo from "./Media/logo.jpg";
import ShowReview from "./ShowReview";
import { Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./AdminReview.css";

function AdminReview() {
  const [reviews, setReviews] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("Reviews")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setReviews(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div>
      <nav className="header">
        <Link to="/admin">
          <img
            className="header__logo highlight"
            src={logo}
            alt="logo of bunchOlunch"
          />
        </Link>

        <h2>Hii {user?.email} , Your Reviews</h2>

        <div className="header__admin highlight">
          <Link to="/signup">
            <PersonAddIcon className="header__add__icon" fontSize="large" />
          </Link>
        </div>
      </nav>

      <div className="single__review">
        {reviews?.map((rev) => (
          <ShowReview rev={rev} />
        ))}
      </div>
    </div>
  );
}

export default AdminReview;
