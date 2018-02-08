import React, { Component } from "react";
import CommentInput from "./CommentInput.js";
import CommentList from "./CommentList.js";
import "./commentApp.css";
const layer = window.layer;

export default class CommentApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  handleSubmitComment (comment) {
    if (!comment) {
      return layer.msg("请输入！", {shift: 6});
    } else if (!comment.username) {
      return layer.msg("请输入用户名！", {shift: 6});
    } else if (!comment.content) {
      return layer.msg("请输入内容！", {shift: 6});
    } else {
      this.state.comments.push(comment);
      this.setState({
        comments: this.state.comments
      });
    }
  }
  render () {
    return (
      <div className="contanier">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}