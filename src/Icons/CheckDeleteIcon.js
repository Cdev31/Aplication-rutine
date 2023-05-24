import React from "react";
import {TodoIcon} from './TodoIcon'

export function CheckDeleteIcon({onCheckDelete}){
    return (
        <TodoIcon
        type="checkDelete"
        color="rgb(216, 186, 186)"
        onClick={onCheckDelete}
        />
    )
}