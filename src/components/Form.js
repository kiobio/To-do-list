


function Form({setText, setTodo, todo, text, setStatus }){

    const inputTextHandler = (e) =>{
        setText(e.target.value);
        }

    const submitText = (e) =>{
        e.preventDefault();
        setTodo([
            ...todo, {text: text, completed: false, id: Math.floor(Math.random() * 100) }
        ])
        setText("");
        //console.log(todo)
    }


    const filter = (e)=>{
        setStatus(e.target.value)
    }
return(
    <div className = "Form">
        <form>
            <input type = "text" value={text}
            onChange={
                inputTextHandler
            }
            />
            <button type="submit"
            onClick={submitText}
            >
                +
            </button>
            <div>
                <select 
                onChange={filter}
                name="todos">

                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>

                </select>
            </div>            
        </form>
    </div>
);
}
export default Form;