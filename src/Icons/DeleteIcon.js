import React from "react";
import {TodoIcon} from './TodoIcon'

export function DeleteIcon({onDelete}){
    return (
        <TodoIcon
        type="delete"
        color="rgb(216, 186, 186)"
        onClick={onDelete}
        />
    )
}