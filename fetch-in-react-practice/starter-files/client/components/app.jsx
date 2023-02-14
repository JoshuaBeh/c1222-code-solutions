/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then((response) => response.json())
      .then((data) => {
        setErr(false);
        setTodos(data);
      })
      .catch((error) => {
        console.error(error);
        setErr(true);
      });
  }, []);

  function addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    *   - create a shallow copy of the todos array from state
    *   - add the todo received from the server to the copied array
    *   - replace the old todos array in state with the new one
    *
    * DO NOT MUTATE the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };

    fetch('/api/todos', options)
      .then((response) => response.json())
      .then((data) => {
        setErr(false);
        setTodos(todos.concat(data));
      })
      .catch((error) => {
        console.error(error);
        setErr(true);
      });
  }

  function toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - replace the old todos in the state with the new one (you know the index).
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    let index;
    let request;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todoId === todoId) {
        index = i;
        request = { isCompleted: !todos[i].isCompleted };
      }
    }
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    };
    fetch(`/api/todos/${todoId}`, options)
      .then((response) => response.json())
      .then((data) => {
        setErr(false);
        const copyState = todos.slice(0);
        if (todos[index].todoId === data.todoId) {
          copyState[index] = data;
          setTodos(copyState);
        } else {
          setTodos(copyState);
        }
      })
      .catch((error) => {
        console.error(error);
        setErr(true);
      });
  }

  if (err) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col pt-5'>
            <p>Something went wrong, please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
