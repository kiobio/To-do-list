
import { useEffect, useState } from 'react';
import './App.scss';
import Form from './components/Form';
import Todo from './components/Todo';



function App() {
  
const [text, setText]= useState("");
const [todo, setTodo] = useState([]);
const [status, setStatus] = useState("all");
const [filtered, setFiltered] = useState([]);

useEffect(() => {
getLocalTodo()
},[]);

 useEffect(()=>{
    filterHandler();
    saveLocalTodo();
  }, [status, todo])

const filterHandler = () =>{
  switch(status){
    case "completed":
      setFiltered(todo.filter((oneTodo)=>oneTodo.completed === true));
      break;
    case "uncompleted":
      setFiltered(todo.filter((oneTodo) => oneTodo.completed !== true));
      break;
    default:
      setFiltered(todo);
      break;
  }
}

const saveLocalTodo = () =>{ 
    localStorage.setItem("todo", JSON.stringify(todo))
  };

const getLocalTodo = () =>{
  if(localStorage.getItem("todo")=== null){
    localStorage.setItem("todo", JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem("todo"));
    setTodo(todoLocal);
  }
  };

  return (
    <div className = "body">
      <h1>Aneta's To do list</h1>
      
      <Form
      setText ={setText}
      setTodo ={setTodo}
      todo = {todo}
      text = {text}
      setStatus={setStatus}
      status={status}
     // filterHandler = {filterHandler}
     
      />
      <Todo
      todo ={todo}
      setTodo={setTodo} 
      filtered={filtered}
      />
    
    </div>
  );
}

export default App;
