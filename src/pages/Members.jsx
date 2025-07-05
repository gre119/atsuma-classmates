import React from 'react';
import { membersData } from '../data/members';

const Members = () => {
  return (
    <div>
      <h2>メンバー紹介</h2>
      <div className="row">
        {membersData.map(member => (
          <div key={member.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.nickname}</h6>
                <p className="card-text">{member.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
