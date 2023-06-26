import './App.css'
import Cards from './componentes/Cards/Cards';
import Nav from './componentes/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './componentes/Detail/Detail';
import About from './componentes/About/About';
import Form from './componentes/Form/Form';
import Favorites from './componentes/Favorites/Favorites';



function App () {
  let [ characters, setCharacters ] = useState([])

  const [ access, setAccess] = useState(false);
  // const EMAIL = 'ddacqua@gmail.com';
  // const PASSWORD = "1234dani"

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(()=> {  !access && navigate('/')}, [access, navigate])


  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.id !== undefined) {
          const char = characters?.find(e => e.id === data.id)
          if (char) {
            alert(`Character ${id} is already in the list`)
          } else {
            setCharacters(characters => [...characters, data])
          }
        } else {
          alert('Error not found')
        }
      })
      .catch(() => {
        alert('Character not found');
    
      })
  }
  

// const login = (userData) => {
//   if(userData.password === PASSWORD && userData.email === EMAIL) {
//     setAccess(true)
//     navigate('/home')
//   }
// }
const login = (userData) => {
  const URL = "http://localhost:3001/rickandmorty/login/";
  const { email, password } = userData;
  axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
    const { access } = data;
    console.log(access);
    setAccess(access);
    access && navigate("/home");
  });
};



const onClose = (id) => {
  setCharacters(characters.filter((character) => character.id !== Number(id)))}
  
  return (
    <div className='container'>
        
          { pathname !== '/' && 
            <Nav  onSearch = {onSearch}
             setAccess ={setAccess}
            /> }
        
        <Routes>
          
          <Route path='/'  element= {<Form login= {login} />}/>

          <Route  path="/home" element={<Cards characters= {characters} onClose = {onClose}/> }/>

          <Route  path="/about" element={<About/>}/>

          <Route  path='/detail/:id' element={<Detail/>}/>

          <Route path='/favorites' element={<Favorites/>}/>

        </Routes>
    </div>
  )
}

export default App