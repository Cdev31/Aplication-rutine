import './ItemRutine.css'

export function ItemRutine({musculo,ejercicios,dia,letra,completed,setCompleted,changeColor}){
   return (
       <div style={{backgroundColor: changeColor}} className='Item' >
         <h2 style={{color:letra}}> Dia de {musculo} </h2>
         <p style={{color:letra}} className='Day-Item'>Dia de entreno {dia}</p>
         <ul style={{color:letra}} className='Item-Rutine'>
            {ejercicios.map((ejercicio)=>(
            <li style={{color:letra}}>
               <span 
               onClick={()=>{
                  ejercicio.done = true
               }}
               className='Item-Completed'>V </span>
               <p className={`${ejercicio.done && "Item-Rutine-completed"}`} style={{color:letra}}> {ejercicio.ejercicio} series: {ejercicio.repeticiones}</p> 
               <span className='Item-Eliminated'>X</span>
            </li>)
           )
           }
           </ul>
       </div>
    )
}