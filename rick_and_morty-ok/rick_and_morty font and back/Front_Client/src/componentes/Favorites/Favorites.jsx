import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, filterCards2, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites.module.css";

const Favorites = ({ myFavorites }) => {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setFilter1("");
    setFilter2("");
  };

  const handleFilter = (e) => {
    setFilter1(e.target.value);
    dispatch(filterCards(e.target.value));
    setFilter2("");
  };

  const handleFilter2 = (e) => {
    setFilter2(e.target.value);
    dispatch(filterCards2(e.target.value));
    setFilter1("");
  };

  const handleCardClose = () => {
    alert("To discard this card, tap on the 🤍 or return to the home page to use the X button");
  };

  return (
    <>
      <div className={style.Container}>
        <h1 className={style.title}>Filter by</h1>

        <div className={style.selectContainer}>
          <select className={style.title2} onChange={handleOrder} value="">
            <option value="">Id</option>
            <option value="A">🔻</option>
            <option value="D">🔺</option>
          </select>

          <select className={style.title2} value={filter1} onChange={handleFilter}>
            <option value="">All gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>

          <select className={style.title2} value={filter2} onChange={handleFilter2}>
            <option value="">All species</option>
            <option value="Alien">Alien</option>
            <option value="Human">Human</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Robot">Robot</option>
            <option value="Animal">Animal</option>
          </select>
        </div>
      </div>

      <div className={style["card-container"]}>
        {myFavorites?.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            status={character.status}
            image={character.image}
            onClose={handleCardClose}
          />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
