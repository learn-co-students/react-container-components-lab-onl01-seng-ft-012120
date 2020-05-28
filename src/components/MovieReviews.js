// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        { reviews.map(review => <p>{review.summary_short}</p>) }
    </div>
)




// const BookList = ({ books }) => (
//     <div className="book-list">
//       { books.map(book => <Book title={book.title} img_url={book.img_url} />) }
//     </div>
//   )


export default MovieReviews;