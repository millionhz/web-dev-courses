import React from 'react';

function ApprovalCard(props) {
  return (
    <div className="ui card" style={{ margin: '20px' }}>
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button className="ui green button">Accept</button>
          <button className="ui red button">Reject</button>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
