import { useState, useEffect, useCallback, useRef } from 'react';
import Container from '../components/Container';
import InputText from '../components/InputText';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';
import Heading from '../components/Heading';

function TodoApp() {
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState(() => localStorage.getItem('filter') || 'All');
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [err, setErr] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const formHandle = (e) => {
    e.preventDefault();
  };

  const addTodos = () => {
    if (task.trim().length !== 0) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: task.trim(),
          completed: false,
        },
      ]);
      setErr(false);
      setTask('');
      inputRef.current.focus();
    } else {
      setErr(true);
    }
  };

  const toggleComplete = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const filters = ['All', 'Active', 'Completed'];

  const filterTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Todo App | React-ToolBox</title>
        <meta name="description" content="best elegant designed todo app" />
      </Helmet>

      <Container>
        <Heading>Todo App</Heading>

        <form onSubmit={formHandle}>
          <div className="mt-6 flex items-center justify-center gap-1 mx-1">
            <InputText
              type="text"
              placeholder="Create a Task"
              ref={inputRef}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="default" onClick={addTodos} type="submit">
              ADD
            </Button>
          </div>
          {err && (
            <div className="text-pink-600 ml-8 dark:text-pink-400">
              Please add a task
            </div>
          )}
        </form>

        <div className="flex items-center justify-center gap-3 mt-4 bg-neutral-200 dark:bg-zinc-700 mx-13 py-1 rounded-md">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1 rounded-md font-medium transition ${
                filter === f
                  ? 'bg-indigo-600 text-white'
                  : 'text-neutral-700 dark:text-zinc-100 hover:text-indigo-600'
              }`}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>

        <div className="rounded-md mt-6 mx-auto w-full flex flex-col gap-3">
          {todos.length === 0 ? (
            <p className="text-center text-neutral-700 dark:text-zinc-200">
              No todos yet
            </p>
          ) : (
            filterTodos.map((todo) => (
              <div
                className="flex justify-between mx-5 items-center bg-white dark:bg-zinc-700 px-6 py-2 rounded-md shadow-sm"
                key={todo.id}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <p
                    className={`text-xl font-semibold ${
                      todo.completed
                        ? 'line-through text-neutral-400 dark:text-zinc-400'
                        : 'text-neutral-900 dark:text-zinc-100'
                    }`}
                  >
                    {todo.text}
                  </p>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-600 dark:text-red-400 text-xl hover:scale-110 transition"
                >
                  ❌
                </button>
              </div>
            ))
          )}
        </div>
      </Container>
    </>
  );
}

export default TodoApp;
