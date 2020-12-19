import React from 'react';

//importing ToDoItems for rendering.
import ToDoItem from '../ToDoList/ToDoItem';

const ToDoList = ({toDo, setToDoList}) => {
    
    return (
        <div className="todo-container">
        <ul className="todo-list">
        {toDo.map(todoItems => (
        <ToDoItem  toDo={toDo} setToDoList={setToDoList} key={todoItems.id} id={todoItems.id} completed={todoItems.completed} text={todoItems.text}  />
       ))}

            </ul>
      </div>
    );

        
}

export default ToDoList;