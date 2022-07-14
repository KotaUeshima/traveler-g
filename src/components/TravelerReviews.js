import React, {useState} from 'react'
import TravelReviewCard from './TravelReviewCard';
import ModalForm from '../components/ModalForm'

import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';

function TravelerReviews({reviews = [], id}) {
    const [newReviews, setNewReviews] = useState(reviews)

    function updateNewReviews(data){
      setNewReviews(data)
    }

    function addToPage(data){
      setNewReviews(data.travelReviews)
    }

    // sort by number of likes
    newReviews.sort((a, b) => b.like - a.like)

    const travelCard = newReviews.map((review)=> {
        return <TravelReviewCard key={review.img} newReviews={newReviews} review={review} id={id} updateNewReviews={updateNewReviews}/>
    })

  return (
    <div className="experience">
      <ModalForm id={id} reviews={newReviews} addToPage={addToPage}/>
      <Container sx={{ height: 1000 , width: 1200}}>
        <ImageList sx={{height: 600}} cols={4} rowHeight={255}>
            {travelCard}
        </ImageList>
      </Container>
    </div>
  )
}

export default TravelerReviews