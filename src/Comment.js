import React from "react";
import "./comment.css";

export const Comment = (props) => {
  return (
    <li className="comment"> 
      <div>
        <span>{props.comment.username} :</span>
        <div>{props.comment.content}</div>
      </div>
    </li>
  );
};