import React from 'react';
import './SearchRutine.css'
import { ContextRutine } from '../TodoContext';

export function SearchRutine(){
    const {serchValue,setSerchValue,changeColor } = React.useContext(ContextRutine)
    
    let newColor = changeColor;
    if(changeColor==='white'){
        newColor = 'black'
    }
    return (
        <input
        className='Input-Searching'
        style={
            {
            borderBlockColor:newColor,
            borderInlineColor:newColor,
            color:newColor}} 
        value={serchValue}
        onChange={(event)=>{
            setSerchValue(event.target.value)
        }}
        placeholder='Search...'
        type="text"/>

        )
}
