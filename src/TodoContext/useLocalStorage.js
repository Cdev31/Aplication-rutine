import React from "react";

export function useLocalStorage(itemName,initialValue){
    const localStorageItem = localStorage.getItem(itemName)

    let parsedItem;
   
    if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue))
        parsedItem = initialValue
    }else{
     parsedItem = JSON.parse(localStorageItem)
    }

    const [item,setItem] = React.useState(parsedItem)
    
    const saveTodo = (newItem)=>{
        const newRutine = [...item,newItem]
        localStorage.setItem(itemName,JSON.stringify(newRutine))
        setItem(newItem)
    }
 
    const changeItem = (newItem)=>{
        const newItemChanged = [...item,newItem]
        localStorage.setItem(itemName,JSON.stringify(newItemChanged))
        setItem(newItem)
    }

    const change = (newItem) => {
        localStorage.removeItem(itemName)
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
    }
    const deleteItem = (newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
    }

    return {item,changeItem,saveTodo,deleteItem,change}
}