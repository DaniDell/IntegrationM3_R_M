import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import style from './Detail.module.css';

const Detail = () => {
    const [character, setCharacter] = useState({})
    // console.log('soy el character detail', character);
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <>
        <h1 className={style.title}>CHARACTER DETAILS:</h1>
        {
            character ? (
                <div className={style.detail}>
                    
                    <div className={style.titleT}>
                    <h2 >Name: {character.name}</h2>
                    <h2 className={style.title}>Status: {character.status}</h2>
                    <h2 className={style.title}>Species: {character.species}</h2>
                    <h2 className={style.title}>Gender: {character.gender}</h2>
                    <h2 className={style.title}>Origin: {character.origin?.name}</h2>
                    </div>
                    <img className={style.imgD} src={character.image} alt={character.name} />
                </div>
            )
             :  (
                ""
             )
        }
        </>
    )
}

export default Detail;