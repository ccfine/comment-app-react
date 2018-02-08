import React, { Component } from "react";
import { Comment } from "./Comment.js";
import "./commentList.css";

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render () {
    return (
      <div>
        <ul className="comment-list">
          {
            this.props.comments.map((comment, i) => 
              <Comment comment={comment} key={i} />
            )
          }
        </ul>
      </div>
    );
  }
}