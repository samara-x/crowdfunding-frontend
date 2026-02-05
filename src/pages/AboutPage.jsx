function AboutPage() {
  return (
    <div className="about-page">
      <h1>About FundingFour</h1>

      <section>
        <h2>Our Purpose</h2>
        <p>
          You don’t need a huge crowd — just a few good people who care.
        </p>
        <p>
          FundingFour exists to connect everyday people with the causes and ideas that matter most to them. 
          Whether you're wanting to create a community garden, asking for help to run a free workshop, 
          wanting to start small with a hobby you enjoy or finding that +1 for a trip deal! — this is the place.
        </p>
      </section>

      <section>
        <h2>What makes us different</h2>
        <ul>
          <li>Small is powerful — we celebrate campaigns that need just 1–3 people as much as those needing hundreds.</li>
          <li>Real stories, real impact — every post tells a human story, not just a goal.</li>
          <li>Local & global — location matters, but kindness doesn't have borders.</li>
          <li>Simple & transparent — no complicated fees, no hidden rules, just people showing up for people.</li>
        </ul>
      </section>

      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Trust</strong> — verified users, clear communication, honest updates.</li>
          <li><strong>Community</strong> — real connection over transactions.</li>
          <li><strong>Inclusivity</strong> — anyone can start or support a post.</li>
          <li><strong>Kindness</strong> — every post starts with someone who believes in something bigger than themselves.</li>
        </ul>
      </section>

      <section>
        <h2>Who we are</h2>
        <p>
          FundingFour was created as apart of the She Codes Plus 2026 Brisbane intake by Samara,
          who knows firsthand the power of small communities coming together to make a difference in every day life.
        </p>
        <p>
          We're not a big corporation — we're just people who believe in the power of community, 
          one post (and one supporter) at a time.
        </p>
      </section>

      <p className="closing-line">
        Ready to start something? <a href="/start">Create your first post</a> today.
      </p>
    </div>
  );
}

export default AboutPage;