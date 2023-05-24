import React from "react";
import react from "react-dom";
import './Completed.css'
import { CompletedIcon } from "../Icons/Completed";
import { ContextRutine } from "../TodoContext";
import {CheckDeleteIcon} from '../Icons/CheckDeleteIcon'

export function CompletedMessage(){

    const {newColor,changedComplete,setOpenCompleted} = React.useContext(ContextRutine)
    return react.createPortal(
        <div 
        style={{
            backgroundColor:newColor.color,
            borderColor: newColor.color === 'white' ? 'rgba(0, 0, 0, 0.548)' : 'rgba(255, 255, 255, 0.548)',
        }}
        className="Message-Completed" >
            <CheckDeleteIcon
            onCheckDelete={()=>{
                setOpenCompleted(false)
            }}
            
            />
            <h1
            style={{color: newColor.letra }}
            >!!Felicidades has completado tu rutina!!</h1>
            <CompletedIcon />
            <CompletedIcon />
            <button
            type="button"
            onClick={()=>{
                changedComplete()
                setOpenCompleted(false)
                
            }}
            style={{backgroundColor: newColor.letra,color: newColor.color}}
            >Ir a Completadas</button>
        </div>,
        document.getElementById('modalCompleted')
    )
}