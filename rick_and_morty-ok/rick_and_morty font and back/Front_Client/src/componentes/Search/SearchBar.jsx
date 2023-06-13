import style from './SearchBar.module.css';
import imageLogo from '../../image/logoNav.png';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function SearchBar(props) {
   let [ id, setId ] = useState('');

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
         setId('');
      }}

   const handleChange = (event) => {
      setId(event.target.value)}

   return (
      <div className={style.containerSearch}>
                  
         <div className={style.containerInput}>
         <Link to="/home" >     

         <input 
            type='search' 
            placeholder="Search by id number..." 
            className={style.input}
            onKeyUp={handleEnter}
            onChange={handleChange}
            value = {id}
         />
         <button 
            onClick={()=> props.onSearch(id)} 
            className={style.btnLook}
         > <h1 className={style.look}>🔎</h1>
         </button>
         
         </Link>
         </div>

         <a href="https://github.com/DaniDell/Integration_R_M" target="code repo" rel="noopener noreferrer">
      <img
        src={imageLogo}
        alt="logo rick and morty"
        className={style.logo}
      />
      <span  className={style.link}> View the code at GitHub</span>
    </a>

 </div>
   );
}
