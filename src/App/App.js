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
    {ejercicio:'press banca', repeticiones:'4 x 12'},
    {ejercicio:'press inclinado', repeticiones:' 4 x 20'}
  ],dia: 'Martes'},
  {id:2,musculo: 'pierna', ejercicios: [
    {ejercicio:'sentadilla vulgara ', repeticiones:'4 x 12'},
    {ejercicio:' sentadilla con barra ',repeticiones:'4 x 20'},
  ],dia: 'Jueves'},
  {id:3,musculo: 'espalda', ejercicios: [
    {ejercicio:'sentadilla vulgara', repeticiones:'4 x 12'},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20'},
    {ejercicio:'sentadilla vulgara', repeticiones: '4 x 12'},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20'}
  ],dia: 'Jueves'},
  {id:4,musculo: 'espalda', ejercicios: [
    {ejercicio:'sentadilla vulgara', repeticiones:'4 x 12'},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20'},
    {ejercicio:'sentadilla vulgara', repeticiones: '4 x 12'},
    {ejercicio:' sentadilla con barra', repeticiones: '4 x 20'}
  ],dia: 'Jueves'}
]

function App() {

  const [serchValue,setSerchValue] = React.useState('')

  const serchRutine = defaultRutine.filter((value)=> {
    const serchedRutine = value.musculo.toLowerCase()
    const inputValue = serchValue.toLowerCase()
    return serchedRutine.includes(inputValue)
  })
  
  
  return (
   <>
   <MenuRutine/>
   <SearchRutine 
    serchValue={serchValue}
    setSerchValue={setSerchValue}
   />
   <ListRutine>
    {serchRutine.map((rutineItem)=>
      <ItemRutine
        key={rutineItem.id}
        musculo={rutineItem.musculo}
        ejercicios={rutineItem.ejercicios}
        dia={rutineItem.dia}
      />
    )}
   </ListRutine>
   <CreateRutineButton/>
   </>
  );
}

export default App;
