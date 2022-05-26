import { useState } from 'react';
import {Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';

const initialState = {username: null, password: null}
export default function Login() {
    const [form, setForm] = useState(initialState);
    const [error, setError] = useState(initialState);
    
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const resp = await axios.post(`http://localhost:8000/api/users/user`, form)
            console.log(resp.data.message)
        } catch (err) {
            console.log(err)
        }

    }
    return(
        <Col xs={12} sm={{span:4, offset: 2}}>
            <div className='account'>
                <p className='title'>Sign In</p>
                <Form onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control type={"text"} name="username" autoComplete='off' onChange={(e) => setForm({...form, username: e.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control type={"password"} name="password" onChange={(e) => setForm({...form, password: e.target.value})}/>
                    </Form.Group>
                    <Button variant='primary' type='submit' className='w-100 mt-3'>Login</Button>
                </Form>
            </div>
        </Col>
    );
}