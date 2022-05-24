import { useEffect, useState } from "react";
import axios from 'axios';
import Post from "./Post";

export default function Dashboard() {
    const [postListing, setPostListing]= useState([])

    useEffect(() => {
        const handleAxios = async() => {
            const resp = await axios.get('http://localhost:8000/api/posts')
            console.log(resp.data)
            setPostListing(resp.data)
        }
        handleAxios()
    }, [])
    return(
        <div>
            <Post/>
        </div>
    );
}