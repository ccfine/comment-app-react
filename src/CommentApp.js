import React, { Component } from "react";
import CommentInput from "./CommentInput.js";
import CommentList from "./CommentList.js";
import "./commentApp.css";

export default class CommentApp extends Component {
  handleSubmitComment (comment) {
    console.log(comment);
  }
  render () {
    return (
      <div className="contanier">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList />
      </div>
    );
  }
}