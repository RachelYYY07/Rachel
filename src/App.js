import {useState} from 'react'
import { TodoHeader } from './components/TodoHeader';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
function App() {
  const[todoList,setTodoList]=useState([])
  console.log(todoList)
  return (
    <>
    <div className="App">
      <TodoHeader headerContent={"Todo List"} />
      <TodoInput setTodoList={setTodoList} todoList={todoList}/>
      <TodoList todoList={todoList}  setTodoList={setTodoList}/>
    </div>
    </>
  );
}

export default App;
