import React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error("Lỗi API:", err));
    }, []);

    return (
        <div className="home-wrapper">
            <h1>Home</h1>
            <h3>Kết nối API</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
