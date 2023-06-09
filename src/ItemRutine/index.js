import './ItemRutine.css'
import {CheckIcon} from '../Icons/CheckIcon'
import {DeleteIcon} from '../Icons/DeleteIcon'
import {CheckDeleteIcon} from '../Icons/CheckDeleteIcon'
import React from 'react'
import { ContextRutine } from '../TodoContext'

export function ItemRutine(
   {musculo,ejercicios,dia,letra,completed,rutine,onDelete}){
   
   const {changeColor,onCheck,setClose,onCheckDelete} = React.useContext(ContextRutine)
   
   return (
       <div
       onClick={()=>{
         setClose('none')
       }}
       style={{backgroundColor: changeColor}} className='Item' >
         <h2 
         style={{color:letra}}> Dia de {musculo} </h2>
         <div>
         <p style={{color:letra}} className='Day-Item'>Dia de entreno {dia}</p>
        <DeleteIcon
        onDelete={onDelete}
        />
         </div>
         <ul style={{color:letra}} className='Item-Rutine'>
            {ejercicios.map((ejercicio)=>(
            <li 
            key={ejercicio.idItem}
            style={{color:letra,borderBottomColor:letra}}>
               <CheckIcon
               completed={ejercicio.done}
               onCheck={()=>
               {
                 if(completed === true){
                  return false
                 }
                return onCheck(ejercicio.idItem,rutine) 
               }}
               />
               <p className={`Item-Ejercicios ${ejercicio.done && "Item-Rutine-completed"}`} style={{color:letra}}>{ejercicio.ejercicio} </p>
               <p className={`Item-Series ${ejercicio.done && "Item-Rutine-completed"}`} style={{color:letra}}> series: {ejercicio.repeticiones}</p> 
               <CheckDeleteIcon
               onCheckDelete={()=>{
                  if(completed === true){
                     return false
                  }
                  return onCheckDelete(ejercicio.idItem,rutine)
               }}
               />
            </li>)
           )
           }
           </ul>
           
       </div>
    )
}