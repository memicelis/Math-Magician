import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.module.css';

const Navigation = () => (
  <>
    <nav>
      <h1>Math Magician</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calc">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
