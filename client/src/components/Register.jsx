import { Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './context/WrapperContext';

const initialState = {username: null, password: null, confirm: null, email: null};
export default function Register() {
    const [form, setForm] = useState(initialState)
    const [error, setError] = useState(initialState)
    const {setUser} = useContext(Wrapper);
    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8000/api/users/new', form)
            if(resp.status === 200) {
                navigate('/dashboard')
                setUser({_id: resp.data._id, username: resp.data.username})
            }
        } catch  (err) {
            console.log(err)
        }
    }
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        switch (name) {
            case 'username':
                if(value.length < 3) {
                    setError({...error, [name]: "Username required at least 3 characters"})
                } else {
                    setError({...error, [name]: null})
                }
                break;
            case 'password':
                if(value === "" && value.length < 3) {
                    setError({...error, [name]: "Required password with a length greater than 3"})
                } else {
                    setError({...error, [name]: null})
                }
                break;
            case 'confirm':
                if(value !== form.password) {
                    setError({...error, [name]: "Password does not match"})
                } else {
                    setError({...error, [name]: null})
                }
                break;
        }
        setForm({...form, [name]: value})
    }
    return(
        <Col xs={12} sm={{span:4}}>
            <div className='account'>
                <p className='title'>Sign Up</p>
                {/* {error.username && <p>Error {error.username}</p>} */}
                <Form onSubmit={handleRegister}>
                    <Form.Group>
                        <Form.Label htmlFor="username">Username:</Form.Label>
                        <Form.Control type={"text"} name="username" autoComplete="off" onChange={(e) => handleInput(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='password'>Password:</Form.Label>
                        <Form.Control type={"password"} name="password" onChange={(e) => handleInput(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='confirm'>Confirm Password:</Form.Label>
                        <Form.Control type={"password"} name="confirm" onChange={(e) => handleInput(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='email'>Email:</Form.Label>
                        <Form.Control type={'email'} name='email' autoComplete='off' onChange={(e) => handleInput(e)}/>
                    </Form.Group>
                    <Button type='submit' className='w-100 mt-3'>Register</Button>
                </Form>
            </div>
        </Col>
    );
}