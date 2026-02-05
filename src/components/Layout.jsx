import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <footer>
                <p>&copy; 2026 Created by Samara Downey. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;