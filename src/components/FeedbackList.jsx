import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import Spinner from '../shared/Spinner';
function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext);
  if(!isLoading && (!feedback || feedback.length === 0))
    return <p>No feedback yet!</p>
  return (isLoading)? <Spinner/>: (<div className="feedback-list">
    {feedback.map( item => (
      <FeedbackItem key={item.id} item = {item}/>
    ))} 
    </div>
  )

}

export default FeedbackList
