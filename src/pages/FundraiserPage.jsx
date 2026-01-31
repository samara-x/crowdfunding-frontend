import { useParams } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";
import "./FundraiserPage.css";

function FundraiserPage() {
  const { id } = useParams();

  const { fundraiser, isLoading, error } = useFundraiser(id);

  console.log("isLoading:", isLoading);

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

  return (
    <div className="fundraiser-page">
      {/* Hero / Header Section */}
      <div className="hero">
        <img
          src={fundraiser.image || "https://via.placeholder.com/900x400?text=Fundraiser"}
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

          {/* ← Add more content here later if needed
              e.g. updates, gallery, team, FAQ, etc. */}
        </div>

        {/* Right / Sidebar – most important fundraising elements */}
        <div className="sidebar">
          <div className="progress-card">
            <div className="progress-header">
              <h3>Progress</h3>
              <span className="raised-amount">${raised.toLocaleString()}</span>
            </div>
            <div className="goal-amount">of ${goal.toLocaleString()} goal</div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="percentage">{Math.round(progress)}% raised</div>
          </div>

          <button className="donate-button" type="button">
            Donate Now
          </button>

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