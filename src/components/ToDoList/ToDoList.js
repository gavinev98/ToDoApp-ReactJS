import React from 'react';

//importing ToDoItems for rendering.
import ToDoItem from '../ToDoList/ToDoItem';

const ToDoList = () => {

    return (
        <div className="todo-container">
        <ul className="todo-list">
            <ToDoItem />
            </ul>
      </div>
    );

}

export default ToDoList;