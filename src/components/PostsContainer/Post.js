// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post2.likes)

  const liked = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props.post2.username}
        thumbnailUrl={
          props.post2.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post2.imageUrl}
        />
      </div>
      <LikeSection
        liked = {liked}
        likes = {likes}
      />
      <CommentSection
        postId={props.post2.imageUrl}
        comments={props.post2.comments}
      />
    </div>
  );
};

export default Post;
