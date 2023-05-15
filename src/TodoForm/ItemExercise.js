import {v4 as uuid} from 'uuid'
import './TodoForm.css'

export function ItemExercise({setExercise,exercise,index}){

    const handleExerciseChange = (event)=>{
        const {value} = event.target
        const newExercise = {...exercise.ejercicios[index], ejercicio:value,done:false,idItem:uuid()}
        const newEjercicios = [...exercise.ejercicios]
        newEjercicios[index] = newExercise

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
        >Ejercicio:</label>
        <input 
        onBlur={handleExerciseChange}
         className='Input-Form Input-Form-Exercise' type='text'></input>
        <label
        >series:</label>
        <input  
        onBlur={handleSeriesChange}
        className='Input-Form Input-Form-Exercise' type='text'></input>
       </div>
    )
}