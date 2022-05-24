import { useState } from "react";
import Post from "./Post";

export default function Dashboard() {
    const [postListing, setPostListing]= useState([])

    return(
        <div>
            <Post/>
        </div>
    );
}