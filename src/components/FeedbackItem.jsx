import {FaTimes, FaEdit} from 'react-icons/fa'
import React from 'react'
import Card from '../shared/Card'
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={()=> deleteFeedback(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <button className='edit' onClick={()=>editFeedback(item)}>
        <FaEdit color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
