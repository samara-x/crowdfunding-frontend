// src/pages/CreateFundraiser.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postFundraiser from '../api/post-fundraiser';
import './CreateFundraiser.css';

function CreateFundraiser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    goal: '',
    image: 'https://via.placeholder.com/900x400?text=Your+Image+Here',
    is_open: true,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    // Basic validation
    if (!formData.title.trim()) {
      setError('Title is required');
      setIsLoading(false);
      return;
    }
    if (!formData.description.trim()) {
      setError('Description is required');
      setIsLoading(false);
      return;
    }
    const goalNum = Number(formData.goal);
    if (!formData.goal || isNaN(goalNum) || goalNum <= 0) {
      setError('Goal must be a positive number');
      setIsLoading(false);
      return;
    }

    try {
      const dataToSend = {
        ...formData,
        goal: goalNum,
      };

      await postFundraiser(dataToSend);

      setSuccess('Fundraiser created successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Failed to create fundraiser. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-fundraiser-container">
      <div className="create-fundraiser-card">
        <h1 className="create-title">
          <span className="title-line">You don’t need a crowd.</span>
          <span className="title-line title-accent">Just a few good people.</span>
        </h1>

        <p className="create-subtitle">
          From walks to workshops — post it and find your people.
        </p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="create-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Help build the community garden"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell your story — why this matters, what the funds will do..."
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              rows={6}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="goal" className="form-label">
              Funding Goal ($) *
            </label>
            <input
              type="number"
              id="goal"
              name="goal"
              placeholder="e.g. 1500"
              value={formData.goal}
              onChange={handleChange}
              className="form-input"
              min="1"
              step="1"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image" className="form-label">
              Image URL (optional)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              className="form-input"
              disabled={isLoading}
            />
            <small className="help-text">
              Use a direct image link (e.g. from Imgur, Cloudinary). Placeholder used if empty.
            </small>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="is_open"
                checked={formData.is_open}
                onChange={handleChange}
                disabled={isLoading}
              />
              <span>
                By checking this box you agree that your post will be open for others to see & contribute to.
              </span>
            </label>
          </div>

          <button type="submit" className="btn-submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Post!'}
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreateFundraiser;