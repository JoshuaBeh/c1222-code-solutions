import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('Current username state:', username);
    // console.log('Current password state:', password);
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form className='row' onSubmit={handleSubmit}>
      <div>
        <label
         className="margin-right-10"
         htmlFor="username">
          Userame
        </label>
        <input
         type="text"
         value={username}
         name="username"
         id="username"
         onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label
         className="margin-right-10 margin-left-10"
         htmlFor="password">
          Password
        </label>
        <input
         type="password"
         value={password}
         name="password"
         id="password"
         onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className='margin-left-10' type="submit">Sign Up</button>
    </form>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
