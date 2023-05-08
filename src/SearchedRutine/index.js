import './SearchRutine.css'

export function SearchRutine({
    serchValue,
    setSerchValue
}){
    return (
        <input 
        value={serchValue}
        onChange={(event)=>{
            setSerchValue(event.target.value)
        }}
        type="text" placeholder="Buscar..."/>
    )
}
