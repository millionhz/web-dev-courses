import React from 'react';

function Comment(props) {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a className="author" href="/">
            {props.author}
          </a>
          <div className="metadata">
            <div className="date">{props.daysAgo} days ago</div>
          </div>
          <div className="text">{props.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
