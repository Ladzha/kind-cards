import React, {useState} from 'react'
import Card from 'react'

const CardWrapper = () => {
  const [cards, setCards]=useState([]);

  return (
    <div className='card-wrapper-container'>
      {cards.map((text, index)=>(
        <Card text={text} key={index}/>
      ))}
    </div>
  )
}

export default CardWrapper