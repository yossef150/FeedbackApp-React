import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisable, setBtnDisable] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e)=>{
        setText(e.target.value)
        if(text==='')
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
            handleAdd(newFeedback);
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
