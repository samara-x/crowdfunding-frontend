import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";

import "./HomePage.css";

function HomePage() {
    const location = useLocation();
    const { fundraisers, isLoading, error, refetch } = useFundraisers();

    useEffect(() => {
        if (location.state?.justCreated) {
            // If the state indicates a refresh is needed, trigger a re-fetch/update logic
            refetch();
        }
    }, [location.state?.justCreated]);

    if (isLoading) {
        return <div>Page is loading...</div>;
    }
    if (error) {
        return <div>There was an error loading the fundraisers: {error.message}</div>;
    }

    return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            You don't need a crowd
            <br />
            <span className="hero-accent">Just a few good people.</span>
          </h1>

          <p className="hero-subtitle">
            FundingFour connects everyday ideas into support for what matters.
          </p>
        </div>
      </section>

      {/* Fundraisers Grid */}
      <section className="fundraisers-section" id="fundraiser-grid">
        {fundraisers.length === 0 ? (
          <div className="no-fundraisers">
            <p>It's a little quiet here. No posts available at the moment.</p>
            <Link to="/login" className="btn-primary">
            Create a Post
            </Link>
          </div>
        ) : (
          <div id="fundraiser-list" className="fundraiser-grid">
            {fundraisers.map((fundraiser) => (
              <FundraiserCard
                key={fundraiser.id || fundraiser._id} // ← very important for safe key fallback!
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