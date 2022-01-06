import React from "react"
import Rating from 'react-rating'

const StarRating = ({rating}) => {
  return (
    <Rating
      emptySymbol="fa fa-star-o singleStar"
      fullSymbol="fa fa-star singleStar"
      initialRating={rating}
      readonly
    />
  )
}

export default StarRating