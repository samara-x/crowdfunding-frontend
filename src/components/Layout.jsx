import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <footer>
                <p>&copy; 2026 Funding4Crowds. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;