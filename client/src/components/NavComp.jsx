import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../sass/style.scss';

export default function NavComp() {
    return(
        <Navbar expand="sm" className='navbar' variant='dark'>
            <Container fluid>
                <Link to={'/dashboard'} className='justify-conent-start link'>BLOG</Link>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Navbar.Collapse id='navbar-nav'  className="justify-content-md-end">
                    <Nav>
                        <Link to="/account" className='link'>Login/Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}