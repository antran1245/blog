import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavComp from './components/NavComp';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Container>
          <NavComp />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="" element={<Navigate to="/dashboard"/>} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
