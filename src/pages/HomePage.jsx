import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";

import "./HomePage.css";

function HomePage() {
  const location = useLocation();
  const { fundraisers, isLoading, error, refetch } = useFundraisers();

  useEffect(() => {
    if (location.state?.justCreated) {
      refetch();
    }
  }, [location.state?.justCreated, refetch]);

  if (isLoading) {
    return <div className="loading-message">Page is loading…</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        There was an error loading the fundraisers: {error.message}
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* ───────────────── Hero Section ───────────────── */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              You don’t need a crowd. 
              {/*<br></br>*/}
              <span className="hero-accent"> Just a few good people.</span>
            </h1>

            <p className="hero-subtitle">
              fundingfour connects everyday ideas into support for what matters.
            </p>

            <Link to="/fundraisers" className="hero-cta">
              Explore fundraisers
            </Link>
          </div>

          <div className="hero-image">
            <img
              src="src/images/hero-connection.png"
              alt="a collage of people connecting and supporting each other, symbolizing the power of community and crowdfunding"
            />
          </div>
        </div>
      </section>
      
      <div className="hero-divider" />

      {/* ─────────────── Fundraisers Grid ─────────────── */}
      <section className="fundraisers-section" id="fundraiser-grid">
        {fundraisers.length === 0 ? (
          <div className="no-fundraisers">
            <p>It’s a little quiet here. No posts available at the moment.</p>

            <Link to="/login" className="btn-primary">
              Create a post
            </Link>
          </div>
        ) : (
          <div className="fundraiser-grid">
            {fundraisers.map((fundraiser) => (
              <FundraiserCard
                key={fundraiser.id || fundraiser._id}
                fundraiserData={fundraiser}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;
