import React from 'react'
import './Addcard.css'
import '.././Cards/Cards.css'
import { useState } from 'react'

type props = {
    title:string,
    addCard:(title:string,input:string) => void
}

function Addcard({title,addCard}:props) {

  const [cardDisplay,setCardDisplay] = useState<boolean>(true);
  const [Cardtext,setCardtext] = useState<string>('');

  const inputDisplay = () =>
  {
    setCardDisplay(false);
  }
  const close = () =>
  {
    setCardDisplay(true);
    setCardtext("")
  }

  const handleClick = () =>
  {
    if(Cardtext === '')
        setCardDisplay(true)

    else{
        addCard(title,Cardtext);

      
        setCardtext('');
    }
    
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
     { cardDisplay == true?<button className='add-card' onClick={inputDisplay}>
     <div className='add_box_container'>
                    <div className='add_items'>
                        <svg className='add_icon' width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C11.4477 3 11 3.44772 11 4V11L4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11L13 11V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor"></path></svg>
                        <span className='add_card_txt'>Add card </span>
                    </div>
                    <svg width="16" className='bus_icon' height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z" fill="currentColor"></path><path d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z" fill="currentColor"></path><path d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z" fill="currentColor"></path><path d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z" fill="currentColor"></path><path d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z" fill="currentColor"></path></svg>

                </div>

     </button> :
        <div >
            <input className='input-title' placeholder='Enter a title for this card...' onChange={(e)=>{setCardtext(e.target.value)}} value = {Cardtext} onKeyDown={handleKeyPress}></input>

            <button className = 'btn' onClick = {handleClick}>
     Add card
            </button>
            <span className='cross' onClick={close}>&#10005;</span>
        </div>
    }
    </div>
  )
}

export default Addcard