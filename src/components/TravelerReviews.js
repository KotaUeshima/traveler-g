import React, {useState} from 'react'
import ImageList from '@mui/material/ImageList';
import TravelReviewCard from './TravelReviewCard';

function TravelerReviews({reviews}) {

    const travelCard = reviews.map((review)=> {
        return <TravelReviewCard key={review.user} review={review}/>
    })

  return (
    <div>
        <ImageList sx={{ width: 1200, height: 700 }} cols={4}>
            {travelCard}
        </ImageList>
    </div>
  )
}

export default TravelerReviews