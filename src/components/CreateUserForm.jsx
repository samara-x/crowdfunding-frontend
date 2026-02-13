import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postCreateUser from "../api/post-create-user.js";
import "./CreateUserForm.css";

function CreateUserForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting create user form with:", formData);

    setError("");
    setSuccess("");
    setIsLoading(true);

    // Client-side validation
    if (!formData.username.trim()) {
      setError("Username is required");
      setIsLoading(false);
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      setIsLoading(false);
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    try {
      // Call API with individual fields (adjust if your API expects object)
      await postCreateUser(
        formData.username.trim(),
        formData.email.trim(),
        formData.password
      );

      setSuccess("Account created! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 1800);

    } catch (err) {
      console.error("Create user failed:", err);
      setError(
        err.message ||
          "Oops! Account creation failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-user-form-container">
      <div className="create-user-card">
        <h1>Create Your Account</h1>
        <p>What are you FundingFour? Sign up to post your own ideas and join the community.</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="create-user-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              required
              autoFocus
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="At least 8 characters"
              value={formData.password}
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
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{" "}
            <a href="/login" className="link">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateUserForm;