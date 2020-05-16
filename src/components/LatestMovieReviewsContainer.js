import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uIAWamTfnD9AGnYJnTzAjwqzNzGT8SKK';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount()
    {
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    renderReviews = () =>
    {
        return this.state.reviews.map(review => {
            return <MovieReviews headLine={review.headline} author={review.byline} date={review.publication_date} link={review.link.url} className="review-list"/>
        })
    }

    render()
    {
        return (
            <div className="latest-movie-reviews">
                {this.renderReviews()}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;