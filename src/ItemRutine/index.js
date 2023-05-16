import './ItemRutine.css'
import {CheckIcon} from '../Icons/CheckIcon'
import {DeleteIcon} from '../Icons/DeleteIcon'
import {CheckDeleteIcon} from '../Icons/CheckDeleteIcon'

import React from 'react'

export function ItemRutine({musculo,ejercicios,dia,letra,rutine,onCheck,onCheckDelete,changeColor,onDelete}){
   
   return (
       <div style={{backgroundColor: changeColor}} className='Item' >
         <h2 style={{color:letra}}> Dia de {musculo} </h2>
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
            style={{color:letra}}>
               <CheckIcon
               completed={ejercicio.completed}
               onCheck={()=>onCheck(ejercicio.idItem,rutine)}
               />
               <p className={`Item-Ejercicios ${ejercicio.done && "Item-Rutine-completed"}`} style={{color:letra}}>{ejercicio.ejercicio} </p>
               <p className={`Item-Series ${ejercicio.done && "Item-Rutine-completed"}`} style={{color:letra}}> series: {ejercicio.repeticiones}</p> 
               <CheckDeleteIcon
               onCheckDelete={()=>onCheckDelete(ejercicio.idItem,rutine)}
               />
            </li>)
           )
           }
           </ul>
       </div>
    )
}