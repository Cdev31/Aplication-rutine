import React from "react";


export function useLocalStorage(itemName,initialValue){
    const [loading,setLoading] = React.useState(true)
    const [error,setError] = React.useState(false)
    const [item,setItem] = React.useState(initialValue)
    
    React.useEffect(()=>{
        let parsedItem;
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                if(!localStorageItem){
                    localStorage.setItem(itemName,JSON.stringify(initialValue))
                    parsedItem = initialValue
                }
                else{
                parsedItem = JSON.parse(localStorageItem)
            }  
            setItem(parsedItem)
            setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }, 2000);
    }, [])

    
    //Guardar en localstorage
    const saveTodo = (newItem)=>{
        const newRutine = [...item,newItem]
        localStorage.setItem(itemName,JSON.stringify(newRutine))
        setItem(newItem) 
    }

    //Cambiar datos en localstorage
    const changeItem = (newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
    }

    //Actualizar el localstorage
    const change = (newItem) => {
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
    }
    
    //Eliminar datos del localstorage
    const deleteItem = (newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
    }
    
   
    return {item,changeItem,saveTodo,deleteItem,change,loading,error}
}