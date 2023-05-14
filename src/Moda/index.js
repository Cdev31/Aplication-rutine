import React from 'react-dom'

export function Modal({children}){
    return React.createPortal(
        <div>
            {children}
        </div>,
        document.getElementById('modal')
    )
}