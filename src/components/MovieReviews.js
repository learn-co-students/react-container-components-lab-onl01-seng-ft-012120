// Code MovieReviews Here
import React from 'react'



  
 const Movie = ({ 
    display_title, 
    link,
    byline,
    headline,
    summary_short 


 }) => {
 return (
     <div key={headline} className="review">
    <li>
        <h2>{headline}</h2>
        <h3>{display_title}</h3>
        <h4>{byline}</h4>
        <p>{summary_short}</p>
        <a href={link} alt={display_title}>link to {headline}</a>
    </li>
    </div>
  )
 }

 const MovieReviews = ({  movies }) => {
     return (
       <ul className="review-list">
         {movies.map(movie => <Movie display_title={movie.display_title} link={movie.link.url} byline={movie.byline} headline={movie.headline} summary_short={movie.summary_short} key={movie.headline}/>)}
       </ul>
     )
    }

    MovieReviews.defaultProps= {
        movies: []
    }
 export default MovieReviews;
  
 