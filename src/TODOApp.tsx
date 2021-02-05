import React, { useContext} from "react";
import {AddTODO} from "./AddTODO";
import {TODO, TODOContext} from "./Context";

export function TODOApp() {
    const context = useContext(TODOContext);
    const removeTODO = (idToRemove: number) => {
        const newTODO: TODO[] = context.TODOList.filter(TODO => TODO.id !== idToRemove)
        context.setTODOList(newTODO);
        context.setFirstAvailableID(Math.max(...context.TODOList.map(TODO => TODO.id)))
    }
    return (
        <>
            <AddTODO />
            {context.TODOList.map(TODO => {
                return <p key={TODO.id}>
                    {TODO.id}, {TODO.name}
                    <button onClick={e => removeTODO(TODO.id)}>REMOVE</button>
                </p>
            })}
        </>
    )
}
