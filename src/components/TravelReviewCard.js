import React, {useState} from 'react'
//import './TravelReviewCard.css'

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function TravelReviewCard({review}) {
    const [showReview, setShowReview] = useState(false)

    function handleUserReview(){
        setShowReview(!showReview)
    }

  return (
    <div className="travelCard">
        <ImageListItem key={review.user}>
          <img
            src={`${review.img}?w=255&h=255&fit=crop&auto=format`}
            srcSet={`${review.img}?w=255&h=255&fit=crop&auto=format&dpr=2 2x`}
            alt={review.user}
            loading="lazy"
          />
          <ImageListItemBar
<<<<<<< HEAD
            subtitle={review.user}
=======
            position='bottom'
            subtitle={showReview?review.review:review.user}
>>>>>>> main
            actionIcon={
              <IconButton onClick={handleUserReview}
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${review.user}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </div>
  )
}

export default TravelReviewCard