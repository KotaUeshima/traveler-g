import React from 'react'
import TravelReviewCard from './TravelReviewCard';


import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';

function TravelerReviews({reviews = []}) {

    const travelCard = reviews.map((review)=> {
        return <TravelReviewCard key={review.user} review={review}/>
    })

  return (
    <div className="experience">
      <Container sx={{width: 1200}}>
        <ImageList sx={{height: 700}} cols={4} rowHeight={255}>
            {travelCard}
        </ImageList>
      </Container>
    </div>
  )
}

export default TravelerReviews