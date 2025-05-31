import { useState, useEffect, useCallback, useRef } from 'react'
import Container from '../components/Container';
import InputText from '../components/InputText';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';




function TodoApp() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState(() => localStorage.getItem("filter") || "All");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [err, setErr] = useState(false)
  const inputRef = useRef();

  // Save filter to localStorage
  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //form handle
  const formHandle = (e) => {
    e.preventDefault();
  }

  //add todo
  const addTodos = () => {
    if (task.trim().length !== 0) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: task.trim(),
        completed: false
      }]);
      setErr(false);
      setTask("");
      inputRef.current.focus();
    } else {
      setErr(true);
    }
  }

  const toggleComplete = useCallback((id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  // filter options
  const filters = ['All', 'Active', 'Completed'];

  const filterTodos = todos.filter(todo => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  })

  return (
   <>
<Helmet>
  <title>Todo App | React-ToolBox</title>
  <meta name="description" content="best elegent designed todo app" />
</Helmet>


    <Container>

      <h1 className='text-center text-zinc-50 text-3xl font-semibold'>Todo App</h1>
      <form onSubmit={formHandle}>
        <div className=' mt-6 flex items-center justify-center gap-1 mx-1'>
          <InputText
            type='text'
            placeholder='Create a Task'
            ref={inputRef}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button variant='defult' onClick={addTodos} type="submit">ADD</Button>
        </div>
        {err && <div className='text-pink-600 ml-8'>please add a task</div>}
      </form>

      <div className='flex items-center justify-center gap-3 mt-4 bg-zinc-700 mx-13 py-1 rounded-md '>
        {
          filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={filter == f ? 'bg-indigo-600 text-zinc-100 px-4 py-1 rounded-md' : 'text-zinc-100'} type="button">{f}</button>
          ))
        }
      </div>

      <div className='border-indigo-700 rounded-md mt-6 mx-auto w-full flex flex-col   gap-3'>
        {
          todos.length == 0 ? (
            <p className='text-center text-zinc-200'>no todos yet</p>
          ) : (
            filterTodos.map((todo) => (
              <div className='flex justify-between mx-5 items-center bg-zinc-700 px-6 py-2 rounded-md' key={todo.id}>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} className='accent-indigo-600 w-5 h-5' />
                  <p className={`text-xl font-semibold ${todo.completed ? 'line-through text-zinc-400' : 'text-zinc-100'}`} >{todo.text}</p>
                </div>
                <button onClick={() => deleteTodo(todo.id)} className='text-red-500 text-xl'>❌</button>
              </div>
            ))
          )
        }
      </div>

    </Container>
   </>
  )
}

export default TodoApp
