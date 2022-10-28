import React, { useState } from "react";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

function ImageCard({ review, id, newReviews, updateNewReviews }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [liked, setLiked] = useState(false);
  // didn't deconstruct review from review as they have the same name
  const { img, like, user } = review;
  const [numberOfLikes, setNumberOfLikes] = useState(like);

  const color = liked ? "rgba(255, 76, 48)" : "rgba(255, 255, 255, 0.54)";

  const newLikes = numberOfLikes + 1;
  // relies on images, new constant with all reviews except review
  const reviewsWithoutReview = newReviews.filter(
    (element) => !(element.img === img)
  );
  // new updated likes obj with newLikes
  const updatedLikesObj = { ...review, like: newLikes };
  //  array with all the reviews with new obj with increased likes
  const updateLikes = [...reviewsWithoutReview, updatedLikesObj];

  function handleLike() {
    if (liked === false) {
      fetch(`http://localhost:3000/countries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          travelReviews: updateLikes,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setNumberOfLikes((likes) => likes + 1);
          updateNewReviews(data.travelReviews);
        });
    }
    setLiked(!liked);
  }

  function handleDelete() {
    fetch(`http://localhost:3000/countries/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        travelReviews: [...reviewsWithoutReview],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        updateNewReviews(data.travelReviews);
      });
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="travelCard">
      <ImageListItem key={img}>
        <img
          src={`${img}?w=255&h=255&fit=crop&auto=format`}
          srcSet={`${img}?w=255&h=255&fit=crop&auto=format&dpr=2 2x`}
          alt={user}
          loading="lazy"
        />
        <ImageListItemBar
          position="bottom"
          title={user}
          actionIcon={
            <>
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                onClick={handleDelete}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={handleShowPopover}
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              >
                {anchorEl ? (
                  <InfoIcon style={{ color: "white" }} />
                ) : (
                  <InfoIcon />
                )}
              </IconButton>
              <IconButton onClick={handleLike} sx={{ color: { color } }}>
                {liked ? (
                  <Chip
                    color="primary"
                    style={{ backgroundColor: "white", color: "red" }}
                    icon={<FavoriteIcon />}
                    label={numberOfLikes}
                  />
                ) : (
                  <Chip
                    color="primary"
                    style={{ color: "white" }}
                    variant="outlined"
                    icon={<FavoriteBorderIcon />}
                    label={numberOfLikes}
                  />
                )}
              </IconButton>
            </>
          }
        />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Typography sx={{ p: 2 }}>{review.review}</Typography>
        </Popover>
      </ImageListItem>
    </div>
  );
}

export default ImageCard;
