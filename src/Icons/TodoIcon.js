import React from 'react'
//imports icons
import {ReactComponent as CheckSVG} from './Check.svg'
import {ReactComponent as DeleteSVG} from './Delete.svg'
import {ReactComponent as CheckDeleteSVG} from './CheckDelete.svg'
import {ReactComponent as CompletedSVG} from './Completed.svg'
import {ContextRutine} from '../TodoContext'

//imports styles
import './TodoRutineIcon.css'

const iconTypes ={
    "check":(color)=> <CheckSVG className='Icon-svg' fill={color}/>,
    "delete":(color)=> <DeleteSVG className='Icon-svg' fill={color}/>,
    "checkDelete":(color)=> <CheckDeleteSVG className='Icon-svg' fill={color}/>,
    "completed": (color)=> <CompletedSVG className='Icon-Completed' fill={color}/>  
}

export function TodoIcon({type,color,onClick}){
    const {newColor} = React.useContext(ContextRutine)
    let colors = color
    if(newColor.color === 'white' || newColor.color === 'rgb(255, 255, 92)'){
        colors = 'black'
    }
    return (
        <span
        className={`Icon-Container Icon-Container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](colors)}
        </span>
    )
}