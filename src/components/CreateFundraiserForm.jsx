import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postCreateFundraiser from '../api/post-create-fundraiser';
import './CreateFundraiser.css';

function CreateFundraiser() {
  const navigate = useNavigate();

// data from back end
  const [formData, setFormData] = useState({
    title: '',
    // need to add location, but will need to update in back end
    description: '',
    goal: '',
    image: '',
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

    // Client-side validation
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
    // Here we call the API from the date we set above in const
    try {
      const dataToSend = {
        ...formData,
        goal: goalNum,
      };

      await postCreateFundraiser(dataToSend);

      // if the above doesn't work I had also written it out
      // 
    //try {
      // Call API with individual fields
      //await postCreateFundraiser(
        //formData.title.trim(),
        //formData.description.trim(),
        //formData.goal
        // Unsure what to put here.image
        // unsure what to put here.isOpen(true)
      //);

      setSuccess('Post created successfully! While you wait for your crowd, take a look at others you could join..');
      setTimeout(() => {
        navigate('/', { state: { refresh: true }});
      }, 1800); //this delays the load time

    } catch (error) {
      setError(error.message || 'Failed to create fundraiser. Please try again.');
      console.error(error);
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
              placeholder="e.g. Help build a community garden"
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
              placeholder="Tell your story — why this matters, what would you like to do..."
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
              Goal ($) *
            </label>
            <input
              type="number"
              id="goal"
              name="goal"
              placeholder="e.g. 2"
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
              placeholder="public/placeholder.png"
              value={formData.image}
              onChange={handleChange}
              className="form-input"
              disabled={isLoading}
            />
            <small className="help-text">
              Use a direct image link ("update some examples"). Placeholder used if empty.
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