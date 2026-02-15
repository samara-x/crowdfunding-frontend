import { useParams, useNavigate } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";
import useAuth from "../hooks/use-auth";
import deleteFundraiser from "../api/delete-fundraiser";
import PledgeForm from "../components/PledgeForm";
import "./FundraiserPage.css";

function FundraiserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuth(); // Get current user info
  const { fundraiser, isLoading, error, refetch } = useFundraiser(id);

  console.log("isLoading:", isLoading);

  // Check if current user is the owner of the fundraiser
  const isOwner = auth?.user_id === fundraiser?.owner;

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return;
    }

    try {
      await deleteFundraiser(id);
      alert("Fundraiser deleted successfully.");
      navigate("/"); // Redirect to homepage or fundraisers list after deletion
    } catch (err) {
      console.error("Error deleting fundraiser:", err);
      alert("Failed to delete fundraiser: " + err.message);
    }
  };

  // Handle loading & error states first
  if (isLoading) {
    return <div className="loading">Loading fundraiser...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!fundraiser) {
    return <div className="not-found">Fundraiser not found</div>;
  }

  // Safe calculations
  const raised = fundraiser.pledges?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;
  const goal = Number(fundraiser.goal) || 1000;
  const progress = goal > 0 ? Math.min((raised / goal) * 100, 100) : 0;

  console.log("Fundraiser owner:", fundraiser?.owner);
  console.log("Current user ID:", auth?.user?.id);
  console.log("Is owner?", isOwner);
  
  return (
  <div className="fundraiser-page">
    {/* Hero / Header Section */}
    <div className="hero">
      <img
        src={fundraiser.image || "public/placeholder.png"}
        alt={fundraiser.title}
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1>{fundraiser.title}</h1>
        <div className="meta">
          Created: {new Date(fundraiser.date_created).toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          <span className={`status-badge ${fundraiser.is_open ? "status-open" : "status-closed"}`}>
            {fundraiser.is_open ? "Active" : "Closed"}
          </span>
        </div>
      </div>
    </div>

    {/* Main layout: content + sidebar */}
    <div className="content-grid">
      {/* Left / Main content */}
      <div className="main-content">
        <h2>I want to</h2>
        <p>{fundraiser.description || "No description provided yet..."}</p>
      
        {/* Owner actions – only visible to owner */}
          {isOwner && (
            <div className="owner-actions" style={{ marginTop: "2rem" }}>
              <button
                onClick={handleDelete}
                className="btn-delete"
                disabled={isLoading}
              >
                Delete Fundraiser
              </button>
            </div>
          )}
        </div>
      
      {/* Right / Sidebar – ONLY ONE of these */}
      <div className="sidebar">
        {/* Progress summary */}
        <div className="progress-card">
          <div className="progress-header">
            <h3>Progress</h3>
            <span className="raised-amount">${raised.toLocaleString()}</span>
          </div>
          <div className="goal-amount">of ${goal.toLocaleString()} goal</div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="percentage">{Math.round(progress)}% raised</div>
        </div>

        {/* Pledge form – separate block, below progress */}
        {fundraiser.is_open ? (
          <PledgeForm
            fundraiserId={fundraiser.id}
            onPledgeSuccess={refetch}
          />
        ) : (
          <div className="closed-notice">
            This fundraiser is currently closed.
          </div>
        )}

        {/* Pledges list */}
        <div className="pledges-card">
          <h3>Pledges ({fundraiser.pledges?.length || 0})</h3>

          {fundraiser.pledges?.length > 0 ? (
            <ul className="pledge-list">
              {fundraiser.pledges.map((pledge, index) => (
                <li key={index} className="pledge-item">
                  <span className="pledge-amount">${Number(pledge.amount).toLocaleString()}</span>
                  <span className="pledge-supporter">from {pledge.supporter || "Anonymous"}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-pledges">No pledges yet — be the first!</div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

export default FundraiserPage;