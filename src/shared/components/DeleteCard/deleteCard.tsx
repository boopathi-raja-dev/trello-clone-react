import React from 'react'
import { Button, Flex } from 'antd';
import './deleteCard.scss'
import { CardContext } from '../../../context/CardContext'
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContex';
type props = {
    title: string,
    value: string
}


const Deletecard = ({ title, value }: props) => {
    const card = useContext(CardContext);
    const cardTypes = card?.cardTypes!;
    const setCardTypes = card?.setCardTypes!;
    const close = useContext(ModalContext);
    const setModalVisibile = close?.setModalVisible!;
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
        setModalVisibile(false)
    }

    return (
        <div>
            <Button type="primary" className='delete-btn' onClick={(e) => handleDeleteClick(title, value)}>Delete</Button>
        </div>
    )
}

export default Deletecard
