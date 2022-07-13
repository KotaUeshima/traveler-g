import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function TravelReviewCard({review}) {
    function handleUserReview(){
        console.log('hello')
    }
  return (
    <div>
        <ImageListItem key={review.user}>
          <img
            src={`${review.img}?w=248&fit=crop&auto=format`}
            srcSet={`${review.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={review.user}
            loading="lazy"
          />
          <ImageListItemBar
            titleWrap
            subtitle={review.user}
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