import React from 'react'
import { Button, Flex } from 'antd';
import './deleteCard.scss'
import { CardContext } from '../../../context/cardContext'
import { useContext } from 'react';
import { ModalContext } from '../../../context/modalContext';
type props = {
    title: string,
    value: string
}


const Deletecard = ({ title, value }: props) => {
 
   const {cardTypes,setCardTypes}=useContext(CardContext)!;
   const {setModalVisible}=useContext(ModalContext)!;
   const deleteCard = (title: string, cards: string) => {

        const updatecardTypes = cardTypes.map((card) => {
            if (card.title === title) {
                return {
                    ...card,
                    task: card.task.filter((task) => task.taskName !== cards)
                };

            }
            return card;
        })
        setCardTypes(updatecardTypes);

    }




    const handleDeleteClick = (title: string, task: string) => {

        deleteCard(title, task)
        setModalVisible(false)
    }

    return (
        <div>
            <Button type="primary" className='delete-btn' onClick={(e) => handleDeleteClick(title, value)}>Delete</Button>
        </div>
    )
}

export default Deletecard
