import React from 'react';

//importing ToDoItems for rendering.
import ToDoItem from '../ToDoList/ToDoItem';

const ToDoList = ({toDo}) => {
    
    return (
        <div className="todo-container">
        <ul className="todo-list">
        {toDo.map(todoItem => (
           <ToDoItem  />
        ))}
            </ul>
      </div>
    );

}

export default ToDoList;