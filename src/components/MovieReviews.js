// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className="review-list">
            {props.reviews.map(review => {
                return (
                    <div className="review">
                        <h1>{review.headline}</h1>
                        <img src={review.multimedia.src} />
                        <p>{review.summary_short}</p>
                    </div>
                )
                
            })}
        </div>
    )
}
