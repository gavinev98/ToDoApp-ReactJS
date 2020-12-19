import React, { useState, useEffect, Component } from 'react';

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

   //creating a status state for filter option
   const[status, setStatus] = useState('all');

   //creating a list of objects for the filtered list.
   const [filteredTodos, setFilteredToDos] = useState([]);



   
    //fitler handler for 
   const filterHandler = () => {
      switch(status) {
        case 'completed':
           setFilteredToDos(toDo.filter(todos => todos.completed == true));
        break;
        case 'uncompleted':
          setFilteredToDos(toDo.filter(todos => todos.completed == false));
        break;
        case 'all':
          setFilteredToDos(toDo);
        break;

      }
   }

     //with useEffect we can run a function everytime a piece of state changes.
    useEffect(() => {
    filterHandler();
   }, [toDo, status]);
 
   const saveLocalTodos = () => {
     if(localStorage.getItems('todos') === null){
       localStorage.setItem("todos", JSON.stringify([]));
     }else {
       localStorage.setItem("todos", JSON.stringify(toDo));
     }
   }

  return (
    <div className="App">
    <header>
  <h1>Gavins Daily List </h1>
    </header>
    <FormFilter setFilteredToDos={setFilteredToDos} setStatus={setStatus} toDo={toDo} setToDoList={setToDoList} inputText={inputText} setInputText={setInputText} />
    <ToDoList filteredTodos={filteredTodos} toDo={toDo} setToDoList={setToDoList}  />
    </div>
  );


}

export default App;
