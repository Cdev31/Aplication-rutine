import './CreateRutineButton.css'

export function CreateRutineButton({changeColor,setOpenModal,letra}){
    return (
        <button 
        onClick={()=>{
            setOpenModal(state=>!state)
        }}
        style={{backgroundColor: changeColor,color:letra}}
        className='Button-add'>+</button>
    )
}