import React from "react";
import ReactDOM from "react-dom";
import CommentApp from "./CommentApp.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CommentApp />,
  document.getElementById("root")
);
registerServiceWorker();