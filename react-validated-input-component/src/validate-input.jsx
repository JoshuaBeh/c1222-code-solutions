import React, { useState } from 'react';

export default function ValidateInput() {

  const switchClasses = {
    hidden: 'hidden',
    greenCheck: {
      style: 'fa-sharp fa-solid fa-check green'
    },
    redX: {
      style: 'fa-sharp fa-solid fa-xmark red',
      text: 'Your password is too short.'
    }
  };

  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // const form = event.target;
    // const formData = new FormData(form);
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
  }

  if (password.length === 0) {
    switchClasses.hidden = 'hidden';
  } else {
    switchClasses.hidden = '';
  }

  const classes = switchClasses[password.length >= 8 ? 'greenCheck' : 'redX'];
  return (
    <form className='row' onSubmit={handleSubmit}>
      <div className='relative'>
        <label
          className="margin-right-10 block"
          htmlFor="password">
          Password
        </label>
        <input
          minLength={8}
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <i className={`${classes.style} ${switchClasses.hidden}`}></i>
        <h4 className={`block ${switchClasses.hidden}`}>{classes.text}</h4>
      </div>
      <button className='margin-left-10' type="submit">Sign Up</button>
    </form>
  );
}
