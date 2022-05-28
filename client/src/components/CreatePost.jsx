import { useContext, useEffect, useState } from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { PostContext } from './context/PostContext';

export default function CreatePost(props) {
    const [form, setForm] = useState({_id: null, content: null});
    const {user, postListing, setPostListing, show, setShow} = useContext(PostContext); 

    useEffect(() => {
        setForm({...form, _id: user._id})
    }, [])

    const handlePost = async(e) => {
        e.preventDefault();
        if(user._id) {
            let post = await axios.post('http://localhost:8000/api/posts/new', form);
            setPostListing([...postListing, post.data])
            setShow(!show)
        } else {
            alert('Required log in')
        }
        // console.log(post)
    }
    return(
        <Row className='mt-2' style={{display: show? 'block': 'none'}}>
            <Col xs={12} sm={{span: 7, offset: 4}} className="post-form">
                <Form className='p-3' onSubmit={handlePost}>
                    <Form.Group as={Row}>
                        <Col xs={12} sm={10}>
                            <Form.Control as={'textarea'} rows={2} name="content"  onChange={(e) => setForm({...form, content: e.target.value})}/>
                        </Col>
                        <Col>
                            <Button className='w-100 h-100' type='submit'>Post</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}