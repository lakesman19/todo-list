
import React ,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Test from './components/Test';
import Todolist from './components/Todolist';

function App() {
const [Input ,setInputText] = useState("")
const [todos ,setTodos] = useState([ ])
const [status , setStatus] = useState("all")
const [filteredTodos, setFilterTodos] = useState([])
useEffect(()=>{
  getLocalTodos()
  },[])

useEffect(()=>{
filterHandler()
savelocalTodos()
},[todos, status])

const filterHandler = () => {
  switch(status){
    case'completed':
    setFilterTodos(todos.filter(todo =>todo.completed===true)); 
    break
    case 'uncompleted':
      setFilterTodos(todos.filter(todo =>todo.completed===false));
      break
      default:
      setFilterTodos(todos)
      break
  }
}
// save to local storage 
const savelocalTodos = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
    // localStorage.setItem("todos",todos)
  }
const getLocalTodos = ()=> {
  if (localStorage.getItem("todos")===null){
    localStorage.setItem("todos", JSON.stringify([]));
  }else {
  localStorage.setItem("todos", JSON.stringify(todos))
//  console.log(todolocal , 'yues')
  }
}


  return (
    <div className="App">
      <header>
        <h1>Lakes Todo List</h1>
      </header>
      <Form
            todos={todos}  
            setTodos={setTodos} 
            Input={Input} 
            setInputText={setInputText}
            // status={status}
            setStatus={setStatus} 
             />
      <Todolist todos={todos}
       setTodos={setTodos}
        filteredTodos={filteredTodos}/>
        {/* <Test/> */}
    </div>
  );
}

export default App;
  