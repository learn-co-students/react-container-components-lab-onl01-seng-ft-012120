import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: "",
    };
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

  handleOnSubmit = (e) => {
    e.persist();
    e.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          reviews: data.results,
        })
      );
  };

  handleOnChange = (e) => {
    e.persist();
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleOnSubmit}>
          <label>Enter Keyword</label>
          <br />
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleOnChange}
          />
          <button>Find Results</button>
        </form>
        <div className="review-results">{this.renderReviews()}</div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
