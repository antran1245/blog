import { useEffect, useState } from "react";
import axios from 'axios';
import Post from "./Post";
import { Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";

export default function Dashboard() {
    const [postListing, setPostListing]= useState(null)

    useEffect(() => {
        const handleAxios = async() => {
            const resp = await axios.get('http://localhost:8000/api/posts')
            // console.log(resp.data)
            setPostListing(resp.data)
        }
        handleAxios()
    }, [])

    return(
        <Row className="px-sm-4 px-0">
            <Col xs={12} sm={10}>
                {postListing &&
                    postListing.map((post, i) => 
                        <Post key={i} posting={post}/>
                    )
                }
            </Col>
            <UserInfo />
        </Row>
    );
}