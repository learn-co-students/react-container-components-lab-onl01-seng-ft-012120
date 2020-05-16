// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) =>
{
 return <div className="review">
     <p>--------------------------</p>
     <p>Title: {props.headLine}</p>
     <p>Review by: {props.author}</p>
     <p>Review date: {props.date}</p>
     <a href={props.link}>Link to Article</a>
 </div>
}

export default MovieReviews;
