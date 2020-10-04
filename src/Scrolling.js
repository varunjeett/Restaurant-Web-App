import React, { useState, useEffect } from 'react'
import ShowReview from './ShowReview'
import './Scrolling.css'
import { db } from "./firebase.js"

function Scrolling() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        db.collection("Reviews")
            .onSnapshot((snapshot) =>
                setReviews(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, [])


    return (

        <div className="scrolling">
            <div className="scrolling__firstPage"></div>
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
            {/* <div className="scrolling__fourPage"></div> */}

            <div className="scrolling__sixPage">
                <div className="reviews__review">
                    {reviews?.map((rev) => (
                        <ShowReview rev={rev} />
                    ))}
                </div>
                <h2> Reviews: </h2>
                <li>
                    <ul>
                        <p>Waj ji Waj one of the best veg food chain in India</p>
                    </ul>
                </li>
            </div>

        </div>
    )
}

export default Scrolling