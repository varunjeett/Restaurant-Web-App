import React from "react";
import "./Scrolling.css";
import bg1 from "./Media/bg1.jpg";
import bg2 from "./Media/bg2.jpg";
import bg3 from "./Media/bg3.jpg";

function Scrolling() {
  return (
    <div className="scrolling">
      <div className="scrolling__firstPage"></div>

      <div className="scrolling__secondPage">
        <h2>
          We prepare rare exotic Indian Punjabi dishes with the finest
          ingredients and selected herbs, marinated and sifted using only the
          best fresh vegetables, Soya food, and high quality Indian spices for
          long lasting and rich experience.
        </h2>
        <h2>
          
        </h2>
      </div>

      <div className="scrolling__thirdPage">
        <h2>
          Authentic North Indian Cuisine. Food Innovation and Creativity. Wah Ji
          Wah is a real delicacy for the lovers of Indian Punjabi Cuisines.
        </h2>
      </div>

      <div className="scrolling__fourthPage">
        <h2>
        We are the only first pure veg specialty hub. Serving vast range of Indian Barbeque & Snacks in Veg Traditional Punjabi tasteful delights, 
        serving royal Indian Punjabi Cuisines that has been rated as one of the finest chain across India.
        </h2>
      </div>
    </div>
  );
}

export default Scrolling;
