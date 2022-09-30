
export const TodoList=({todoList,setTodoList})=>{
  
    // function onClickChecked(id){
    //     const checkedArr = todoList.map((el)=>{
    //         if(el.id === id) {
    //             el.isChecked = true
    //         }
    //         return el
    //     })
    //     setTodoList(checkedArr)
    //     }
        
    // }
    // function onClickDelete(id){
    //     const updatedArr = todoList.map((el)=>{
    //         if (el.id === id){
    //             el.isDeleted = true
    //         }
    //         return el       
    //     }) 
    //     setTodoList(updatedArr)
    // }
    return(
        <>
        <ol>
            {todoList.map(({content,isDeleted,id,isChecked},index)=>{
                return(
                    <li key={`${content}+${index}`}>
                      
                    {/* {content}
                    {/* <button onClick={onClickDelete(id)}>delete</button> */}
                    <input onClick={()=> onClickChecked(id)} 
                    type="checkbox"/>
                    </li>
                )
            })}
        </ol>
        </>
    )
}