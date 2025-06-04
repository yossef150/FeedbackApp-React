import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid'
import AboutPage from "./Pages/AboutPage";
import AboutLink from "./shared/AboutLink";
function App()
{
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id)=>{
        if(window.confirm('are you sure you wanna delete this?'))
            setFeedback(feedback.filter((item)=> item.id!== id));
    }
    const addFeedback = (newFeedback)=>
    {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }
    return (
        <Router>
        <>
            <Header/>
            <Routes>
            <Route path="/" element={<>
            <div className="container">
                <FeedbackForm handleAdd = {addFeedback}></FeedbackForm>
                <FeedbackStats feedback = {feedback}/>
                <FeedbackList feedback = {feedback} handleDelete={deleteFeedback}/>
            </div>
                    <AboutLink></AboutLink>
            </>}/>
            <Route path="/about" element={<AboutPage></AboutPage>}/>
            </Routes>
        </>
        </Router>
)
}

export default App