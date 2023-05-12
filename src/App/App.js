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
    {idItem:'A1', ejercicio:'press banca', repeticiones:'4 x 12',done:true},
    {idItem:'A2', ejercicio:'press inclinado', repeticiones:' 4 x 20',done:false}
  ],dia: 'Martes',completed:false},
  {id:2,musculo: 'pierna', ejercicios: [
    {idItem:'B2', ejercicio:'sentadilla vulgara ', repeticiones:'4 x 12',done:false},
    {idItem:'B3', ejercicio:' sentadilla con barra ',repeticiones:'4 x 20',done:false},
  ],dia: 'Jueves',completed:false},
  {id:3,musculo: 'espalda', ejercicios: [
    {idItem:'C1', ejercicio:'sentadilla vulgara', repeticiones:'4 x 12',done:false},
    {idItem:'C2', ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false},
    {idItem:'C3', ejercicio:'sentadilla vulgara', repeticiones: '4 x 12',done:false},
    {idItem:'C4', ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false}
  ],dia: 'Jueves',completed:false},
  {id:4,musculo: 'espalda', ejercicios: [
    {idItem:'D1', ejercicio:'sentadilla vulgara', repeticiones:'4 x 12',done:false},
    {idItem:'D2', ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false},
    {idItem:'D3', ejercicio:'sentadilla vulgara', repeticiones: '4 x 12',done:false},
    {idItem:'D4', ejercicio:' sentadilla con barra', repeticiones: '4 x 20',done:false}
  ],dia: 'Jueves',completed:false}
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
  const [completed,setCompleted] = React.useState(defaultRutine)
  const [done,setDone] = React.useState(defaultRutine)
  const [deleteCheck,setDeleteCheck] = React.useState(defaultRutine)
  const [deleted,setDeleted] = React.useState(defaultRutine)

  const serchRutine = completed.filter((value)=> {
    const serchedRutine = value.musculo.toLowerCase()
    const inputValue = serchValue.toLowerCase()
    return serchedRutine.includes(inputValue)
  })

 
  
  const complete = (id)=>{
    const newRutine = [...completed]

    let lengthDone =0;
    newRutine.forEach((e)=>{
      if(e.id === id){
        lengthDone = e.ejercicios.length
      }
    })
    const index = newRutine.findIndex((e)=> e.id === id)

    let counter =0;
    newRutine[index].ejercicios.map((e)=>{
      if(e.done === true){
        counter++
      }
    })
    if(lengthDone === counter){
      newRutine[index].completed = true
      newRutine.splice(index,1)
      setCompleted(newRutine)
    }
    console.log(completed)
  }

  const onCheck = (idItem,idRutine)=>{
    const newRutineItem = [...defaultRutine]
    newRutineItem.map((e)=>{
      if(e.id === idRutine){
        e.ejercicios.map((e,i)=>{
         if(e.idItem == idItem){
          e.done = true
         }
        })
      }
    })
    setDone(newRutineItem)
    complete(idRutine)
  }

  const onCheckDelete = (idItem,idRutine)=>{
    const newRutineItem = [...defaultRutine]
    newRutineItem.map((item)=>{
      if(item.id === idRutine){
        const index = item.ejercicios.findIndex((e)=>e.idItem === idItem)
         item.ejercicios.splice(index,1)
      }
    })
    setDeleteCheck(newRutineItem)
    complete(idRutine)
  }
 
  const onCompleted = ()=>{
    const newRutineTodo = [...defaultRutine]


  }
  
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
        rutine={rutineItem.id}
        onCheck={onCheck}
        onCheckDelete={onCheckDelete}
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
