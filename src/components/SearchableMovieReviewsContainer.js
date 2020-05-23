import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// will provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s).



class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movies: [], 
            searchTerm: ""
             
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({movies: data.results}))
    }

    handleChange = (e) => {
        e.persist();
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit} >
                    <label>Search Movie Results</label>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit"> Submit </button>
                </form>
                {(this.state.movies.length > 0) ? <MovieReviews movies={this.state.movies} /> : null }
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
