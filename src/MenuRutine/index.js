import './MenuRutine.css'
import {ListChangeColor} from '../LIstChangeColor'
import {ItemColor} from '../ItemColor'
import React from 'react'

export function MenuRutine({changedAll,changedComplete,setChangeColor,colors,setChangeTextColor}){
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
                        {colors.map((color)=>           
                            <ItemColor 
                            close={close}
                            setClose={setClose}
                            setChangeTextColor={setChangeTextColor}
                            letra={color.letra}
                            setChangeColor={setChangeColor}
                            color={color.color}/>
                        )
                        }
                    </ListChangeColor>
        </ul>
    )
}