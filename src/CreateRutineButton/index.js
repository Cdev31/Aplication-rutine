import './CreateRutineButton.css'

export function CreateRutineButton({changeColor,letra}){
    return (
        <button 
        style={{backgroundColor: changeColor,color:letra}}
        className='Button-add'>+</button>
    )
}