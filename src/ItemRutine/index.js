import './ItemRutine.css'

export function ItemRutine({musculo,ejercicios,dia,letra,rutine,onCheck,onCheckDelete,changeColor}){

   return (
       <div style={{backgroundColor: changeColor}} className='Item' >
         <h2 style={{color:letra}}> Dia de {musculo} </h2>
         <p style={{color:letra}} className='Day-Item'>Dia de entreno {dia}</p>
         <ul style={{color:letra}} className='Item-Rutine'>
            {ejercicios.map((ejercicio)=>(
            <li 
            key={ejercicio.idItem}
            style={{color:letra}}>
               <span 
               onClick={()=>{
                  onCheck(ejercicio.idItem,rutine)
               }}
               className='Item-Completed'>V </span>
               <p className={`Item-Ejercicios ${ejercicio.done && "Item-Rutine-completed"}`} style={{color:letra}}>{ejercicio.ejercicio} </p>
               <p className={`Item-Series ${ejercicio.done && "Item-Rutine-completed"}`} style={{color:letra}}> series: {ejercicio.repeticiones}</p> 
               <span 
               onClick={()=>{
                  onCheckDelete(ejercicio.idItem,rutine)
               }}
               className='Item-Eliminated'>X</span>
            </li>)
           )
           }
           </ul>
       </div>
    )
}