function ContactPage() {

    return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <section>
        <h2>We'd love to hear from you</h2>
        <p>
        Questions, feedback, or just want to say hi - we're here.
      </p>
    </section>

    <section>
        <h3>Get in touch</h3>
        <ul className="contact-methods">
          <li>
            <strong>Email:</strong> hello@fundingfour.com
          </li>
          <li>
            <strong>Message us:</strong> Use the form below (fastest response)
          </li>
          <li>
            <strong>Location:</strong> Based in Queensland, Australia
          </li>
        </ul>
      </section>

      <section>
        <h3>Send us a message</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="How should we call you?" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us what's on your mind..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>

        <p className="form-note">
          We usually reply within 1–2 business days. Thank you for reaching out!
        </p>
      </section>

      <section className="social-section">
        <h3>Find us elsewhere</h3>
        <p>
          Follow our journey and see the impact being made:
        </p>
        <div className="social-links">
          <a href="https://instagram.com/fundingfour" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </section>
    </div>
    );
}

export default ContactPage;