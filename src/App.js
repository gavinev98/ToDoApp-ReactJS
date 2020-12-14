import React, { useState } from 'react';

import './App.css';
//importing components to be displayed.
import FormFilter from '../src/components/SearchFilter/FormFilter';
//importing the ToDoList
import ToDoList from '../src/components/ToDoList/ToDoList';

function App() {

  //this is our first state object for input field.
   const[inputText, setInputText] = useState("");
  //this is our second state object for ToDoList array.
   const[toDo, setToDoList] = useState([]);

  return (
    <div className="App">
    <header>
  <h1>Gavins Daily List </h1>
    </header>
    <FormFilter toDo={toDo} setToDoList={setToDoList} inputText={inputText} setInputText={setInputText} />
    <ToDoList   />
    </div>
  );


}

export default App;
