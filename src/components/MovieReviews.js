// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
<div className='review-list'>
    {reviews.map(movie => <div className='review'>
    <h2>{movie.display_title}</h2>
    <ul>
        <li>Rating {movie.mpaa_rating}</li>
        <li>Critics Pick {movie.critics_pick}</li>
        <li>Byline {movie.byline}</li>
        <li>Headline {movie.headline}</li>
        <li>Summary {movie.summary_short}</li>
        <li>{console.log(movie)}</li>
        
    </ul>
</div>)}
</div>
)
export default MovieReviews