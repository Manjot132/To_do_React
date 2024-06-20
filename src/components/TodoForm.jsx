import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoslice';
function TodoForm() {
const [input,setInput]=useState('');
const dispatch=useDispatch();
const add=(e)=>{
e.preventDefault();
if(!input) return;
dispatch(addTodo(input))
setInput('');
}
    return (
        <form onSubmit={(e)=>add(e)}  className="flex">
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-black shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

