import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Scroll from "./components/Scrollable/Scroll"
import InfiniteScroll from 'react-infinite-scroll-component';

import { getPokemon, getAllPokemon } from './services/pokemon';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
      <Navbar />
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <h2 className="haiya_judul">Pokedex</h2>
            <div className="haiya">
              <InfiniteScroll
                dataLength= {pokemonData.length}
                next={() => setPokemonData(pokemonData) + 1}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Semua data telah anda lihat</b>
                  </p>
                }>
                {pokemonData.map((pokemon, i) => {
                  return <Scroll key={i} pokemon={pokemon} />
                })}
              </InfiniteScroll>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
