import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return(
        <div className={style.newsItem}>
            {}
            <img src={props.img} alt="" />
            <div className={style.new}>
                <a href="">{props.title}</a>
            </div>
        </div>
    )
}


export default Post
