import React, { useState } from "react";

const CreateComment = (props) => {
  const [text, setText] = useState("");
  return (
    <div className="CreateComment">
      <textarea
        className="CreateComment-text"
        rows="5"
        cols="30"
        placeholder="Enter your comment here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="secondary"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          props.hideForm();
          setText("");
        }}
      >
        Cancel
      </button>
      <button
        className="primary"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          props.submitComment(text);
          setText("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CreateComment;
