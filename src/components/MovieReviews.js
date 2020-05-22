// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {

    const reviews = props.reviews.map(review => {
        return(
            <li className="review">
                <h3>{review.display_title}</h3>
                <h4>{review.headline} </h4>
                <a href={review.link.url}>{review.link.suggested_link_text}</a>
            </li>
        )
    })

    return (
        <div className="review-list">
            { reviews }
        </div>
    )
}

export default MovieReviews