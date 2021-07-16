import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

function App(props) {
    const [user, setUser] = useState('');

    function handleSearch() {
        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(response => console.log(response.data));
    }

    return (
        <S.Container>
            <S.Input className="userInput" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
            <S.Button type="button" onClick={handleSearch}>Pesquisar</S.Button>
        </S.Container>
    );
}

export default App;