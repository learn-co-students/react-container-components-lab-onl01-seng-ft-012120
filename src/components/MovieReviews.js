import React from "react";

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {/* <p>{props.reviews}</p> */}
      <h2>{props.headLine}</h2>
      <a href={props.link}>Link to review</a>
    </div>
  );
};

export default MovieReviews;
