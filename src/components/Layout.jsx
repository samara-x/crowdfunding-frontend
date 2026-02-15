import { Outlet, Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <footer className="home-footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <br></br>

        <li>
          FundingFour is built for real people helping real causes — one small
          group at a time.
        </li>
        <li>
          © 2026 Created by Samara Downey. All rights reserved.
        </li>
      </footer>
    </>
  );
}