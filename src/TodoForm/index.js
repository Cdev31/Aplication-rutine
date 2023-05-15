import React from 'react'
import './TodoForm.css'
import { ItemExercise } from './ItemExercise'
import {v4 as uuid} from 'uuid'
import { ContextRutine } from '../TodoContext'

export function TodoForm(){
    const {saveTodo,setOpenModal} =React.useContext(ContextRutine)
    const [count,setCount ] = React.useState(1)
    const newTodo = {
        id:uuid(),
        musculo: '',
        dia: '',
        ejercicios:[

        ],
        completed: false
    }
    const [exercise,setExercise] = React.useState(newTodo)
    const renderItems = ()=>{
        const items=[]
        for(let i =0;count > i;i++){
            if(count > 4){
                setCount(1)
                break
            }

            items.push(<ItemExercise 
                setExercise={setExercise}
                exercise={exercise}
                index={i}
                key={i}/>)
        }
        return items
    }
    const newTodoRutine =(newTodo)=>{
        saveTodo(newTodo)
    }

    const onCancel = ()=>{
        setOpenModal(false)
    }

    return (
        <form 
        className='Form-Create-Rutine'>
            <div className='Contain-Info'>
            <h2>Crea tu rutina!!</h2>
            <label
            className='Muscle-Label'>Musculo:</label>
            <input 
             onBlur={(event)=>{
                const newItem = {...exercise}
                newItem.musculo = event.target.value
                setExercise(newItem)
             }}
            className='Input-Form Input-Muscle' type='text'></input>
            <label 
            className='Date-Label' >Dia:</label>
            <input 
            onBlur={(event)=>{
                const newItem = {...exercise}
                newItem.dia = event.target.value
                setExercise(newItem)
            }}
            className='Input-Form Input-Date' type='date'></input>
            <label
            className='Quantity-Label'>Cantidad de ejercicios:</label>
            <input
            min={1}
            max={4}
             className='Input-Form Input-Quantity' 
             onChange={(event)=>{
                setCount(event.target.value)   
             }}
            type='number' value={count} ></input>
            </div>
            {renderItems()
            }
            <div className='Containt-Buttons'>
            <button
             type='submit'
             className='Add-Button'
             onClick={()=>{
                newTodoRutine(exercise)
             }}
            >Add</button>
            <button
            className='Cancel-Button'
            type='button'
            onClick={()=>{
                onCancel()
            }}
            >Cancel</button>
            </div>
        </form>
    )
}