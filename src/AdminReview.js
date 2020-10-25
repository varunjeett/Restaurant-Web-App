import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import logo from "./Media/logo.jpg";
import ShowReview from "./ShowReview";
import { Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./AdminReview.css";
import HomeIcon from "@material-ui/icons/Home";

function AdminReview() {
  const [reviews, setReviews] = useState([]);
  const [{ user }] = useStateValue();
  const [searchItem,setSearch]=useState('');

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
      <nav className="headerAdmin">
      <Link to="/">
          <img
            className="headerAdmin__logo highlight"
            src={logo}
            alt="logo of bunchOlunch"
          />
        </Link>

        <h2>Hii <span className="user__name">{user?.email}</span> , Your Reviews</h2>

        <div className="header__admin">
          <Link className="header__admin__link" to="/adminreview">
            <div className="header__admin__box">
              <HomeIcon className="header__add__icon" fontSize="large" />
              <h5>Admin Home</h5>
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
                      placeholder="Search for Review"
                      value={searchItem}
                      onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())}
                  />
        </div>

        <div className="single__review">
          {
            reviews.filter((review)=>{
                return(review.data.name.toLowerCase().includes(searchItem)||
                String(review.data.number).includes(searchItem)||
                      (review.data.email&&review.data.email.includes(searchItem)))
            })?.map((review) => (
              <ShowReview rev={review} />
          ))}
        </div>
        </div>
    </div>
  );
}

export default AdminReview;
