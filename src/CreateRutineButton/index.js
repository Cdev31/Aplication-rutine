import React from 'react'
import './CreateRutineButton.css'
import { ContextRutine } from '../TodoContext'

export function CreateRutineButton(){
    const {changeColor,setOpenModal,changeTextColor} = React.useContext(ContextRutine)
    return (
        <button 
        onClick={()=>{
            setOpenModal(state=>!state)
        }}
        style={{backgroundColor: changeColor,color:changeTextColor}}
        className='Button-add'>+</button>
    )
}