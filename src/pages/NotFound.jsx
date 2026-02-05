import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    
        <div className="not-found-container">
        <div className="not-found-illustration">🙈</div>
      <h1 className="not-found-title">404 Lost in the crowd?</h1>

      <p className="not-found-text">
        This page couldn’t be found... It probably prefers smaller groups anyway.
      </p>

      <Link to="/fundraiser" className="not-found-button">
        Find a gathering that fits
      </Link>
    </div>
  );
}

export default NotFound;
