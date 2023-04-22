import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const links = [
    { name: 'Books', path: '/' },
    { name: 'Categories', path: 'categories' },
  ];
  return (
    <nav className="navbar">
      <h2>BOOKSTORE CMS</h2>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}><NavLink to={link.path}>{link.name}</NavLink></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
