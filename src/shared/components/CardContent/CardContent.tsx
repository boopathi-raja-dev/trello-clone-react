import React, { useState ,useContext } from 'react'
import './CardContent.css'
import Addcard from '../Addcard/Addcard'
import {MdDeleteOutline} from 'react-icons/md'
import { taskContext, useTaskContext } from '../../../context/TaskContent' 
import { ModalContext } from '../../../context/ModalContex' 
import { CardContext } from '../../../context/CardContext'

type props = {
    title:string
}

function CardContent({title}: props) {
   
    const card = useContext(CardContext);
    const cardTypes = card?.cardTypes!;
    const setCardTypes = card?.setCardTypes!;
   const textcontext = useTaskContext();
   
   const useModalContext = useContext(ModalContext);
   const task=useContext(taskContext);
   const modalVisible = useModalContext?.modalVisible!;
   const setModalVisible = useModalContext?.setModalVisible!;
   const setTaskValue = useModalContext?.setTaskValue!;
   const setTitleValue = useModalContext?.setTitleValue!;
   const completed=useModalContext?.completed!;
   const setcompleted=useModalContext?.setcompleted!;

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
  

   const modalCreation = (task:string)=>
   {
        setTaskValue(task)
        setModalVisible(true)
        setTitleValue(title);
   }

   const handleDeleteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,task:string) => {
         e.stopPropagation();
         deleteCard(title,task)
   }

  return (
    <div >
      <div className='title'>{title}</div>
       <ol className='list'>
        { 
        cardTypes.map(card =>(
            card.title === title  && 
            (   
                card.task.map((task,ind) => (
                    <li key = {title + ind} className = 'list-item' id = {title + ind} onClick={()=>modalCreation(task.taskName)}>
                        <div className='list-item-content'>
                            <div>{task.taskName}</div>
                           { completed && <svg className='description_icon' width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z" fill="currentColor"></path></svg>}
                        </div>
                        <div className='del-icon' onClick={(e)=>handleDeleteClick(e,task.taskName)}>
                            <MdDeleteOutline/>
                        </div>
                    </li>
                ))
            )            
            )
            
        )
        
        }
        <Addcard title = {title} addCard={addCard}/>
       </ol>
       
    </div>
  )
}

export default CardContent