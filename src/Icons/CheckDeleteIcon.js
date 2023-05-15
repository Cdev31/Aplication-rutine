import React from "react";
import {TodoIcon} from './TodoIcon'

export function CheckDeleteIcon({onCheckDelete}){
    return (
        <TodoIcon
        type="checkDelete"
        color="gray"
        onClick={onCheckDelete}
        />
    )
}