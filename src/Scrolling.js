import React, { useState, useEffect } from 'react'
// import About from './About'
import ShowReview from './ShowReview'
import './Scrolling.css'
function Scrolling() {

    return (

        <div className="scrolling">
            <div className="scrolling__firstPage"></div>
            {/* <About /> */}
            <div className="scrolling__thirdPage">
                <h2>
                    We prepare rare exotic Indian Punjabi dishes with the finest ingredients and selected herbs, marinated and sifted using only the best fresh vegetables, Soya food, and high quality Indian spices for long lasting and rich experience.
                </h2>
            </div>
            <div className="scrolling__fivePage">
                <h2>
                    Authentic North Indian Cuisine. Food Innovation and Creativity.
                    Wah Ji Wah is a real delicacy for the lovers of Indian Punjabi Cuisines.
                </h2>
            </div>
            <div className="scrolling__sixPage">

                <h2> Reviews: </h2>
                <li>
                    <ul>
                        <p>Waj ji Waj one of the best veg food chain in India</p>
                    </ul>
                </li>
            </div>

      <div className="scrolling__sixPage">
        <h2> Reviews: </h2>
        <li>
          <ul>
            <p>Waj ji Waj one of the best veg food chain in India</p>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default Scrolling;
