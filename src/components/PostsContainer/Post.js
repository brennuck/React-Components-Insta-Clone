// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.parentData.likes)
  const liked = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props.parentData.username}
        thumbnailUrl={
          props.parentData.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.parentData.imageUrl}
        />
      </div>
      <LikeSection
        likes = {likes}
        liked = {liked}
      />
      <CommentSection
        postId={props.parentData.imageUrl}
        comments={props.parentData.comments}
      />
    </div>
  );
};

export default Post;
