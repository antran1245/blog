import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavComp from './components/NavComp';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import CreatePost from './components/CreatePost';
import {Wrapper} from './components/context/WrapperContext';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Quote from './components/Quote';

function App() {
  const [user, setUser] = useState({_id: null, username: null})
  
  useEffect(() => {
    const handleAxios = async() => {
      let resp = await axios.get('http://localhost:8000/api/users', {'withCredentials': true})
      if(resp.data.message === "ok") {
        setUser(resp.data.user)
      }
    }
    handleAxios()
  }, [])
  return (
    <Wrapper.Provider value={{user, setUser}}>
      <BrowserRouter>
        <div className='App'>
          <Container fluid className='px-0'>
            <NavComp />
            <Quote />
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/account" element={<Account />} />
              <Route path="" element={<Navigate to="/dashboard"/>} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </Wrapper.Provider>
  );
}

export default App;
