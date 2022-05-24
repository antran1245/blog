import {Navbar, Nav, Container} from 'react-bootstrap';
import '../sass/style.scss';

export default function NavComp() {
    return(
        <Navbar expand="lg" className='navbar' variant='dark'>
            <Container>
                <Navbar.Brand href='/dashboard' className='justify-conent-start'><h1>BLOG</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Navbar.Collapse id='navbar-nav'  className="justify-content-md-end">
                    <Nav>
                        <Nav.Link><p>Login</p></Nav.Link>
                        <Nav.Link><p>Sign Up</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}