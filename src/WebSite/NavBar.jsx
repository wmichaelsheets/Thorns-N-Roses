import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className='nav-bar'>
            <li>
                <Link to={'/nurseries'}>Nurseries</Link>
            </li>
            <li>
                <Link to={'/distributors'}>Distributors</Link>
            </li>
            <li>
                <Link to={'/retailers'}>Retailers</Link>
            </li>
        </ul>
    )
}