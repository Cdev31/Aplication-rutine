import './ItemColor.css'
export function ItemColor({color,setChangeColor,letra,setChangeTextColor,close,setClose}){
    return(
        <li 
        onClick={(event)=>{
            setChangeColor(event.target.style.backgroundColor)
            setChangeTextColor(letra)
            close == 'none' ? setClose('flex') : setClose('none')
        }}
        style={{backgroundColor:color,color:letra,display:close}} className="Item-Color">+</li>
    )
}


