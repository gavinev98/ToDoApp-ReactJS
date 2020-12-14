import React from 'react';

//creating a function
const FormFitler = ({setInputText, toDo, setToDoList, inputText}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);  
    };

    const submitToDoHandler = (e) => {
        //prevents page from reloading.
        e.preventDefault();
        //setting our toDoList firstly by using the spread operator to copy existing.
        setToDoList([
            ...toDo, {
                text: inputText,
                completed : false,
                id : Math.random() * 1000
            }
        ])
    }

    return (  
        <form>
        <input onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitToDoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );


}

export default FormFitler;