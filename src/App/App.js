import './App.css';
//internal imports
import {SearchRutine} from '../SearchedRutine'
import {MenuRutine} from '../MenuRutine'
import {ItemRutine} from '../ItemRutine'
import {CreateRutineButton} from '../CreateRutineButton'
import {ListRutine} from '../ListRutine'
import React from 'react';

const defaultRutine=[
  {id:1,musculo: 'pecho', ejercicios: [
    {ejercicio:'press banca', repeticiones:'4 x 12',done:true},
    {ejercicio:'press inclinado', repeticiones:' 4 x 20',done:false}
  ],dia: 'Martes',completed:false},
  {id:2,musculo: 'pierna', ejercicios: [
    {ejercicio:'sentadilla vulgara ', repeticiones:'4 x 12',done:false},
    {ejercicio:' sentadilla con barra ',repeticiones:'4 x 20',done:false},
  ],dia: 'Jueves',completed:false},
  {id:3,musculo: 'espalda', ejercicios: [
    {ejercicio:'sentadilla vulgara', repeticiones:'4 x 12',done:false},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false},
    {ejercicio:'sentadilla vulgara', repeticiones: '4 x 12',done:false},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false}
  ],dia: 'Jueves',completed:false},
  {id:4,musculo: 'espalda', ejercicios: [
    {ejercicio:'sentadilla vulgara', repeticiones:'4 x 12',done:false},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false},
    {ejercicio:'sentadilla vulgara', repeticiones: '4 x 12',done:false},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false}
  ],dia: 'Jueves',completed:true}
]

const colors = [
  {color: 'white',letra:'black'},
  {color: 'rgb(4, 45, 156)',letra:'white'},
  {color:'rgb(40, 156, 4)',letra:'white'},
  {color:'rgb(211, 53, 5)',letra:'white'},
  {color:'rgb(255, 166, 160)',letra:'white'},
  {color:'rgb(255, 255, 125)',letra:'black'}
]

function App() {
 
  const [serchValue,setSerchValue] = React.useState('')
  const [changeColor,setChangeColor] = React.useState(colors[0].color)
  const [changeTextColor,setChangeTextColor] = React.useState(colors[0].letra)
  const [completed,setCompleted] = React.useState(false)

  const serchRutine = defaultRutine.filter((value)=> {
    const serchedRutine = value.musculo.toLowerCase()
    const inputValue = serchValue.toLowerCase()
    return serchedRutine.includes(inputValue)
  })
  
 
  
  return (
   <>
   <MenuRutine 
     setChangeTextColor={setChangeTextColor}
     changeColor={changeColor}
     colors={colors}
     setChangeColor={setChangeColor}
   />
   <SearchRutine 
    color={changeColor}
    serchValue={serchValue}
    setSerchValue={setSerchValue}
   />
   <ListRutine>
    {serchRutine.map((rutineItem)=>
      <ItemRutine
        setCompleted={setCompleted}
        completed={rutineItem.completed}
        letra={changeTextColor}
        changeColor={changeColor}
        key={rutineItem.id}
        musculo={rutineItem.musculo}
        ejercicios={rutineItem.ejercicios}
        dia={rutineItem.dia}
      />
    )}
   </ListRutine>
   <CreateRutineButton 
    letra={changeTextColor}
    changeColor={changeColor}
   />
   </>
  );
}

export default App;
