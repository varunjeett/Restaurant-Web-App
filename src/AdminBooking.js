import React, { useEffect, useState } from "react";
import { db } from "./firebase.js";
import ShowBooking from "./ShowBooking.js";
import "./AdminBooking.css";
import { useStateValue } from "./StateProvider.js";
import logo from "./Media/logo.jpg";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import FeedbackIcon from "@material-ui/icons/Feedback";

function AdminBooking() {
  const [bookings, setBooking] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("Bookings")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setBooking(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <>
      <nav className="admin__header">
        
        <Link to="/">
          <img
            className="header__logo highlight"
            src={logo}
            alt="logo of bunchOlunch"
          />
        </Link>

        <h2>Hii <span className="user__name">{user?.email}</span> , Your Bookings</h2>

        <div className="header__admin">
          <Link  className="header__admin__link" to="/admin">
            <div className="header__admin__box">
              <HomeIcon className="header__add__icon" fontSize="large" />
              <h5>Admin Home</h5>
            </div>
          </Link>
        </div>

        <div className="header__admin">
          <Link className="header__admin__link" to="/adminreview">
            <div className="header__admin__box">
              <FeedbackIcon className="header__add__icon" fontSize="large" />
              <h5>See Reviews</h5>
            </div>
          </Link>
        </div>

        <div className="header__admin">
          <Link className="header__admin__link" to="/signup">
            <div className="header__admin__box">
              <PersonAddIcon className="header__add__icon" fontSize="large" />
              <h5>Create New Admin</h5>
            </div>
          </Link>
        </div>

      </nav>

      <div className="single__booking">
        {bookings?.map((book) => (
          <ShowBooking book={book} />
        ))}
      </div>
    </>
  );
}

export default AdminBooking;
