import { useContext } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../sass/style.scss';
import { Wrapper } from './context/WrapperContext';
import axios from 'axios';

export default function NavComp() {
    const {user, setUser} = useContext(Wrapper);

    const logout = () => {
        axios.get('http://localhost:8000/api/users/logout');
        setUser({username: null, _id: null})
    }

    return(
        <Navbar expand="sm" className='navbar' variant='dark'>
            <Container fluid>
                <Link to={'/dashboard'} className='justify-conent-start link'>BLOG</Link>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Navbar.Collapse id='navbar-nav'  className="justify-content-md-end">
                    <Nav>
                        <Link to="/create" className='link'>Create A Post</Link>
                    {user.username? 
                        <Link to="/account" className='link' onClick={logout}>Logout</Link>:
                        <Link to="/account" className='link'>Log In/Sign Up</Link>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}