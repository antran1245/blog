import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import Post from "./Post";
import { Row, Col, Button } from "react-bootstrap";
import UserInfo from "./UserInfo";
import CreatePost from './CreatePost';
import { PostContext } from "./context/PostContext";
import { Wrapper } from "./context/WrapperContext";

export default function Dashboard() {
    const [postListing, setPostListing]= useState(null)
    const [show, setShow] = useState(false);
    const {user} = useContext(Wrapper);

    useEffect(() => {
        const handleAxios = async() => {
            const resp = await axios.get('http://localhost:8000/api/posts')
            setPostListing(resp.data)
        }
        handleAxios()
    }, [])

    return(
        <PostContext.Provider value={{user, postListing, setPostListing, show, setShow}}>
            <Row>
                <Col xs={12} sm={10}>
                    <Row>
                        <Col xs={12} sm={{span: 11}} className="d-flex justify-content-end mt-2">
                            <Button onClick={() => setShow(!show)}>Submit a Quote</Button>
                        </Col>
                    </Row>
                    <CreatePost/>
                    {postListing &&
                        postListing.map((post, i) => 
                            <Post key={i} posting={post}/>
                        )
                    }
                </Col>
                <UserInfo />
            </Row>
        </PostContext.Provider>
    );
}