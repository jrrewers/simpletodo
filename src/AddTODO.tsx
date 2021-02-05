import React, { useContext} from "react";
import {TODOContext} from "./Context";

export function AddTODO() {
    const context = useContext(TODOContext)
    const addTODO = (TODO) => {
        context.setTODOList([...context.TODOList, TODO])
        context.setFirstAvailableID(context.firstAvailableID + 1)
    }

    return (
        <>
            <input type="text"
                   onChange={event => context.setNewTODOValue(event.target.value)}
                   value={context.newTODOValue}
            />
            <button type='button' onClick={() => addTODO({
                id: context.firstAvailableID,
                name: context.newTODOValue
            })}>Add TODO</button>
        </>
    )
}
