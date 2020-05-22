import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            reviews: [],
            searchTerm: "china"
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({reviews: json.results.slice(0, 3)})
                
            })
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="submit"/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
