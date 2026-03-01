import { useState } from 'react';
import postPledge from '../api/post-pledge.js';
import { useNavigate } from "react-router-dom";
//import useAuth from "../hooks/use-auth.js";
import "./PledgeForm.css";

function PledgeForm({ fundraiserId, onPledgeSuccess }) {
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [error, setError] = useState('');
  const [pledgeSuccess, setPledgeSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPledgeSuccess(false);

    const pledgeAmount = Number(amount);
    if (!pledgeAmount || pledgeAmount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setIsLoading(true);

    try {
      await postPledge({
        amount: pledgeAmount,
        comment: comment.trim(),
        anonymous,
        fundraiserId,
      });

      setAmount('');
      setComment('');
      setAnonymous(false);
      setError('');
      setPledgeSuccess(true);

      if (onPledgeSuccess) {
        onPledgeSuccess();
      }
    } catch (err) {
      setError(err.message || 'Failed to join. Did you forget to leave a message? Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pledge-card">
      <h3 className="pledge-title">Join this post</h3>
      <p className="pledge-subtitle">
        You're making a difference — thank you for being here.
      </p>

      {pledgeSuccess && (
        <div className="pledge-success">
          Thank you! You've joined this post.
        </div>
      )}

      {error && <div className="pledge-error">{error}</div>}

      <form onSubmit={handleSubmit} className="pledge-form">
        <div className="form-group">
          <label htmlFor="amount" className="pledge-label">
            How many people can you bring?
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=""
            min="1"
            max="3"
            step="1"
            className="pledge-input.       "
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment" className="pledge-label">
            Leave a message for the poster
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your message will be posted publicly. (Max 200 characters)"
            maxLength={200}
            rows={3}
            className="pledge-textarea"
            disabled={isLoading}
          />
          <small className="char-counter">
            {comment.length} / 200
          </small>
        </div>

        <div className="anonymous-option">
          <input
            type="checkbox"
            id="anonymous"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            disabled={isLoading}
          />
          <label htmlFor="anonymous">Join anonymously</label>
        </div>

        <button
          type="submit"
          className="join-button"
          disabled={isLoading}
        >
          {isLoading ? 'Joining...' : 'I can help!'}
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;