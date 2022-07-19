import React from 'react'
import {  FaPlusSquare} from "react-icons/fa";


const Form= ({Input, setInputText, setTodos, todos, setStatus}) => {
    const inputTextHandler =(e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        console.log('you clicked')
        // e.stopPropagation()
        setTodos([
            ...todos,
            {text: Input, completed:false, id: Math.random() * 1000 }
        ]); 
        setInputText("");
    };
    const statusHandler =(e) =>{
        setStatus(e.target.value)
    }
  return (
    <form> 
    <input 
    value={Input} 
    onChange={inputTextHandler}
     type="text" 
     className='todo-input' />
    <button  onClick={submitTodoHandler} className='todo-button' type="submit">
    <FaPlusSquare />
    </button>
    <div className='Select'>
        <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option> 
        </select>
    </div>
   </form>
  )
}

export default Form