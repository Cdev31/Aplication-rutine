import React from 'react'
import './CreateRutineButton.css'
import { ContextRutine } from '../TodoContext'

export function CreateRutineButton(){
    const {changeColor,setOpenModal,changeTextColor,newColor} = React.useContext(ContextRutine)
    return (
        <button 
        onClick={()=>{
            setOpenModal(state=>!state)
        }}
        style={{backgroundColor: changeColor,color:newColor.letra}}
        className='Button-add'>+</button>
    )
}