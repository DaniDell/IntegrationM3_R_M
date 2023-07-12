import Card from "../Card/Card";
import style from './Cards.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cards(props) {
  const { characters, onClose } = props;
  console.log(characters);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3001/rickandmorty/favorites');
      const favorites = response.data;
      setFavoriteCharacters(favorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const addFav = async (character) => {
    try {
      await axios.post('http://localhost:3001/rickandmorty/favorites', character);
      setFavoriteCharacters((prevFavorites) => [...prevFavorites, character]);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const removeFav = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`);
      setFavoriteCharacters((prevFavorites) =>
        prevFavorites.filter((character) => character.id !== id)
      );
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <div className={style.container}>
      {characters?.map((character) => {
        const isFavorite = favoriteCharacters.some((fav) => fav.id === character.id);
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            status={character.status}
            image={character.image}
            onClose={onClose}
            addFav={addFav}
            removeFav={removeFav}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
}
