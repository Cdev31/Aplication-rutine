import React from "react";


export function useLocalStorage(itemName,initialValue){
    
    let parsedItem;
    const localStorageItem = localStorage.getItem(itemName)

    if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue))
        parsedItem = initialValue
    }else{
    parsedItem = JSON.parse(localStorageItem)
    }    
    
    const [item,setItem] = React.useState(parsedItem)

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

    return {item,changeItem,saveTodo,deleteItem,change}
}