import './SearchRutine.css'

export function SearchRutine({
    serchValue,
    setSerchValue,
    color
}){
    let newColor = color;
    if(color ==='white'){
        newColor = 'black'
    }
    return (
        <input
        className='Input-Searching'
        style={
            {
            borderBlockColor:newColor,
            borderInlineColor:newColor,
            color:newColor}} 
        value={serchValue}
        onChange={(event)=>{
            setSerchValue(event.target.value)
        }}
        placeholder='Search...'
        type="text"/>

        )
}
