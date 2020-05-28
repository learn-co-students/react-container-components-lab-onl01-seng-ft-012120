import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'UIRiDfaX0sePGDFcsXpeyOHi0CGDBAFL';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(reviews => this.setState({ reviews: reviews.results }))
    }


    render() {

        return(
            <div className="searchable-movie-reviews">
                <form>
                <label>Search Reviews: </label>
                <input type="text" onChange={this.handleChange} />
                <button type="submit" onClick={this.handleClick}>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}
