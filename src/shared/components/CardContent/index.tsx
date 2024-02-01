import React, { useState, useContext } from 'react'
import './cardContent.scss'
import Addcard from '../AddCard'
import { MdDeleteOutline } from 'react-icons/md'
import { taskContext, useTaskContext } from '../../../context/taskContext'
import { ModalContext } from '../../../context/modalContext'
import { CardContext } from '../../../context/cardContext'
import { ReactComponent as DescIcon } from '../../../assets/description.svg'

type props = {
  title: string
}

const CardContent = ({ title }: props) => {

  const card = useContext(CardContext);
  const cardTypes = card?.cardTypes!;
  const setCardTypes = card?.setCardTypes!;
  const useModalContext = useContext(ModalContext);
  const task = useContext(taskContext);
  const setModalVisible = useModalContext?.setModalVisible!;
  const setTaskValue = useModalContext?.setTaskValue!;
  const setTitleValue = useModalContext?.setTitleValue!;
  const completed = useModalContext?.completed!;
  const setCompleted = useModalContext?.setCompleted!;

  const addCard = (title: string, newTask: { taskName: string, taskDescription: string, completed: boolean }) => {
    const updatedCardTypes = cardTypes.map((card) => {
      if (card.title === title) {
        return {
          ...card,
          task: [...card.task, newTask],
        };
      }
      return card;
    });

    setCardTypes(updatedCardTypes);
  };


  const deleteCard = (title: string, taskToDelete: string) => {
    const updatedCardTypes = cardTypes.map((card) => {
      if (card.title === title) {
        return {
          ...card,
          task: card.task.filter((task) => task.taskName !== taskToDelete),
        };
      }
      return card;
    });

    setCardTypes(updatedCardTypes);
  };


  const modalCreation = (task: string) => {
    setTaskValue(task)
    setModalVisible(true)
    setTitleValue(title);
  }

  const handleDeleteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, task: string) => {
    e.stopPropagation();
    deleteCard(title, task)
  }

  return (
    <div >
      <div className='title'>{title}</div>
      <ol className='list'>
        {
          cardTypes.map(card => (
            card.title === title &&
            (
              card.task.map((task, ind) => (
                <li key={title + ind} className='list-item' id={title + ind} onClick={() => modalCreation(task.taskName)}>
                  <div className='list-item-content'>
                    <div>{task.taskName}</div>
                    {completed && <DescIcon />}
                  </div>
                  <div className='del-icon' onClick={(e) => handleDeleteClick(e, task.taskName)}>
                    <MdDeleteOutline />
                  </div>
                </li>
              ))
            )
          )

          )

        }
        <Addcard title={title} addCard={addCard} />
      </ol>

    </div>
  )
}

export default CardContent