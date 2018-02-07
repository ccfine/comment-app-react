import React, { Component } from "react";
import "./commentInput.css";
const layer = window.layer;

export default class CommentInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      content: ""
    };
  }
  componentDidMount () {
    this.refs.username.focus();
  }
  handleChangeUsername (e) {
    this.setState({
      username: e.target.value
    });
  }
  handleChangeContent (e) {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit () {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({username, content});
    }
    this.setState({
      content: ""
    });
  }
  render () {
    return (
      <div className="input-area">
        <div>
          <label>用户名：</label>
          <input type="text" placeholder="请输入用户名" className="username" ref="username" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
        </div>
        <div>
          <label className="label-content">评论内容：</label>
          <textarea rows="10" cols="62" placeholder="请输入内容" className="content" value={this.state.content} onChange={this.handleChangeContent.bind(this)}></textarea>
        </div>
        <div>
          <button className="btn fr" onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}