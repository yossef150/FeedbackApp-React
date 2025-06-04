import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <h1 className='about'>About Feedback App</h1>
        <p className='about'>This is a feedback app to write some reviews with ratings</p>
        <Link to = {'/'}>Back to Home</Link>
    </Card>
  )
}

export default AboutPage
