import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Menu.scss';

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link to='/users'>Users</Link>
      </li>
      <li>
        <Link to='/tareas'>Tareas</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
