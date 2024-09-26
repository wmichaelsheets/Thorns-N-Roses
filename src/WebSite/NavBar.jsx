import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = ({ cartCount }) => {
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar">
        <li>
          <Link to={'/nurseries'}>Nurseries</Link>
        </li>
        <li>
          <Link to={'/distributors'}>Distributors</Link>
        </li>
        <li>
          <Link to={'/retailers'}>Retailers</Link>
        </li>
        <li>
          <Link to={'/cart'}>My Cart({cartCount})</Link>
        </li>
      </ul>
    </div>
  );
};
