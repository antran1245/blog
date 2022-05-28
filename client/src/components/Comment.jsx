import { useContext, useEffect, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { Wrapper } from './context/WrapperContext';

export default function Comment(props) {
    const [comments, setComments] = useState(props.comments);
    const id = props.id;
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(null)
    const {user} = useContext(Wrapper);

    const showForm = () => { 
        setShow(!show);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(user._id) {
            let comment = await axios.post('http://localhost:8000/api/comments/post', {content, id})
            console.log(comment)
            setComments([...comments, comment.data])
            e.target.reset();
            setShow(false)
        }else {
            alert('Required log in')
        }
    }

    return(
        <div className='comment mt-2'>
            <h5 className="d-flex justify-content-between">Comments 
                <Button onClick={showForm}>Add Comment</Button></h5>
            <Form className='mb-2' style={{display: show?'block':'none'}} onSubmit={handleSubmit}>
                <Form.Group as={Row}>
                    <Col xs={12} sm={9}>
                        <Form.Control as={'textarea'} name="content" onChange={(e) => setContent(e.target.value)}/>
                    </Col>
                    <Col xs={12} sm={3}>
                        <Button className='w-100 h-100' type='submit'>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
            {comments.map((comment, i) => {
                return <p key={i}>{comment.content}</p>
            })}
        </div>
    );
}