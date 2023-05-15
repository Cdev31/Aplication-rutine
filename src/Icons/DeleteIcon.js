import React from "react";
import {TodoIcon} from './TodoIcon'

export function DeleteIcon({onDelete}){
    return (
        <TodoIcon
        type="delete"
        color="gray"
        onClick={onDelete}
        />
    )
}