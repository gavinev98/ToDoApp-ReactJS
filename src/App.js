import React, { useState } from 'react';

import './App.css';
//importing components to be displayed.
import FormFilter from '../src/components/SearchFilter/FormFilter';
//importing the ToDoList
import ToDoList from '../src/components/ToDoList/ToDoList';

function App() {

   const[inputText, setInputText] = useState("");

  return (
    <div className="App">
    <header>
      <h1>Gavins Daily List</h1>
    </header>
    <FormFilter />
    <ToDoList />
    </div>
  );


}

export default App;
