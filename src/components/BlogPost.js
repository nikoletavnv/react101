import React, { useState } from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

const renderComments = (comments) => {
  if (!comments || !Array.isArray(comments) || comments.length === 0)
    return <div>No comments yet</div>;

  return (
    //<>
    [
      <div className="BlogPost-comments">{comments.length} comments</div>,
      comments.map((comment, index) => <Comment text={comment} key={index} />)
    ]
    //</>
  );
};

const renderCreateComment = (
  showCommentForm,
  toggleCommentForm,
  setComments,
  comments
) => {
  if (!showCommentForm)
    return (
      <div className="BlogPost-add" onClick={() => toggleCommentForm(true)}>
        Add comment
      </div>
    );
  return (
    <CreateComment
      submitComment={(text) => setComments([...comments, text])}
      hideForm={() => toggleCommentForm(false)}
    />
  );
};

const BlogPost = (props) => {
  const [comments, setComments] = useState(props.comments);
  const [showCommentForm, setShowCommentForm] = useState(false);

  return (
    <article className="BlogPost">
      <h3 className="BlogPost-header">{props.text}</h3>
      {renderComments(comments)}
      {renderCreateComment(
        showCommentForm,
        setShowCommentForm,
        setComments,
        comments
      )}
    </article>
  );
};

export default BlogPost;
