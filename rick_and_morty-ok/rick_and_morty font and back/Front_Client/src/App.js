import './App.css';
import Cards from './componentes/Cards/Cards';
import Nav from './componentes/Nav/Nav';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './componentes/Detail/Detail';
import About from './componentes/About/About';
import Form from './componentes/Form/Form';
import Favorites from './componentes/Favorites/Favorites';

function App() {
  let [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error not found');
        }
      })
      .then((data) => {
        if (data.id !== undefined) {
          const char = characters?.find((e) => e.id === data.id);
          if (char) {
            alert(`Character ${id} is already in the list`);
          } else {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          alert('Error not found');
        }
      })
      .catch(() => {
        alert('Character not found');
      });
  }

  // const login = async (userData) => {
  //   try {
  //     const URL = 'http://localhost:3001/login/';
  //     const { email, password } = userData;

  //     const params = new URLSearchParams({
  //       email: email,
  //       password: password
  //     }).toString();

  //     const response = await fetch(`${URL}?${params}`);
  //     const data = await response.json();

  //     const { access } = data;
  //     console.log(access, userData, data);
  //     setAccess(access);

  //     if (access === false) {
  //       alert('Username and password are not registered');
  //     } else {
  //       access && navigate('/home');
  //     }
  //   } catch (error) {
  //     alert('Problemas de integración');
  //   }
  // };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const hardcodedEmail = 'ddacqua@gmail.com';
      const hardcodedPassword = '1234dani';
  
      if (email === hardcodedEmail && password === hardcodedPassword) {
        // Las credenciales son válidas
        setAccess(true);
        navigate('/home');
      } else {
        // Las credenciales no son válidas
        setAccess(false);
        alert('Username and password are not registered');
      }
    } catch (error) {
      alert('Problems with integration');
    }
  };
  
  
  
  
  
  

  const onClose = (id) => {
    setCharacters(characters.filter((character) => Number(character.id) !== Number(id)));
  };

  return (
    <div className='container'>
      {pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
