import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    //console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}
    /*return (
    <div className="container" style={myStyle}>
        <h3 className="my-3">Todos List</h3>
        {props.todos.length === 0 ? "No Todos to display" :
            props.todos.map((todo) => {
                return ( //Whenever returning more than one thing always write within closing paranthesis() plus opening and closing tags.
                    <>
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                        <hr />
                    </>
                )
            })
        }
        {/*<TodoItem todo={props.todos[0]}/>}
    </div>
)*/

