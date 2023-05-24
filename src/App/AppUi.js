import React from "react";
import {SearchRutine} from '../SearchedRutine'
import {MenuRutine} from '../MenuRutine'
import {ItemRutine} from '../ItemRutine'
import {CreateRutineButton} from '../CreateRutineButton'
import {ListRutine} from '../ListRutine'
import {Modal} from '../Modal'
import {TodoForm} from '../TodoForm'
import {ContextRutine} from '../TodoContext'
import {CompletedMessage} from '../Completed'
import {LoadingRutines} from '../LoadinSkelletor'

export function AppUi(){
    const {openModal,serchRutine,loading,
      error,onDeleteRutine,newColor,openCompleted} = React.useContext(ContextRutine)
    
    return (
    <>
    <MenuRutine />
    <SearchRutine 
    />
    <ListRutine>
      {loading == true && (
        <LoadingRutines/>
      )
      }
             {serchRutine.map((rutineItem)=>
               <ItemRutine
                 onDelete={()=>onDeleteRutine(rutineItem.id)}
                 rutine={rutineItem.id}
                 completed={rutineItem.completed}
                 letra={newColor.letra}
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
     {openCompleted && (
        <CompletedMessage/>
      )
       }
    </>
   )
}