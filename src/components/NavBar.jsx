// NavBar.jsx
import { Link } from "react-router-dom";
import "./NavBar.css";    
import useAuth from "../hooks/use-auth.js";    

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <span>funding</span>four 
        </Link>

        {/* Desktop navigation */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          {auth.token ? (
              <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                    ) : (
                    <Link to="/login">Login</Link>
                )}
          
          {/* CTA button */}
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