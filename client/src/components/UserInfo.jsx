import { useContext } from 'react';
import {Col} from 'react-bootstrap';
import '../sass/style.scss';
import { Wrapper } from './context/WrapperContext';

export default function UserInfo() {
    const {user} = useContext(Wrapper);

    return(
        <>
        {user._id &&
            <Col xs={12} sm={2} className="user-info mt-2">
                <div>
                    <p>Username: {user.username}</p>
                </div>
            </Col>
        }
        </>
    );
}