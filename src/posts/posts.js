import React, {Component, useEffect, useState} from "react";
import Post from "./post";
import "./posts.css";
import Comment from "./comment";

const Posts = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [count, setCount] = useState(10);
    const [comment, setComment] = useState('Напишите свой комметнарий...');
    useEffect(() => { // didMount, после рендера
        const interval = setInterval(() => setCount(count + 1), 1000);
        return () => {
            // willUnmount, перед удалением
            clearInterval(interval);
        }
    });
    return (
        <>
            <button onClick={() => setIsHidden(!isHidden)}>
                {isHidden ? "Show" : "Hide"} post
            </button>
            {!isHidden &&
                <Post author="Anton Koniushii"
                      likesCount={count}
                      createdAt="2020-09-07 12:44:55"
                      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eos illo omnis quam quibusdam quis quod. Accusamus adipisci aperiam ea eius incidunt laudantium, quibusdam? Perspiciatis, porro, vel. Architecto illo, optio."
                />
            }
            <Comment content={comment} onBlur={setComment}/>
            <button onClick={() => setComment('Отправлен!')}>
                Send
            </button>
        </>
    )
}

export default Posts;