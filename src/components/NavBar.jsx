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
        <Link to="/HomePage" className="logo">
          <span>funding</span>four 
        </Link>

        {/* Desktop navigation */}
        <div className="nav-links">
          <Link to="/HomePage" className="nav-link">Home</Link>
          <Link to="/AboutPage" className="nav-link">About</Link>
          <Link to="/ContactPage" className="nav-link">Contact</Link>
          <Link to="/fundraiser" className="nav-link">Fundraisers</Link>
          <Link to="/create-fundraiser" className="nav-link">Create</Link>
          {auth.token ? (
              <Link to="/" onClick={handleLogout}>
                        Log Out
                    </Link>
                    ) : (
                    <Link to="/login">Login</Link>
                )}
          
          {/* CTA button */}
          <Link to="/sign-up" className="btn-create">
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