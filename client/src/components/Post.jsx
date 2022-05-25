import { Row } from 'react-bootstrap';
import '../sass/style.scss';

export default function Post(props) {
    const {title, content, comments, created_at} = props.posting;
    return(
        <Row className='mt-2 posting'>
            <div className="post">
                <h2>
                    {title}
                </h2>
                <p>
                    {content}
                </p>
            </div>
            <div className='comment mt-2'>
                <h4>Comments</h4>
                {comments.map((comment, i) => {
                    return <p key={i}>{comment.content}</p>
                })}
            </div>
        </Row>
    );
}