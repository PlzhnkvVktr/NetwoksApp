import React, { useState } from "react";
import style from './Comments.module.css';




const Post = (props) => {

    return(
        
        <div className={style.comment}>
            <p className={style.commentItem}><img src={props.img} alt="" align="middle" />
            {props.title}</p>
        </div>
    
    )
}


export default Post