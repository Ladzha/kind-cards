import React, { useRef, useState } from 'react'
import html2canvas from 'html2canvas';

const Card = () => {
  const [color, setColor]=useState('black')
  const [inputName, setInputName]=useState('John')

  const componentRef =useRef(null);

  const getComponent=()=>{
    html2canvas(getComponent.current).then(canvas =>{
      const imgData=canvas.toDataURL('img/png');
      console.log(imgData);
      console.log('jj');

    })
  }

  const changeInput =(event)=>{
    setInputName(event.target.value)
  }

  const changeColor=(event)=>{
    setColor(event.target.value)
    console.log(color);
  }




  return (
    <div className='card-container' ref={componentRef}>
      <div className='card-content' style={{'color':`${color}`}}>
        <div className='edit-panel'>
        <input type='color' className='color-input' value={color} onChange={changeColor}/>
        <input type='text' value={inputName} onChange={changeInput}/>
        </div>

      
        <h3 className='greeting'>
          To: {inputName}
        </h3>
        <p className='card-message'>
          You can do it!
        </p>
        <a href="mailto:email@example.com">Click to Send an Email</a>

         <button className='send-button' onClick={getComponent}>send</button>
      </div>
    </div>
  )
}

export default Card