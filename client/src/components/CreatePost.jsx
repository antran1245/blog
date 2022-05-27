import { useContext, useEffect, useState } from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './context/WrapperContext';

export default function CreatePost() {
    const [form, setForm] = useState({_id: null, content: null});
    const {user} = useContext(Wrapper); 
    const navigate = useNavigate();

    useEffect(() => {
        setForm({...form, _id: user._id})
    }, [])

    const handlePost = async(e) => {
        e.preventDefault();
        let post = await axios.post('http://localhost:8000/api/posts/new', form);
        console.log(post)
        navigate('/dashboard')
    }
    return(
        <Row className='mt-2'>
            <Col xs={12} sm={{span: 8, offset: 2}} className="post-form">
                <Form className='p-3' onSubmit={handlePost}>
                    <p className='title'>Create A Post</p>
                    <Form.Group>
                        <Form.Label>Enter your quote</Form.Label>
                        <Form.Control as={'textarea'} rows={5} name="content"  onChange={(e) => setForm({...form, content: e.target.value})}/>
                    </Form.Group>
                    <Form.Group>
                        <Button className='w-100' type='submit'>Post</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}