// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Todo';

const TodoList = props => {

    return (
        <div className = "todo-list">
            {props.tasks.map( item => (
                <Item 
                key={item.id} 
                item={item} 
                toggleCompleted={props.toggleCompleted}/>
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Task
            </button>
            </div>
            );
};

export default TodoList;