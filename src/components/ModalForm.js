import React, {useState} from 'react'

import FormControl  from '@mui/material/FormControl'
import InputLabel from "@mui/material/InputLabel"
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

function ModalForm({id, reviews, addToPage}) {
const [username, setUsername] = useState("")
const [image, setImage] = useState("")
const [comment, setComment] = useState("")

function handleUsername(e){
    setUsername(e.target.value)
}

function handleImage(e){
    setImage(e.target.value)
}

function handleComment(e){
    setComment(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    const formObj = {
        "img": image,
        "user": username,
        "review": comment
    }
    fetch(`http://localhost:3000/countries/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            travelReviews: [...reviews, formObj]
        }),
    })
    .then(res => res.json())
    .then(data => {
        addToPage(data)
        setUsername("")
        setImage("")
        setComment("")
    })
}

  return (
    <form onSubmit={handleSubmit}>
        <FormControl  className='my-modal__username'>
            <InputLabel htmlFor='username'>Username</InputLabel>
            <FilledInput id='username' type='text' value={username} onChange={handleUsername}/>
        </FormControl>
        <FormControl  className='my-modal__username'>
            <InputLabel htmlFor='image' >Image</InputLabel>
            <FilledInput id='image' type='text' value={image} onChange={handleImage}/>
        </FormControl>
        <FormControl  className='my-modal__username'>
            <InputLabel htmlFor='comments' >Comments</InputLabel>
            <FilledInput id='comments' type='text' value={comment} onChange={handleComment}/>
        </FormControl>
        <Button variant="contained" type="submit">Submit</Button>
    </form>
  )
}

export default ModalForm