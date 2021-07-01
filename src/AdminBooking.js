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
import { TrendingUpOutlined } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';

function AdminBooking() {
  const [bookings, setBooking] = useState([]);
  const [searchItem, setSearch] = useState('');
  const [clicked, setClick] = useState(false);
  const [results, setResults] = useState([]);
  const [searchEmpty, setEmpty] = useState(true);

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

  const checkSubstr = (a, b) => {

    let substrs = [a[0]];

    for (let i = 1; i < a.length; i++) {

      let tobeAdded = [];

      for (let j = 0; j < substrs.length; j++) {
        tobeAdded.push(substrs[j] + a[i]);
      }
      substrs = [...substrs, ...tobeAdded];
    }

    for (let j = 0; j < substrs.length; j++) {
      if (substrs[j] === b) {
        return true;
      }
    }

    return false;
  }


  const handleSearch = (e) => {
    e.preventDefault();
    setClick(true);

    setEmpty(true);

    setResults(bookings.filter((booking) => {
      const flag = (checkSubstr(booking.data.name.toLowerCase(), searchItem) ||
        String(booking.data.number).includes(searchItem) ||
        booking?.data.email.includes(searchItem));
      if (flag) setEmpty(false);
      return flag;
    }));



  }

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
          <Link className="header__admin__link" to="/admin">
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


      <div className="content">
        <div className="searchBar">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="search for booking"
            value={searchItem}
            onChange={(e) => { setSearch(e.target.value.toLocaleLowerCase()); setClick(false); }}
          />
          <button type="submit" onClick={handleSearch}><SearchIcon /></button>
        </div>

        <div className="single__booking">
          <div className="booking_table" >
            
            <div className="table_header">
              <div class="table_head_name">Name</div>
              <div class="table_head_contact_num">Contact Number</div>
              <div class="table_head_email">Email </div>
              <div class="table_head_booking_date">Booking Date </div>
              <div class="table_head_arrival_time">Arrival Time </div>
              <div class="table_head_booking_id">Booking ID</div>
              <div class="table_head_delete">Delete Permanently</div>
            </div>
          </div>
          {

            !clicked && bookings.filter((booking) => {
              return (booking.data.name.toLowerCase().includes(searchItem) ||
                String(booking.data.number).includes(searchItem) ||
                (booking.data.email && booking.data.email.includes(searchItem))
              )
            })?.map((book) => (
              <ShowBooking book={book} />
            ))
          }
          {clicked && results?.map(result => (<ShowBooking book={result} />))}
          {clicked && searchEmpty && <h1>No Result Found</h1>}
        </div>
      </div>
    </>
  );
}

export default AdminBooking;
