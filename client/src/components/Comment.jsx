import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function Comment(props) {
    const [comments, setComments] = useState(props.comments);
    const id = props.id;
    const [show, setShow] = useState(false);
    const [content, setContent] = useState(null)
    const showForm = () => { 
        setShow(!show);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/comments/post', {content, id})
        setComments([...comments, {content: content, _id: id}])
        e.target.reset();
        setShow(false)
    }
    return(
        <div className='comment mt-2'>
            <h5>Comments <Button onClick={showForm}>Add Comment</Button></h5>
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