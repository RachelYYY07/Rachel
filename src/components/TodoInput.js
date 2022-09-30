import { useState } from 'react'
export const TodoInput=({todoList, setTodoList}) => {
    const[inputValue,setInputValue]=useState("")
    
    function onClickAdd(){

       setTodoList([...todoList, {content:inputValue,isDeleted:false,id:todoList.length,isChecked:false}])
       setInputValue("") 
    } 
    return(
        <>
        {!isChecked && 
        <input style={{ textDecoration:isChecked ? "line-through":"text"}}
        value={inputValue}
        type="text"
        onChange={(e)=>setInputValue(e.target.value)}/>}
        <button onClick={onClickAdd}> Add </button>
        
        </>
         
        
    )

}