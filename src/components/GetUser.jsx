import React, { useState } from 'react';

export default function GetUser({ onSearch }) {
  const [userName, setUserName] = useState('');

  const handleChange = event => {
    const userName = event.target.value;
    setUserName(userName);
  };

  const handleClick = event => {
    event.preventDefault();
    userName.trim() && onSearch(userName.toLowerCase());
    setUserName('');
  };

  return (
    <form onSubmit={handleClick}>
      <input type="text" placeholder="Search for a GitHub user..." onChange={handleChange} value={userName} />
      <button type="submit">GO</button>
    </form>
  );
}
