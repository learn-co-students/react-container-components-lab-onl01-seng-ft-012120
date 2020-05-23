import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// will fetch a list of the most recent reviews and display them. 
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=<your-api-key>&query=<search-term>
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=<search-term>

// movie_title,    results[i]display_title
//     movie_review_url, results[i]linkurl
//     byline, results[i]byline
//     movie_review_heading, results[i]headline
//  summary results[i].summary_short


class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movies: []
             
        }
    }

    componentDidMount() {
        fetch(`${URL}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                movies: data.results
            })
        })
    }
    
    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews movies={this.state.movies}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
