import React from 'react'
import { FaTrash, FaCheckSquare } from "react-icons/fa";

const Todo = ({text,todo,todos,setTodos}) => {
    //events
    const deleteHandler =  () =>{
        setTodos(todos.filter((data) => data.id !== todo.id));
        console.log(todos);
    };
    const completedHandler =() =>{
        setTodos(todos.map((data) =>{
            if(data.id===todo.id){
                return {
                    ...data,completed:!data.completed
                };
            } 
            return data
        })
   ) }
  return (
    <div className='todo'>
         <li className={`todo-item${todo.completed ? "completed" : ""}`}>{text}</li>
         <button className="check"onClick={completedHandler} ><FaCheckSquare/></button>
         <button className="trash" onClick={deleteHandler}><FaTrash/></button>
    </div>
  )
}

export default Todo 