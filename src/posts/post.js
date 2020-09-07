import React, {Component} from "react";
import LikesCounter from "../likes/likesCounter";
const Post = ({content, author, createdAt, likesCount = 0, comment}) => (
    <div className="post-wrapper">
        <div className="post-author">{author}</div>
        <div className="post-content">
            {content}
        </div>
        <LikesCounter count={likesCount} />
    </div>
)
export default Post;