import React, {useState} from 'react'
import './ModalForm.css'

import FormControl  from '@mui/material/FormControl'
import InputLabel from "@mui/material/InputLabel"
import Modal from "@mui/material/Modal"
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

function ModalForm({id, reviews, addToPage}) {
const [username, setUsername] = useState("")
const [image, setImage] = useState("")
const [comment, setComment] = useState("")

const [open, setOpen] = useState(false)

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
        "like": 0,
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
        handleClose()
    })
}

const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false)

  return (
    <div className="modal-form">
        <Button variant='contained' onClick={handleOpen}>Submit your Experiences</Button>
        <Modal open={open} onClose={handleClose}>
            <div className="modal-form__content">
                <form className="modal-form__form" onSubmit={handleSubmit}>
                    <FormControl  className='my-modal__username'>
                        <InputLabel htmlFor='username'>Username</InputLabel>
                        <FilledInput id='username' type='text' value={username} onChange={handleUsername}/>
                    </FormControl>
                    <FormControl  className='my-modal__image'>
                        <InputLabel htmlFor='image' >Image</InputLabel>
                        <FilledInput id='image' type='text' value={image} onChange={handleImage}/>
                    </FormControl>
                    <FormControl className='my-modal__comments'>
                        <InputLabel htmlFor='comments' >Comments</InputLabel>
                        <FilledInput multiline rows={3} id='comments' type='text' value={comment} onChange={handleComment}/>
                    </FormControl>
                    <Button variant="contained" type="submit" className='my-modal__submit'>Enter</Button>
                </form>
            </div>
        </Modal>
    </div>
  )
}

export default ModalForm