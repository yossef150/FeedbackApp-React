import { useState, useEffect} from "react";
import FeedbackData from "../data/FeedbackData";
import { createContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider= ({children})=>{
    const [isLoading, setIsLoading] = useState(true);
    const [feedback , setFeedback] = useState(FeedbackData);
    useEffect(()=>{fetchFeedback()},[]);
    const fetchFeedback = async()=>{
        const res = await fetch('/feedback?_sort=id&_order=desc');
        const data = await res.json();
        setFeedback(data);
        setIsLoading(false);
    }
    const addFeedback = async(newFeedback)=>
    {
        const res = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await res.json();
        setFeedback([data, ...feedback]);
    }
    const deleteFeedback = async(id)=>{
        if(window.confirm('are you sure you wanna delete this?'))
        {
            const res = await fetch(`/feedback/${id}`, {
                method: 'DELETE',
            })

            setFeedback(feedback.filter((item)=> item.id!== id));
        }
    }
    const[ItemEdit, setItemEdit] = useState({
        item:{},
        editMode: false,
    })
    const editFeedback = (item)=> {
        setItemEdit(
            {
                item,
                editMode: true,
            }
        )
    }
    const updateFeedback = async(id, updatedItem)=>
    {
        const res = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
       setFeedback(feedback.map((item)=> (item.id === id)? {...item, ...updatedItem}: item));
    }
    return <FeedbackContext.Provider value={{feedback, ItemEdit, isLoading, addFeedback, deleteFeedback, editFeedback, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;