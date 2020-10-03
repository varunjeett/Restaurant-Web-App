import React from 'react'

function ShowReview({rev}) {
   
    return (
        <div>
            <h1>
                {rev.id}
            </h1>
            
            <h1>
                {rev.data.name}
            </h1>

            <h1>
                {rev.data.number}
            </h1>

            <h1>
                {rev.data.review}
            </h1>

            <h1>
                {rev.data.email}
            </h1>

        </div>
    )
}

export default ShowReview
