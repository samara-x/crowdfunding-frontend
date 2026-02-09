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
      setError(err.message || 'Failed to pledge. Did you forget to comment? Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pledge-card">
      <h3 className="pledge-title">Support this fundraiser</h3>
      <p className="pledge-subtitle">
        Support makes a real difference — thank you for being here.
      </p>

      {pledgeSuccess && (
        <div className="pledge-success">
          Thank you! You've supported this post.
        </div>
      )}

      {error && <div className="pledge-error">{error}</div>}

      <form onSubmit={handleSubmit} className="pledge-form">
        <div className="form-group">
          <label htmlFor="amount" className="pledge-label">
            Pledge amount ($)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder=""
            min="1"
            max="1000"
            step="1"
            className="pledge-input.       "
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment" className="pledge-label">
            Message of support (leave a comment)
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment will be posted publicly with your pledge. (Max 200 characters)"
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
          <label htmlFor="anonymous">Pledge anonymously</label>
        </div>

        <button
          type="submit"
          className="join-button"
          disabled={isLoading}
        >
          {isLoading ? 'Pledging...' : 'Make Pledge'}
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;