import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uIAWamTfnD9AGnYJnTzAjwqzNzGT8SKK';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    renderReviews = () =>
    {
        return this.state.reviews.map(review => {
            return <MovieReviews headLine={review.headline} author={review.byline} date={review.publication_date} link={review.link.url} className="review-list"/>
        })
    }

    handleOnChange = (event) =>
    {
        event.persist();
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleOnSubmit = (event) =>
    {
        event.persist();
        event.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    render()
    {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                    <br/>
                    <button>Search</button>
                </form>
                <div className="searchable-movie-reviews">
                    {this.renderReviews()}
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;