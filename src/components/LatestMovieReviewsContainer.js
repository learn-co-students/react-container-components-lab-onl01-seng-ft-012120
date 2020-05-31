import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

    constructor() {
        super() 
        this.state = {
            latestMovies: []
        };
    }

   async fetchMovies(){
        let res = await fetch(URL)
        let res1 = await res.json()
        let movies = res1.results
        this.setState({latestMovies: movies})
        console.log(this.state.latestMovies[0])

    }

    componentDidMount() {
        this.fetchMovies()
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                {/* {this.state.latestMovies.map(movie => <MovieReviews movie={movie}/>)} */}
                <MovieReviews movies={this.state.latestMovies} />

            </div>
        )
    }
}
