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
        const newTodo = [...item,newItem]
        localStorage.setItem(itemName,JSON.stringify(newTodo))
        setItem(newItem)
    }
    const changeItem = (newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
    }

    return {item,changeItem,saveTodo}
}