import React from "react";
import {TodoIcon} from './TodoIcon'

export function CheckIcon({onCheck,completed}){
    return (
        <TodoIcon
        type="check"
        color={completed ? 'green': 'rgb(216, 186, 186)'}
        onClick={onCheck}
        />
    )
}