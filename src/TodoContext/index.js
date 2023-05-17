import React from "react"
import {useLocalStorage} from './useLocalStorage'

export const ContextRutine = React.createContext()

export function TodoRutineProvider({children}){
    const {item:todo,changeItem:changeTodo,saveTodo,deleteItem:deleteTodo} = useLocalStorage('TODOS_V1',[])
    const {item:color} = useLocalStorage('COLORS_V1',[])
    const {item:newColor,change:changeColors} = useLocalStorage('COLORS',[])

    const [serchValue,setSerchValue] = React.useState('')
    const [changeColor,setChangeColor] = React.useState(newColor.color)
    const [changeTextColor,setChangeTextColor] = React.useState(color.letra)
    const [completed,setCompleted] = React.useState(todo)
    const [change, setChange] =React.useState(false)
    const [openModal,setOpenModal] = React.useState(false)

  const serchRutine = completed.filter((value)=> {
    const serchedRutine = value.musculo.toLowerCase()
    const inputValue = serchValue.toLowerCase()
    if(change == value.completed){
      return serchedRutine.includes(inputValue)
    }
  })

  const changedComplete = ()=>{
    setChange(true)
  }

  const changedAll = ()=>{
    setChange(false)
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
    complete(idRutine)
  }

  const onDeleteRutine = (id)=>{
    const newRutine = [...todo]
    const index = newRutine.findIndex((e)=> e.id === id)
    newRutine.splice(index,1)
    deleteTodo(newRutine)
    setCompleted(newRutine)
  }
    return (
        <ContextRutine.Provider
        value={{
            serchRutine,
            changedAll,
            changedComplete,
            onCheck,
            onCheckDelete,
            onDeleteRutine,
            saveTodo,
            setSerchValue,
            changeTextColor,
            setChangeColor,
            changeColors,
            changeColor,
            setChangeTextColor,
            openModal,
            setOpenModal,
            color,
            newColor
        }}
        >
            {children}
        </ContextRutine.Provider>
    )
}

