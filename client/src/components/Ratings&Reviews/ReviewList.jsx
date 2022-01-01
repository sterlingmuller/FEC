import React, {useState, useContext} from 'react'
import RatingsAndReviewsContext from './RatingsandReviewsContext.jsx'
import ReviewTile from './ReviewTile.jsx'
import SortDropDown from './SortDropDown.jsx'


const ReviewList = () => {
  const { reviews, filteredReviews, filtering } = useContext(RatingsAndReviewsContext)
  const [numOfDisplayed, setNumOfDisplayed] = useState(2)
  let allReviews = []

  if (JSON.stringify(filteredReviews) === '[]') {
    allReviews = reviews
  } else {
    allReviews = filteredReviews
  }

  let displayedReviews = allReviews.slice(0, numOfDisplayed)

  function handleMoreReviewsClick() {
    setNumOfDisplayed(numOfDisplayed + 2)
  }

  return (
    <div>
      <div style={{marginBottom: "20px"}}>
        {reviews.length} reviews, sorted by <SortDropDown />
      </div>

      <div style={{maxHeight: "50vh", overflow: "scroll"}}>
      {displayedReviews.map(review =>
        <ReviewTile key={review.review_id} review={review}/>)}
      </div>

      {numOfDisplayed < allReviews.length &&
        <button onClick={handleMoreReviewsClick}>More Reviews</button>
      }

      <button>Add Review +</button>

    </div>
  )
}

export default ReviewList