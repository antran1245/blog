import { Col, Row, Button } from 'react-bootstrap';
import '../sass/style.scss';
import Comment from './Comment';
import { useState } from 'react';

export default function Post(props) {
    const {_id, title, content, comments, created_at} = props.posting;

    return(
        <Row className='mt-2'>
            <Col xs={12} sm={{span: 7, offset: 4}} className="posting">
                <div className="post">
                    <p className='post-content'>
                        <em>"{content}"</em>
                    </p>
                </div>
                <Comment comments={comments} id={_id}/>
            </Col>
        </Row>
    );
}