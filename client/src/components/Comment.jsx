import { useContext, useEffect, useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
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
                <Form.Group>
                    <Form.Label>Enter your comment:</Form.Label>
                    <Form.Control as={'textarea'} name="content" onChange={(e) => setContent(e.target.value)}/>
                </Form.Group>
                <Form.Group className='mt-1 d-flex justify-content-end'>
                    <Button className='w-50' type='submit'>Submit</Button>
                </Form.Group>
            </Form>
            {comments.map((comment, i) => {
                return <p key={i}>{comment.content}</p>
            })}
        </div>
    );
}