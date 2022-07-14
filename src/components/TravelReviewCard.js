import React, {useState} from 'react'
import './TravelReviewCard.css'

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Popover } from '@mui/material';
import { Typography } from '@mui/material';

function TravelReviewCard({review}) {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
            subtitle={review.user}
            actionIcon={
              <IconButton onClick={handleClick}
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${review.user}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
            <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
            <Typography sx={{ p: 2 }}>{review.review}</Typography>
          </Popover>
        </ImageListItem>
    </div>
  )
}

export default TravelReviewCard