import { Link, Outlet } from 'react-router-dom';

function NavBar() {
return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <li>
            <Link to="/fundraiser">Fundraiser</Link>
            </li>
        </nav>
        <Outlet />
    </div>
    );
}

export default NavBar;