import './MenuRutine.css'
import {ListChangeColor} from '../LIstChangeColor'
import {ItemColor} from '../ItemColor'
import React from 'react'
import { ContextRutine } from '../TodoContext'

export function MenuRutine(){
    const {changedAll,changeColors,changedColor,changedComplete,setChangeColor,color,setChangeTextColor} = React.useContext(ContextRutine)
   
    const [close,setClose] = React.useState('none')
    return (
        <ul className='Menu-items'>
            <li
            onClick={()=>{
                changedAll()
            }}
            >Rutinas</li>
            <li
            onClick={()=>{
                changedComplete()
            }}
            >Rutinas completadas</li>
            <li 
             onClick={()=>{
               close == 'none' ? setClose('flex') : setClose('none')
             }}
            > Cambiar tema</li>
                    <ListChangeColor close={close}>
                        {color.map((color)=>           
                            <ItemColor 
                            close={close}
                            setClose={setClose}
                            setChangeTextColor={setChangeTextColor}
                            letra={color.letra}
                            changedColor={changedColor}
                            setChangeColor={setChangeColor}
                            color={color.color}
                            colors= {changeColors}
                            />   
                        )
                        }
                    </ListChangeColor>
        </ul>
    )
}