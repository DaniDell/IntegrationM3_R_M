import SearchBar from "../Search/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { onSearch, setAccess } = props;

  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className={style.container}>

      <div className={style.searchBar1}> 
      <SearchBar onSearch={onSearch} />
      </div>

<div className={style.btnX4}>
      <Link to="/home" >
        <button className={style.btn}>Home</button>
      </Link>

      <Link to="/favorites" >
        <button className={style.btn}>My favorites</button>
      </Link>

      <Link to="/about" >
        <button className={style.btn}>About the autor</button>
      </Link>
      
      <button onClick={handleLogOut} className={style.btn}>LOG OUT the game</button>
      </div>
    </div>
  );
};

export default Nav;
