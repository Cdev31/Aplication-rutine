import './ItemColor.css'
export function ItemColor({color,colors,setChangeColor,letra,setChangeTextColor,close,setClose}){
    return(
        <li 
        onClick={(event)=>{
            const newItemColor = {color: color,letra:letra}
            setChangeColor(event.target.style.backgroundColor)
            setChangeTextColor(letra)
            colors(newItemColor)
            close == 'none' ? setClose('flex') : setClose('none')
        }}
        style={{backgroundColor:color,color:letra,display:close}} className="Item-Color">+</li>
    )
}


