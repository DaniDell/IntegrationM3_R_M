import Card from "../Card/Card";
import style from './Cards.module.css';
import React, { useState } from 'react';

export default function Cards(props) {
  const { characters, onClose } = props;
  console.log(characters);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const addFav = (character) => {
    setFavoriteCharacters((prevFavorites) => [...prevFavorites, character]);
  };

  const removeFav = (id) => {
    setFavoriteCharacters((prevFavorites) =>
      prevFavorites.filter((character) => character.id !== id)
    );
  };

  return (
    <div className={style.container}>
      {characters?.map((character) => {
        const isFavorite = favoriteCharacters.some((fav) => fav.id === character.id);
          return (
            <Card
              key={character.id}
              id= {character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              origin = {character.origin.name}
              status ={character.status}
              image={character.image}
              onClose={onClose}
              addFav={addFav}
              removeFav={removeFav}
              isFavorite={isFavorite}
            />
          );
        })
      }
    </div>
  );
}
