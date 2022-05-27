import { Col, Row } from 'react-bootstrap';
import '../sass/style.scss';
import Comment from './Comment';

export default function Post(props) {
    const {_id, title, content, comments, created_at} = props.posting;
    return(
        <Row className='mt-2'>
            <Col xs={12} sm={{span: 8, offset: 3}} className="posting">
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