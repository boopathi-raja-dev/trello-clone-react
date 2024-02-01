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
        ],
    },
    {
        index: 2,
        title: 'Doing',
        task: [
        ],
    },
    {
        index: 3,
        title: 'Done',
        task: [
        ],
    }]


export const CardContext = createContext<modal | null>(null);

export const useCardContext = () => useContext(CardContext);