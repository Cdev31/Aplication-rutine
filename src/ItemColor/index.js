import './ItemColor.css'
export function ItemColor({color,colors,changedColor,setChangeColor,letra,setChangeTextColor,close,setClose}){
    return(
        <li 
        onClick={(event)=>{
            console.log('a',colors)
            setChangeColor(event.target.style.backgroundColor)
            setChangeTextColor(letra)
            close == 'none' ? setClose('flex') : setClose('none')
        }}
        style={{backgroundColor:color,color:letra,display:close}} className="Item-Color">+</li>
    )
}


