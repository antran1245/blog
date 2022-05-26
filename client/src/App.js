import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavComp from './components/NavComp';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import {Wrapper} from './components/context/WrapperContext';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({_id: null, username: null})
  return (
    <Wrapper.Provider value={user}>
      <BrowserRouter>
        <div className='App'>
          <Container fluid className='px-0'>
            <NavComp />
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
