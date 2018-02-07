import React, { Component } from "react";
import { Comment } from "./Comment.js";

export default class CommentList extends Component {
  render () {
    return (
      <div>
        <ul>
          {
            this.props.comments.map((comment, i) => {
              <Comment comment={comment} key={i} />
            })
          }
        </ul>
      </div>
    );
  }
}