import {v4 as uuid} from 'uuid'
import './TodoForm.css'

export function ItemExercise({setExercise,newColor,exercise,index}){

    const handleExerciseChange = (event)=>{
        const {value} = event.target
        const newExercise = {...exercise.ejercicios[index], ejercicio:value,done:false,idItem:uuid()}
        const newEjercicios = [...exercise.ejercicios]
        newEjercicios[index] = newExercise

        console.log(newExercise)
        setExercise((prevExercise)=>(
            {
                ...prevExercise,
                ejercicios: newEjercicios
            }
        ))
    }

    const handleSeriesChange= (event)=>{
        const {value} = event.target
        const newExercise = {...exercise.ejercicios[index], repeticiones:value}
        const newEjercicios = [...exercise.ejercicios]
        newEjercicios[index] = newExercise

        setExercise((prevExercise)=>(
            {
                ...prevExercise,
                ejercicios: newEjercicios
            }
        ))
    }

    return (
        <div className='Containt-Exercise'>
        <label
        style={{color: newColor.letra}}
        >Ejercicio:</label>
        <input 
        style={{color: newColor.letra}}
        onBlur={handleExerciseChange}
         className='Input-Form Input-Form-Exercise' type='text'></input>
        <label
        style={{color: newColor.letra}}
        >series:</label>
        <input  
        style={{color: newColor.letra}}
        onBlur={handleSeriesChange}
        className='Input-Form Input-Form-Exercise' type='text'></input>
       </div>
    )
}