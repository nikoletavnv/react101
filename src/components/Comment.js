import React from "react";

// const Comment = ({ text }) => {
//   return <section className="Comment">{text}</section>;
// };

class Comment extends React.Component {
  render() {
    return <section className="Comment">{this.props.text}</section>;
  }
}

export default Comment;
