import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
    const [Pokemons, setPokemons] = useState([]); 
    useEffect(() => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response)
        setPokemons(response.data.results)
      })
      .catch((err) => console.log(err))
    })

    return (
      <div>
        <h1 className='pokemons'>Pokemons!</h1>
        {Pokemons.map((poki, index) => (
          <li key={index} className='pokis'>{poki.name}</li>
        ))}
      </div>
    )
  }

export default App;
