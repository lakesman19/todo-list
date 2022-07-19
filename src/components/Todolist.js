import React from 'react'
import Todo from './Todo'

 
const Todolist = ({todos, setTodos, filteredTodos}) => {
    console.log(' todo-litz:',todos);
  return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map(todo => (
                    <Todo 
                    key={todo.id}
                     text={todo.text }
                     todo={todo}
                     todos={todos}
                     setTodos={setTodos} 
                     />  
                ))}
            </ul>
        </div>
  )
}

export default Todolist

 