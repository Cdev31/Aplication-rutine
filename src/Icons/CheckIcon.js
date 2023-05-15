import React from "react";
import {TodoIcon} from './TodoIcon'

export function CheckIcon({onCheck}){
    return (
        <TodoIcon
        type="check"
        color="gray"
        onClick={onCheck}
        />
    )
}