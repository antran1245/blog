import {Row} from 'react-bootstrap';
import Login from './Login';
import Register from './Register';

export default function Account() {
    return(
        <Row>
            <Login />
            <Register />
        </Row>
    );
}