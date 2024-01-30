import { CardsTypes } from "../shared/types/CardsTypes";
import { createContext, useContext, useState } from "react";

type modal =
    {
        cardTypes: CardsTypes[],
        setCardTypes: React.Dispatch<React.SetStateAction<CardsTypes[]>>
    }

export const initialCards: CardsTypes[] = [
    {
        index: 1,
        title: 'To do',
        task: [
            // { taskName: '', taskDescription: '', completed: false }, 
        ],
    },
    {
        index: 2,
        title: 'Doing',
        task: [
            // { taskName: '', taskDescription: '', completed: false },
        ],
    },
    {
        index: 3,
        title: 'Done',
        task: [
            // { taskName: '', taskDescription: '', completed: false },
        ],
    }]


export const CardContext = createContext<modal | null>(null);

export const useCardContext = () => useContext(CardContext);