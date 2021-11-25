import React, { useState } from 'react';
import './App.css';

const Todo = ({ index, todo }) => {
    return (
        <>
            <div className="task-adder" >
                <p> urutan ke {index + 1} atas nama {todo.text}
                </p>
            </div>

        </>
    )
}

//add todo form
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const onSubmitHndlr = e => {
        e.preventDefault();

        if (!value) return;//validation
        addTodo(value);
        setValue('');
    };//onSubmitHndlr

    return (
        <form onSubmit={onSubmitHndlr}>
            <h3 center>Masukkan Nama</h3>
            <input type='text' className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Masukan nama" required />
            <button>Add Task</button>
        </form>
    );
}

function App() {

    const [todos, setTodos] = useState([]);

    //add
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };//addTodo

    //delete
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (

        // make center posision and card position

        <div className="app">
            <h1> Simulasi Antrian </h1>
            <hr />
            <br/>
            <TodoForm addTodo={addTodo} />
            <br/>
            <div className="todo-list">
                {
                    todos.map((todo, index) => (<Todo key={index} index={index} todo={todo} />))
                }
            </div>
            {
                todos.length === 0 && <h3>[ Antrian kosong ! ]</h3>
            }

            <hr />
            <button onClick={() => deleteTodo(0)}>Majukan !</button>
            <button onClick={() => setTodos([])}>Reset</button>
        </div>
    );
}

export default App;