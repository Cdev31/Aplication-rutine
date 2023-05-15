import React from "react";
import {SearchRutine} from '../SearchedRutine'
import {MenuRutine} from '../MenuRutine'
import {ItemRutine} from '../ItemRutine'
import {CreateRutineButton} from '../CreateRutineButton'
import {ListRutine} from '../ListRutine'
import {Modal} from '../Moda'
import {TodoForm} from '../TodoForm'
import {ContextRutine} from '../TodoContext'


export function AppUi(){
    const {openModal,serchRutine,onCheck,onCheckDelete,onDeleteRutine,
          changeColor,changeTextColor,setCompleted} = React.useContext(ContextRutine)

    return (
    <>
    <MenuRutine />
    <SearchRutine 
    />
    <ListRutine>
             {serchRutine.map((rutineItem)=>
               <ItemRutine
                 onDelete={()=>onDeleteRutine(rutineItem.id)}
                 rutine={rutineItem.id}
                 onCheck={onCheck}
                 onCheckDelete={onCheckDelete}
                 setCompleted={setCompleted}
                 completed={rutineItem.completed}
                 letra={changeTextColor}
                 changeColor={changeColor}
                 key={rutineItem.id}
                 musculo={rutineItem.musculo}
                 ejercicios={rutineItem.ejercicios}
                 dia={rutineItem.dia}
               />
             )}
            </ListRutine>
    <CreateRutineButton />
     {openModal && (
       <Modal>
         <TodoForm
         />
       </Modal>
     )}
    </>
   )
}