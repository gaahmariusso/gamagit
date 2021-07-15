import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [user, setUser] = useState('');

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response => console.log(response.data));
  }

  return (
    <>
      <input className="userInput" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
      <button type="button" onClick={handleSearch}>Pesquisar</button>
    </>
  );
}

export default App;