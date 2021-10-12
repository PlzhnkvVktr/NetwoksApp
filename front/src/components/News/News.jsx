import React, { useState, useEffect } from "react";
import style from './News.module.css';
import Post from "./Post/Post";

const News = () => {


    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const getPosts = async() => {
            try {
                const response = await fetch("http://localhost:3000/posts");
                const result = await response.json();
                setPosts(result);
            } catch (error) {
                console.log(error);
            }
        }
        
        getPosts();
      }, []);

    
    

    let postsElements = posts.map((p, idx) => <Post key={idx} img={p.img} title={p.title} />);


    return (
        <main className={style.mainNews}>
            <h1 className={style.title}>Последние новости в мире IT</h1>
            <div className={style.news}>
               {postsElements}
            </div> 
        </main>
    )
}

export default News;