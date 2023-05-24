import React from 'react'
import './CreateRutineButton.css'
import { ContextRutine } from '../TodoContext'

export function CreateRutineButton(){
    const {changeColor,setOpenModal,setClose,newColor} = React.useContext(ContextRutine)
    return (
        <button 
        onClick={()=>{
            setOpenModal(state=>!state)
            setClose('none')
        }}
        style={{backgroundColor: changeColor,color:newColor.letra}}
        className='Button-add'>+</button>
    )
}