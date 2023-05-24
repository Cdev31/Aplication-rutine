import './ListRutine.css'

export function ListRutine({children}){
    return (
        <ul className="Rutine-items">
            {children}
        </ul>
    )
}