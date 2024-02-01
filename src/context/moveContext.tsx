import { createContext } from "react";
import { moveContent } from "../shared/types/moveTypes";

export const MoveContext= createContext<moveContent|null>(null);