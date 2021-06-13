import './App.css';
import {useState} from 'react';
import NewToDo from './NewToDo';

function App() {

  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);


  const onChangeHandler = e=> {
    setCurrentItem(e.target.value);
  };

  const addItemsToList=()=>{
    if(currentItem!==""){  
    updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
    setCurrentItem(""); }  
  
  };

  return (
    <div className="container">
        <h1>ToDo List</h1>
        <div className="form-group">
          <input type="text"
             name="to-do-input" id="to-do-input" aria-describedby="helpId" placeholder="Enter new todo" onChange={onChangeHandler}/>
          <button className="btn" type="submit" onClick={addItemsToList}>Create</button>
          <NewToDo itemList={itemList} updateItemList={updateItemList}/>
        </div>
</div>
  );
}

export default App;
