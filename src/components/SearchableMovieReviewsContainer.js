import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super() 
        this.state = {
            query: "",
            movies: []
        }
    }

    // async fetchMovies(event) {
    //     // event.preventDefault()

    //     let resp = await 
    //     fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=${this.state.query}`)
    //     let resp1 = await resp.json()
    //     let movies = resp1.results
    //     // console.log(movies)
    //     this.setState({movies: movies})


    // }

    fetchMovies = (event) => {
        event.preventDefault();
    
        fetch(URL.concat(this.state.query))
          .then((res) => res.json())
          .then((res) => this.setState({ movies: res.results }));
      };

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.fetchMovies} >
                <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                </form>
              <MovieReviews movies={this.state.movies}/> 
            </div>
        )
    }
}
