import React, { useState, useContext, useEffect} from 'react'
import FeedbackContext from '../Context/FeedbackContext';

function RatingSelect({select}) {

    const [selected, setSelected] = useState(10);
    const handleChange = (e)=>{
        setSelected(+e.target.value);
        select(+e.target.value);
    };
    const {ItemEdit} = useContext(FeedbackContext);
    useEffect(()=> setSelected(ItemEdit.item.rating), [ItemEdit])
  return (
<ul className="rating">
  {Array.from({ length: 10 }, (_, i) => (
    <li key={i + 1}>
      <input
        type="radio"
        id={`num${i + 1}`}
        name="rating"
        value={i + 1}
        onChange={handleChange}
        checked={selected === i + 1}
      />
      <label htmlFor={`num${i + 1}`}>{i + 1}</label>
    </li>
  ))}
</ul>

  )
}

export default RatingSelect
