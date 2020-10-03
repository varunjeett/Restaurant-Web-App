import React, { useState, useEffect } from 'react'
import About from './About'
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
            <About />
            <div className="scrolling__thirdPage"></div>
            <div className="scrolling__fourPage"></div>
            <div className="scrolling__fivePage"></div>

            <div className="scrolling__sixPage">
                <div className="reviews__review">
                    {reviews?.map((rev) => (
                        <ShowReview rev={rev} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Scrolling