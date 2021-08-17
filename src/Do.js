
import check from "./img/check2.jpg"
import trash from "./img/can.png";


function Do({newText, setTodo, todo, oneTodo}){

    const deleteHandler = () =>{
       setTodo(todo.filter((el) => el.id !== oneTodo.id));
    };

    const completeHandler= () =>{
      setTodo(todo.map((item )=>{
          if(item.id === oneTodo.id){
              return{
                  ...item, completed: !item.completed
              }
          }
          return item;
      }))
    };

    return(
        <div className="list">
            <div className="listFlex">
                <li id={`${oneTodo.completed ? "completed" : ""}`}>{newText}</li>
                <div>
                <button
                onClick={completeHandler} 
                className="butt can"><img src ={check} alt = "check"/></button>
                <button 
                onClick={deleteHandler}
                className="butt trash"><img src={trash} alt = "trash can"/></button>
                </div>
            </div>
        </div>
    )
}
export default Do;