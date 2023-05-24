import './ListChangeColor.css'
export function ListChangeColor({children,close}){
    return (
        <ul 
        style={{display:close}}
        className='Contain-Items-Color'>
            {children}
        </ul>
    )
}