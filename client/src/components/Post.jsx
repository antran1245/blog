import { Col, Row } from 'react-bootstrap';
import '../sass/style.scss';

export default function Post(props) {
    const {title, content, comments, created_at} = props.posting;
    return(
        <Row className='mt-2'>
            <Col xs={12} sm={{span: 8, offset: 3}} className="posting">
                <div className="post">
                    <p className='post-title'>
                        {title}
                    </p>
                    <p className='post-content'>
                        {content}
                    </p>
                </div>
                <div className='comment mt-2'>
                    <h5>Comments</h5>
                    {comments.map((comment, i) => {
                        return <p key={i}>{comment.content}</p>
                    })}
                </div>
            </Col>
        </Row>
    );
}