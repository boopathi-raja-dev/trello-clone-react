import React, { useContext } from 'react'
import './cards.scss'
import CardContent from '../CardContent';
import { CardContext } from '../../../context/cardContext';


const Cards = () => {
  const card = useContext(CardContext);
  const cardTypes = card?.cardTypes!;

  return (
    <div>
      <ol className='card-container card-pos'>
        {cardTypes.map(cardType => (
          <li key={cardType.index} className='card' >
            <CardContent title={cardType.title} />
          </li>
        ))}
      </ol>

    </div>
  )
}

export default Cards


