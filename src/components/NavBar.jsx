// NavBar.jsx
import { Link } from "react-router-dom";
import "./NavBar.css";        

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo / Brand */}
        <Link to="/" className="logo">
          <span>funding</span>four 
        </Link>

        {/* Desktop navigation */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

          {/* Important CTA button */}
          <Link to="/start" className="btn-create">
            Create
          </Link>
        </div>

        {/* Mobile hamburger (need state + JS to toggle later) */}
        <button className="menu-toggle" type="button">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default NavBar;