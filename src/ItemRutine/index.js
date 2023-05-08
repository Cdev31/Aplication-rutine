import './ItemRutine.css'

export function ItemRutine({musculo,ejercicios,dia}){
    return (
       <div className='Item'>
         <h2> Dia de {musculo} </h2>
         <p className='Day-Item'>Dia de entreno {dia}</p>
         <ul className='Item-Rutine'>
            {ejercicios.map((ejercicio)=>
            <li> <span className='Item-Completed'>V</span>{ejercicio.ejercicio} <p>series: {ejercicio.repeticiones}</p> <span className='Item-Eliminated'>X</span></li>)}
         </ul>
       </div>
    )
}