import React, {useState} from 'react'
import './TravelReviewCard.css'

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Popover } from '@mui/material';
import { Typography} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from '@mui/material';
import { red } from '@mui/material/colors'
import { Box } from '@mui/system';

function TravelReviewCard({review, id, newReviews, updateNewReviews}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [liked, setLiked] = useState(false)
    const [numberOfLikes, setNumberOfLikes] = useState(review.like)

    function handleLike(){
      if(liked === false){

        const newLikes = numberOfLikes + 1
        // relies on images
        const reviewsWithoutReview = newReviews.filter(element => !(element.img === review.img))

        const updateLikes = [...reviewsWithoutReview, {
          ...review, like: newLikes
        }]


        fetch(`http://localhost:3000/countries/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          travelReviews: updateLikes
        }),
        })
        .then(res => res.json())
        .then((data) => {
          setNumberOfLikes(likes => likes + 1)
          updateNewReviews(data.travelReviews)
        })
      }
      setLiked(!liked)
    }


    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const idid = open ? 'simple-popover' : undefined;

    const subtitle = `${review.user}`
    const color = liked? 'rgba(255, 76, 48)' : 'rgba(255, 255, 255, 0.54)'

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
            position='bottom'
            title={subtitle}
            actionIcon={
              <>
                <IconButton
                  onClick={handleClick}
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${review.user}`}
                >
                  <InfoIcon/>
                </IconButton>
                <IconButton
                  onClick={handleLike}
                  sx= {{ color: {color}}}
                >
                  {liked? <Chip color='primary' style={{backgroundColor:'white', color:'red'}} icon ={<FavoriteIcon/>} label={numberOfLikes}/> : <Chip color='primary' style={{color:'white'}} variant='outlined'icon={<FavoriteBorderIcon/>} label={numberOfLikes}/>}
                </IconButton>
              </>
            }
          />
            <Popover
                  id={idid}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{review.review}</Typography>
          </Popover>
        </ImageListItem>
    </div>
  )
}

export default TravelReviewCard