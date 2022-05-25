import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavComp from './components/NavComp';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import './App.css';

function App() {

  return (
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
  );
}

export default App;
