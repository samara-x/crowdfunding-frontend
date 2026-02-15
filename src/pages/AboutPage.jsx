import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">
      {/* Header */}
      <header className="about-header">
        <h1>About Funding Four Crowds</h1>
        <p className="about-intro">
          You don’t need a huge crowd — just a few good people who care.
        </p>
      </header>

      <div className="about-divider" />

      {/* Purpose */}
      <section className="about-section fade-in">
        <h2>Our Purpose</h2>
        <p>
          FundingFour exists to connect everyday people with the causes and ideas
          that matter most to them.
        </p>
        <p>
          Whether you're creating a community garden, running a free workshop,
          starting a small hobby, or finding that +1 for a trip deal — this is the
          place where small support creates real momentum.
        </p>
      </section>

      {/* Difference */}
      <section className="about-section fade-in delay-1">
        <h2>What makes us different</h2>
        <ul className="about-list">
          <li>
            <strong>Small is powerful</strong> — campaigns needing just 1–3
            people matter as much as those needing hundreds.
          </li>
          <li>
            <strong>Real stories</strong> — every post represents a human moment,
            not just a number.
          </li>
          <li>
            <strong>Local & global</strong> — location matters, kindness doesn’t
            have borders.
          </li>
          <li>
            <strong>Simple & transparent</strong> — no hidden rules, just people
            showing up.
          </li>
        </ul>
      </section>

      {/* Values */}
      <section className="about-section fade-in delay-2">
        <h2>Our Values</h2>
        <ul className="about-values">
          <li>
            <span>Trust</span>
            <p>Verified users, clear communication, honest updates.</p>
          </li>
          <li>
            <span>Community</span>
            <p>Connection over transactions.</p>
          </li>
          <li>
            <span>Inclusivity</span>
            <p>Anyone can start or support a post.</p>
          </li>
          <li>
            <span>Kindness</span>
            <p>Every post starts with belief.</p>
          </li>
        </ul>
      </section>

      {/* Who We Are */}
      <section className="about-section fade-in delay-3">
        <h2>Who we are</h2>
        <p>
          FundingFour was created as part of the She Codes Plus 2026 Brisbane
          intake by Samara — built from firsthand experience of small communities
          coming together to make everyday change.
        </p>
        <p>
          We’re not a big corporation. We’re just people who believe that showing
          up - even once - matters.
        </p>
      </section>

      <div className="about-divider" />

      {/* CTA */}
      <footer className="about-cta">
        <p>
          Ready to start something?
          <Link to="/start"> Create your first post</Link>.
        </p>
      </footer>
    </main>
  );
}

export default AboutPage;
