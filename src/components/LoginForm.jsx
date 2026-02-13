import { useState } from "react";
import postLogin from "../api/post-login.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError(""); // clear error when typing
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting login form with:", credentials);

    setError("");
    setIsLoading(true);

    if (!credentials.username ?? !credentials.password) {
      setError("Please fill in both fields");
      setIsLoading(false);
      return;
    }

    postLogin(credentials.username, credentials.password)
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        setAuth({ token: data.token });
        navigate("/");
        console.log("Login successful:", data);
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError(
          error.message ||
            "Oops! Login failed. Please check your username and password."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
  <div className="login-container">
    <div className="login-card">
      <h1 className="login-title">Welcome back</h1>
      <p className="login-subtitle">Sign in to continue finding your people</p>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={credentials.username}
            onChange={handleChange}
            className="form-input"
            required
            autoFocus
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
            className="form-input"
            required
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className="btn-submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <div className="login-footer">
        <p>
          New here? <a href="/sign-up">Create an account</a>
        </p>
      </div>
    </div>
  </div>
);
}

export default LoginForm;