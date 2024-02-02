import React, { useContext, useState } from 'react';
import { MoveContext } from '../../../context/moveContext';
import { CardContext } from '../../../context/cardContext';
import { ModalContext } from '../../../context/modalContext';
import './moveCard.scss'

type Move = {
  prevTitle: string;
  newTitle: string;
  cards: string;
  descValue: string;
  completed: boolean;
};

const Movecard = () => {
  const {cardTypes,setCardTypes}=useContext(CardContext)!;
  const {modalVisible,description,setModalVisible,taskValue,titleValue}=useContext(ModalContext)!;
  const [selectedOption, setSelectedOption] = useState<string>(titleValue);
  const [moveCardVisible, setMoveCardVisible] = useState<boolean>(true);
  
  const move = ({ prevTitle, newTitle, cards, descValue, completed }: Move) => {
    const updatedCardTypes = cardTypes.map((card) => {
      if (card.title === prevTitle) {
        return {
          ...card,
          task: card.task.filter((task) => task.taskName !== cards),
        };
      }
      return card;
    });
    const newCardTypes = updatedCardTypes.map((card) => {
      if (card.title === newTitle) {
        return {
          ...card,
          task: [...card.task, { taskName: cards, taskDescription: descValue, completed: completed }],
        };
      }
      return card;
    });

    setCardTypes(newCardTypes);
  };


  const handleMoveButtonClick = () => {
    let prevTitle = titleValue;
    let newTitle = selectedOption;
    let descValue = description;
    let complete_value = false;
    let cards = taskValue;
    if (titleValue !== selectedOption) {
      moveTask(prevTitle, newTitle, cards, descValue, complete_value);
    } else {
      setModalVisible(false);
    }
  };

  const moveTask = (prevTitle: string, newTitle: string, cards: string, descValue: string, completed: boolean) => {
    move({ prevTitle, newTitle, cards, descValue, completed });
    setModalVisible(!modalVisible);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let str = e.target.value;
    setSelectedOption(str);
  };

  const handleCloseIconClick = () => {
    setMoveCardVisible(false);
  };

  if (!moveCardVisible) {
    return null;
  }

  return (
    <div className='window-overlay-small'>
      <div className='window-small'>
        <span className='move-card' >Move card</span>
        <span className='close-icon' onClick={handleCloseIconClick}>&#10005;</span>

        <div>
          <p className='heading-color' >Suggested</p>
          <span className='done-btn'>Done</span>
        </div>
        <div>
          <p className='heading-color' >Select destination</p>
          <div className='board-btn'>
            <span className='position-top'>Board</span>
            <div className='trell-btn'><span>My Trello Board</span>
            </div>
          </div>
        </div>
        <div className='move_container'>
          <div className='move_box'>
            <span className='position_top'>List</span>
            <select className='move-list' name="program" id='program' onChange={handleSelectChange} value={selectedOption} >
              <option value='To do'>To do</option>
              <option value='Doing'>Doing</option>
              <option value='Done'>Done</option>
            </select>
          </div>
          <div className='move_item'>
            <span className='position_top'>Position</span>
            <select className='position' name="program" id='program' >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>

          </div>
        </div>
        <div className='move-btn' onClick={handleMoveButtonClick}>
          Move
        </div>
      </div>
    </div>
  )
}

export default Movecard

