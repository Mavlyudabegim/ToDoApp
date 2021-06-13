import React from 'react';
import './NewToDo.css';

function NewToDo(props){
const deleteItemFromList=key=>{
  const newList=  props.itemList.filter(itemObj=>{
        return itemObj.key!==key;
    });

    props.updateItemList(newList);
}
return (
   <div className="wrapper">
       {props.itemList.map(itemObj=>{
           return(
               <div className="box">
                   <p>
                       {itemObj.item}
                   </p>
                   <button onClick={()=>deleteItemFromList(itemObj.key)} className="delete-btn">Delete</button>
               </div>
           );
       })}
   </div>
    
);
}

export default NewToDo;