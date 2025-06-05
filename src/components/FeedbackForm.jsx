import React from 'react'
import Card from '../shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext';
function FeedbackForm() {
    const {addFeedback, ItemEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisable, setBtnDisable] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        if(ItemEdit.editMode)
        {
            setBtnDisable(false);
            setText(ItemEdit.item.text);
            setRating(ItemEdit.item.rating);
            
        }
        }, [ItemEdit])

    const handleTextChange = (e)=>{
        setText(e.target.value)
        if(e.target.value==='')
        {
            setBtnDisable(true);
            setMessage(null);
        }
        else if(text.trim().length<10)
        {
            setBtnDisable(true);
            setMessage('Text must be at least 10 characters');
        }
        else
        {
            setBtnDisable(false);
            setMessage(null);
        }
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        if(text.trim().length>=10)
        {
            const newFeedback = {
            text,
            rating,
            }
            if(ItemEdit.editMode)
            {
                updateFeedback(ItemEdit.item.id, newFeedback)
                ItemEdit.editMode = false;
            }
            else
                addFeedback(newFeedback);
            setText('');
        }
    }
  return (
    <Card>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select = {(rating)=> setRating(rating)}></RatingSelect>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
            <input onChange={handleTextChange} value={text} type="text" placeholder='Write a review' />
            <Button type='submit' isDisabled = {btnDisable}>Send</Button>
            </div>
            <div className="message">{message}</div>
        </form>
    </Card>
  )
}

export default FeedbackForm
