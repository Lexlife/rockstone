import React, { useState } from 'react';

export const SwipeTextArea = () => {
  const [message, setMessage] = useState('');
  const submit = (event) => {
    event.preventDefault();
    const p = document.createElement('p');
    document.body.appendChild(p);
    p.innerHTML = `${message}`;
    setMessage('');
  };

  return (
    <form onSubmit={submit}>
        <textarea
          name="message"
          rows="5"
          cols="40"
          value={message}
          onChange={event => setMessage(event.target.value)}
          type="text"
        />
      <button>Отправить</button>
    </form>
  );
};


