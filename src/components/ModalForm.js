import React, {useState} from 'react'
import './ModalForm.css'

import FormControl  from '@mui/material/FormControl'
import InputLabel from "@mui/material/InputLabel"
import Modal from "@mui/material/Modal"
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

function ModalForm({id, reviews, addToPage}) {

    const [open, setOpen] = useState(false)

    const [formObj, setFormObj] = useState({
        img: "",
        user: "",
        like: 0,
        review: ""
    })

    function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3001/countries/${id}`,{
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
            setFormObj({
                img: "",
                user: "",
                like: 0,
                review: ""
            })
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
                        <FormControl className='modal-form__username'>
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <FilledInput
                            id='user'
                            type='text'
                            value={formObj.user}
                            onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl className='modal-form__image'>
                            <InputLabel htmlFor='img' >Image URL</InputLabel>
                            <FilledInput
                            id='img'
                            type='text'
                            value={formObj.img}
                            onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl className='modal-form__comment'>
                            <InputLabel htmlFor='review' >Comment</InputLabel>
                            <FilledInput
                            multiline rows={3}
                            id='review'
                            type='text'
                            value={formObj.review}
                            onChange={handleChange}
                            />
                        </FormControl>
                        <Button
                        variant="contained"
                        type="submit"
                        className='modal-form__submit'
                        >
                        Enter
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ModalForm