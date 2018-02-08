import React, { Component } from "react";
import PropTypes from "prop-types";
import "./comment.css";

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
  constructor (props) {
    super(props);
    this.state = {
      createTime: ""
    }
  }
  componentWillMount () {
    this._updateTime();
    this._timer = setInterval(
      this._updateTime.bind(this),
      5000
    )
  }
  componentWillUnmount () {
    clearInterval(this._timer);
  }
  _updateTime (){
    const duration = (+Date.now() - this.props.comment.createTime) / 1000;
    this.setState({
      createTime: duration > 60? `${Math.round(duration / 60)}分钟前`: `${Math.round(Math.max(duration, 1))}秒前`
    });
  }
  handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }
  render () {
    return (
      <li className="comment"> 
        <div>
          <span>{this.props.comment.username} :</span>
          <div>{this.props.comment.content}</div>
        </div>
        <div>
          <a href="javascript:void(0)" onClick={this.handleDeleteComment.bind(this)}>删除</a>
          <span>{this.state.createTime}</span>
        </div>
      </li>
    );
  } 
}