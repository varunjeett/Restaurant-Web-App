import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import logo from "./Media/logo.jpg";
import ShowReview from "./ShowReview";
import { Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./AdminReview.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';

function AdminReview() {
  const [reviews, setReviews] = useState([]);
  const [{ user }] = useStateValue();
  const [searchItem,setSearch]=useState('');
  const [clicked,setClick]=useState(false);
  const [results,setResults]=useState([]);
  const [searchEmpty,setEmpty]=useState(true);
  

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

  const checkSubstr=(a,b)=>{
    
    let substrs=[a[0]];
  
    for(let i=1;i<a.length;i++){

      let tobeAdded=[];

      for(let j=0;j<substrs.length;j++){
        tobeAdded.push(substrs[j]+a[i]);
      }
      substrs=[...substrs,...tobeAdded];
    }

    for(let j=0;j<substrs.length;j++){
      if (substrs[j]===b){
        return true;
      }
    }
    
    return false;
  }

  const handleSearch=(e)=>{
    e.preventDefault(); 
    setClick(true);
    setEmpty(true);

    setResults(reviews.filter((review)=>{
      const flag=(checkSubstr(review.data.name.toLowerCase(),searchItem)||
             String(review?.data.contact)?.includes(searchItem)||
             review?.data.email?.includes(searchItem));
      if(flag) setEmpty(false);
      return flag;
    }));
  }


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
          <Link className="header__admin__link" to="/admin">
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
                      onChange={(e)=> {setSearch(e.target.value.toLocaleLowerCase());setClick(false);}}
                  />
                  <button type="submit" onClick={handleSearch}><SearchIcon/></button>
        </div>

        <div className="single__review">
          {
            !clicked&&reviews.filter((review)=>{
                return(review.data.name.toLowerCase().includes(searchItem)||
                      String(review?.data.contact)?.includes(searchItem)||
                      (review?.data.email?.includes(searchItem)))
            })?.map((review) => (
              <ShowReview rev={review} />
          ))}
          {clicked&&results?.map(result=>(<ShowReview rev={result}/>))}
          {clicked&&searchEmpty&&<h1>No Result Found</h1>}
        </div>
        </div>
    </div>
  );
}

export default AdminReview;
