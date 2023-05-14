import './App.css';
//internal imports
import {SearchRutine} from '../SearchedRutine'
import {MenuRutine} from '../MenuRutine'
import {ItemRutine} from '../ItemRutine'
import {CreateRutineButton} from '../CreateRutineButton'
import {ListRutine} from '../ListRutine'
import  {useLocalStorage} from './useLocalStorage'
import {Modal} from '../Moda'
import {TodoForm} from '../TodoForm'

import React from 'react';

const colors = [
  {color: 'white',letra:'black'},
  {color: 'rgb(4, 45, 156)',letra:'white'},
  {color:'rgb(40, 156, 4)',letra:'white'},
  {color:'rgb(211, 53, 5)',letra:'white'},
  {color:'rgb(255, 166, 160)',letra:'white'},
  {color:'rgb(255, 255, 125)',letra:'black'}
]

function App() {
  const {item:todo,changeItem:changeTodo,saveTodo} = useLocalStorage('TODOS_V1',[])

  const [serchValue,setSerchValue] = React.useState('')
  const [changeColor,setChangeColor] = React.useState(colors[0].color)
  const [changeTextColor,setChangeTextColor] = React.useState(colors[0].letra)
  const [completed,setCompleted] = React.useState(todo)
  const [deleteCheck,setDeleteCheck] = React.useState(todo)
  const [openModal,setOpenModal] = React.useState(false)

  const serchRutine = completed.filter((value)=> {
    const serchedRutine = value.musculo.toLowerCase()
    const inputValue = serchValue.toLowerCase()
    return serchedRutine.includes(inputValue)
  })

  const changedComplete = ()=>{
    const newRutine = [...todo]
    setCompleted(newRutine.filter((e)=>e.completed ===true))
  }

  const changedAll = ()=>{
    const newRutine = [...todo]
    setCompleted(newRutine.filter((e)=> e.completed === false))
  }

  const complete = (id)=>{
    const newRutine = [...todo]

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
    }
    changeTodo(newRutine)
    
  }

  const onCheck = (idItem,idRutine)=>{
    const newRutineItem = [...completed]
    newRutineItem.map((e)=>{
      if(e.id === idRutine){
        e.ejercicios.map((e,i)=>{
         if(e.idItem == idItem){
          e.done = true
         }
        })
      }
    })
    changeTodo(newRutineItem)
    complete(idRutine)
  }

  const onCheckDelete = (idItem,idRutine)=>{
    const newRutineItem = [...todo]
    newRutineItem.map((item)=>{
      if(item.id === idRutine){
        const index = item.ejercicios.findIndex((e)=>e.idItem === idItem)
         item.ejercicios.splice(index,1)
      }
    })
    setDeleteCheck(newRutineItem)
    complete(idRutine)
  }
 

  
  return (
   <>
   <MenuRutine 
     setChangeTextColor={setChangeTextColor}
     changeColor={changeColor}
     colors={colors}
     changedAll={changedAll}
     changedComplete={changedComplete}
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
    setOpenModal={setOpenModal}
    changeColor={changeColor}/>
    {openModal && (
      <Modal>
        <TodoForm
        changeColor={changeColor}
        letra={changeTextColor}
        setOpenModal={setOpenModal}
        saveTodo={saveTodo}
        />
      </Modal>
    )}
   </>
  );
}

export default App;
