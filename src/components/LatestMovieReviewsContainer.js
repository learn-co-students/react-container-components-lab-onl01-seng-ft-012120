import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ reviews: data.results }));
  }

  renderReviews = () => {
    return this.state.reviews.map((rev, ind) => {
      return (
        <MovieReviews
          key={ind}
          reviews={rev}
          headLine={rev.headline}
          author={rev.byline}
          link={rev.link.url}
        />
      );
    });
  };

  render() {
    return <div className="latest-movie-reviews">{this.renderReviews()}</div>;
  }
}

export default LatestMovieReviewsContainer;
