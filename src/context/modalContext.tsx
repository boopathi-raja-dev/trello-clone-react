import { createContext,useContext } from "react";
import { Modaltypes } from "../shared/types/modalTypes";

export const ModalContext = createContext<Modaltypes |null>(null)