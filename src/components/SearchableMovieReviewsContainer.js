import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = (event) =>{
        event.persist()
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = () =>{
        this.fetchMovies()       
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>    
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} value={this.state.searchTerm} />
                    <button type ='submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    fetchMovies = () =>{
        fetch(`${URL}&query${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data}))
    }

}