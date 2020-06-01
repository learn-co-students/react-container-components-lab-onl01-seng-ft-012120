import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    
    
    state = {
            searchTerm: "",
            reviews: []
        }

    fetchMovies = (event) => {
        event.preventDefault();
    
        fetch(URL.concat(this.state.searchTerm))
          .then((res) => res.json())
          .then(res1 => this.setState({reviews: res1.results }));
      };

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.fetchMovies} >
                <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
                </form>
              <MovieReviews reviews={this.state.reviews}/> 
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer