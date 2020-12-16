import React from 'react';



const ToDoItem = ({id , completed, text, toDo, setToDoList}) => {

    //events for deleting / ticking off item from list

    const deleteHandler = (id) => {
        //deleting item clicked using the filter function.
        setToDoList(toDo.filter(todo => todo.id !== id));

    }

    return (
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className="complete-btn" ><i className="fas fa-check"></i></button>
            <button onClick={() => deleteHandler(id)} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>

    );


}

export default ToDoItem;