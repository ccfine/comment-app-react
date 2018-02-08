import React, { Component } from "react";
import "./commentInput.css";

export default class CommentInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      content: "",
    };
  }
  componentWillMount () {
    this._loadUsername();
  }
  componentDidMount () {
    this.refs.content.focus();    
  }
  _saveUsername (username) {
    localStorage.setItem("username", username);
  }
  _loadUsername () {
    const username = localStorage.getItem("username");
    if (username) {
      this.setState({
        username: username
      });
    }
  }
  _submitComment () {
    if (this.props.onSubmit) {
      this.props.onSubmit({username: this.state.username, content: this.state.content, createTime: +new Date()});
    }
    this.setState({
      content: ""
    });
  }
  handleChangeUsername (e) {
    this.setState({
      username: e.target.value
    });
  }
  handleBlurUsername (e) {
    this._saveUsername(e.target.value);
  }
  handleChangeContent (e) {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit () {
    this._submitComment();
  }
  handleKeydownSubmit (e) {
    if (e.which === 13 && e.ctrlKey) {
      this._submitComment();
    }
  }
  render () {
    return (
      <div className="input-area">
        <div>
          <label>用户名：</label>
          <input type="text" placeholder="请输入用户名" className="username" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} onBlur={this.handleBlurUsername.bind(this)} />
        </div>
        <div>
          <label className="label-content">评论内容：</label>
          <textarea rows="10" cols="62" placeholder="请输入内容" className="content" ref="content" value={this.state.content} onChange={this.handleChangeContent.bind(this)} onKeyDown={this.handleKeydownSubmit.bind(this)}></textarea>
        </div>
        <div>
          <button className="btn fr" onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}