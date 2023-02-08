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
  }

  if (password.length === 0) {
    switchClasses.hidden = 'hidden';
  } else {
    switchClasses.hidden = '';
  }

  const conditions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const special = conditions.some((char) => password.includes(char));
  const numbers = zeroToNine.some((number) => password.includes(number));

  const classes = switchClasses[password.length >= 8 && special && numbers ? 'greenCheck' : 'redX'];
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
          // required="required"
          onChange={(event) => setPassword(event.target.value)}
        />
        <i className={`${classes.style} ${switchClasses.hidden}`}></i>
        <h4 className={`block ${switchClasses.hidden}`}>{classes.text}</h4>
      </div>
      <button className='margin-left-10' type="submit">Sign Up</button>
    </form>
  );
}
