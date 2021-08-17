import Do from "../Do";




function Todo({todo, setTodo, filtered}){

    return(
        <div className="Todo">
            <ul>
                {filtered.map(oneTodo => (
                     <Do
                     newText = {oneTodo.text}
                     key = {oneTodo.id} 
                     setTodo ={setTodo}
                     todo={todo}
                     oneTodo={oneTodo}
                     />
                ))}
            </ul>
            
        </div>
    )
}
export default Todo;