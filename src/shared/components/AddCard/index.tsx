import React from 'react'
import './addCard.scss'
import { useState } from 'react'
import { ReactComponent as AddIcon } from '../../../assets/add.svg'
import { ReactComponent as GreyBusIcon } from '../../../assets/busGrey.svg'
type props = {
  title: string,
  addCard: (title: string, newTask: { taskName: string, taskDescription: string, completed: boolean }) => void
}
const Addcard = ({ title, addCard }: props) => {

  const [cardDisplay, setCardDisplay] = useState<boolean>(true);
  const [cardText, setCardText] = useState<string>('');
  const [error, setError] = useState<string>('');


  const inputDisplay = () => {
    setCardDisplay(false);
  }
  const close = () => {
    setCardDisplay(true);
    setCardText("")
    setError('');

  }

  const handleClick = () => {
    if (cardText === '') {
      setError('*Title is required');

    } else if (!/^[a-zA-Z][a-zA-Z0-9\s]*$/.test(cardText)) {
      setError('*First character and following character should not be a special character');

    } else {
      addCard(title, { taskName: cardText, taskDescription: '', completed: false });
      setCardText('');
      setError('');
      setCardDisplay(false);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      {cardDisplay == true ? <button className='add-card' onClick={inputDisplay}>
        <div className='add_box_container'>
          <div className='add_items'>
            <AddIcon />
            <span className='add_card_txt'>Add card </span>
          </div>
          <GreyBusIcon />
        </div>

      </button> :
        <div >
          <input className='input-title' placeholder='Enter a title for this card...' onChange={(e) => { setCardText(e.target.value) }} value={cardText} onKeyDown={handleKeyPress}></input>

          {error && <div className='error'>{error}</div>}
          <button className='btn' onClick={handleClick}>
            Add card
          </button>
          <span className='cross' onClick={close}>&#10005;</span>
        </div>
      }
    </div>
  )
}

export default Addcard