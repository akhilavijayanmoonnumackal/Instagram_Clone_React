import React, { useState } from "react";
import './Timeline.css';
import Suggesstions from "./Suggestions";
import Post from "./posts/Post";

const Timeline = () => {
    const [ posts, setPosts] = useState([
        {
            user: "akhila_",
            postImage: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
            likes: 12,
            timestamp: "2hr",
        },
        {
            user: "shinas",
            postImage: "https://img.freepik.com/free-photo/happy-man-nature_23-2148622675.jpg?w=2000",
            likes: 22,
            timestamp: "3d",
        },
        {
            user: "anu_",
            postImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            likes: 134,
            timestamp: "12d",
        },
        {
            user: "aju_",
            postImage: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_640.jpg",
            likes: 34,
            timestamp: "30min",
        },
    ]);
    return (
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline__posts">
                    {posts.map(post =>(
                        <Post 
                        user={post.user} 
                        postImage={post.postImage} 
                        likes={post.likes} 
                        timestamp={post.timestamp} />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggesstions />
            </div>
        </div>
    )
}

export default Timeline;