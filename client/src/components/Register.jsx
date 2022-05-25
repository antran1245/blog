import {Col, Form} from 'react-bootstrap';

export default function Register() {
    return(
        <Col sm={6}>
            <div className='account'>
                <p>Sign Up</p>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control type={"text"} name="username" autoComplete="off"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type={"password"} name="password"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='confirm'>Password</Form.Label>
                        <Form.Control type={"password"} name="confirm"/>
                    </Form.Group>
                </Form>
            </div>
        </Col>
    );
}