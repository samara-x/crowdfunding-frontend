import "./ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Questions, feedback, or just want to say hi — we’re here.
        </p>
      </header>

      <div className="contact-divider" />

      {/* Contact info */}
      <section className="contact-section fade-in">
        <h2>Get in touch</h2>
        <ul className="contact-methods">
          <li>
            <strong>Email</strong>
            <span>hello@fundingfour.com</span>
          </li>
          <li>
            <strong>Message us</strong>
            <span>Use the form below (fastest response)</span>
          </li>
          <li>
            <strong>Location</strong>
            <span>Queensland, Australia</span>
          </li>
        </ul>
      </section>

      {/* Form */}
      <section className="contact-section fade-in delay-1">
        <h2>Send us a message</h2>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="How should we call you?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us what's on your mind…"
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Send message
          </button>
        </form>

        <p className="form-note">
          We usually reply within 1–2 business days. Thank you for reaching out.
        </p>
      </section>

      <div className="contact-divider" />

      {/* Social */}
      <section className="contact-section fade-in delay-2">
        <h2>Find us elsewhere</h2>
        <p>Follow along and see the impact being made.</p>

        <div className="social-links">
          <a
            href="https://instagram.com/fundingfour"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
