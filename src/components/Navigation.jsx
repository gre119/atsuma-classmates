import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">トップ</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/members">メンバー紹介</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/photos">思い出の写真館</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/news">お知らせ</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
