import React, {useState, createContext} from "react";
export interface TODO {
    id: number,
    name: string;
}

interface ContextInterface {
    newTODOValue: string,
    setNewTODOValue: (name: string) => void,
    TODOList: TODO[],
    setTODOList: (TODOList: TODO[]) => void,
    firstAvailableID: number,
    setFirstAvailableID: (id: number) => void,
}

const initialContextState: ContextInterface = {
    newTODOValue: '',
    setNewTODOValue: (name: string) => {},
    TODOList: [],
    setTODOList: (TODOList: TODO[]) => {},
    firstAvailableID: 0,
    setFirstAvailableID: (id: number) => {},
};
export const TODOContext = createContext(initialContextState)

export function TODOContextProvider({children}) {
    const [firstAvailableID, setFirstAvailableID] = useState(0);
    const [TODOList, setTODOList] = useState([]);
    const [newTODOValue, setNewTODOValue] = useState('')
    const initialContextState = {
        newTODOValue: newTODOValue,
        setNewTODOValue,
        TODOList: TODOList,
        setTODOList,
        firstAvailableID: firstAvailableID,
        setFirstAvailableID
    };
    return <TODOContext.Provider value={initialContextState}>{children}</TODOContext.Provider>
}


