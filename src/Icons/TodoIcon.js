import {ReactComponent as CheckSVG} from './Check.svg'
import {ReactComponent as DeleteSVG} from './Delete.svg'
import {ReactComponent as CheckDeleteSVG} from './CheckDelete.svg'

import './TodoRutineIcon.css'

const iconTypes ={
    "check":(color)=> <CheckSVG className='Icon-svg' fill={color}/>,
    "delete":(color)=> <DeleteSVG className='Icon-svg' fill={color}/>,
    "checkDelete":(color)=> <CheckDeleteSVG className='Icon-svg' fill={color}/>
}

export function TodoIcon({type,color,onClick}){
    return (
        <span
        className={`Icon-Container Icon-Container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}