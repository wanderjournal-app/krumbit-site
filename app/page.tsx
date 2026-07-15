const appStoreUrl =
  "https://apps.apple.com/us/app/krumbit-learn-while-scrolling/id6747910126";

function AppStoreButton({ compact = false, label = "Download free" }: { compact?: boolean; label?: string }) {
  return (
    <a
      className={`app-store-button${compact ? " compact" : ""}`}
      href={appStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} on the App Store`}
    >
      <span className="store-mark" aria-hidden="true">A</span>
      <span><small>{label}</small><strong>App Store</strong></span>
      <b aria-hidden="true">↗</b>
    </a>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Krumbit home">
      <img src="/krumbit-icon.png" alt="" />
      <span>Krumbit</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#why-krumbit">Why Krumbit</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
          <AppStoreButton compact label="Get it free" />
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A smarter feed is one tap away</p>
          <h1 id="hero-title">Your next scroll<br />can make you <em>smarter.</em></h1>
          <p className="hero-lead">
            Open Krumbit instead of another mindless feed. Watch a quick lesson,
            answer one question, and leave with something useful you can actually remember.
          </p>
          <div className="hero-actions">
            <AppStoreButton label="Download free on the" />
            <a className="text-link" href="#how-it-works"><span aria-hidden="true">▶</span> See one learning loop</a>
          </div>
          <div className="trust-row" aria-label="App highlights">
            <span><b>★</b> 4.7 from early ratings</span>
            <span><b>✓</b> Free to download</span>
            <span><b>✓</b> iPhone &amp; iPad</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Krumbit turns a quick video into a remembered idea">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <figure className="hero-phone"><img src="/screen-learn.webp" alt="Krumbit feed showing a short visual astronomy lesson" /></figure>
          <div className="lesson-chip chip-top"><span>42 sec</span><div><small>ONE QUICK LESSON</small><strong>How galaxies begin</strong></div></div>
          <div className="lesson-chip chip-middle"><span>?</span><div><small>ONE QUICK CHECK</small><strong>What held the idea together?</strong></div></div>
          <div className="lesson-chip chip-bottom"><span>✓</span><div><small>KNOWLEDGE LOCKED IN</small><strong>Quiz complete · +25 XP</strong></div></div>
        </div>
      </section>

      <section className="result-strip" aria-label="One Krumbit learning session">
        <p><strong>Watch for 42 seconds.</strong> Answer one question. <em>Keep the idea.</em></p>
        <span>Learning that fits the minutes you already have.</span>
      </section>

      <section className="replacement section-shell" id="why-krumbit" aria-labelledby="replacement-title">
        <div className="section-heading">
          <p className="section-label">DON&apos;T QUIT THE SCROLL. REPLACE THE PAYOFF.</p>
          <h2 id="replacement-title">The feed feels familiar.<br /><em>What you get from it doesn&apos;t.</em></h2>
          <p>You do not need another productivity plan. You need a better place for the habit you already have.</p>
        </div>
        <div className="outcome-grid">
          <article><span>01</span><h3>Leave with one useful idea</h3><p>Every swipe is built around something worth knowing—not another clip you forget before the next one loads.</p></article>
          <article><span>02</span><h3>Turn watching into recall</h3><p>A fast quiz asks your brain to retrieve the idea, so the session becomes active learning instead of passive consumption.</p></article>
          <article><span>03</span><h3>See the minutes add up</h3><p>Streaks, XP, quiz history, and topic progress turn spare moments into a learning habit you can actually see.</p></article>
        </div>
      </section>

      <section className="loop-section" id="how-it-works" aria-labelledby="loop-title">
        <div className="section-shell">
          <div className="section-heading loop-heading">
            <p className="section-label">ONE SMALL LOOP</p>
            <h2 id="loop-title">Swipe. Recall. Grow.<br /><em>Then get on with your day.</em></h2>
            <p>No hour-long course. No guilt when life gets busy. Just a useful learning loop that fits inside a commute, coffee break, or wait in line.</p>
          </div>

          <div className="loop-panels">
            <article className="loop-panel watch-panel">
              <div className="loop-copy"><span>01 · WATCH</span><h3>One swipe.<br />One useful idea.</h3><p>Visual lessons make science, health, history, technology, and everyday facts easy to enter and quick to finish.</p><ul><li>Short-form video rhythm</li><li>Professionally produced lessons</li><li>Built for spare minutes</li></ul></div>
              <figure className="product-device"><img src="/screen-learn.webp" alt="A bite-sized astronomy lesson in the Krumbit feed" /></figure>
            </article>
            <article className="loop-panel choose-panel">
              <figure className="product-device"><img src="/screen-topics.webp" alt="Krumbit topic choices and custom topic search" /></figure>
              <div className="loop-copy"><span>02 · CHOOSE</span><h3>Follow a curiosity.<br />Or ask for one.</h3><p>Shape the feed around what you want to understand next instead of accepting whatever an algorithm wants to show you.</p><ul><li>Science, technology, history &amp; more</li><li>Custom topic search</li><li>A feed with a purpose</li></ul></div>
            </article>
          </div>

          <div className="result-pair">
            <article className="result-card">
              <div><span>03 · REMEMBER</span><h3>Know what actually stuck.</h3><p>Quick quizzes and learning history turn “I watched it” into “I can explain it.”</p></div>
              <img src="/screen-quiz.webp" alt="Krumbit learning statistics and quiz history" />
            </article>
            <article className="result-card accent">
              <div><span>04 · KEEP GOING</span><h3>Make curiosity your streak.</h3><p>XP, gems, levels, and leaderboards give small sessions a reason to become a habit.</p></div>
              <img src="/screen-progress.webp" alt="Krumbit streak, XP, level, and leaderboard progress" />
            </article>
          </div>
        </div>
      </section>

      <section className="moments section-shell" aria-labelledby="moments-title">
        <div className="section-heading moments-heading">
          <p className="section-label">WHEN KRUMBIT FITS</p>
          <h2 id="moments-title">The tiny windows where<br /><em>mindless usually wins.</em></h2>
        </div>
        <div className="moment-grid">
          <article><span>07:42</span><div><small>ON THE COMMUTE</small><h3>Trade three random clips for three things worth knowing.</h3></div></article>
          <article><span>12:18</span><div><small>BETWEEN TASKS</small><h3>Give a five-minute break an ending you feel good about.</h3></div></article>
          <article><span>22:06</span><div><small>BEFORE BED</small><h3>Close the day with curiosity instead of another endless feed.</h3></div></article>
        </div>
      </section>

      <section className="reviews section-shell" id="reviews" aria-labelledby="reviews-title">
        <div className="review-summary">
          <p className="section-label">EARLY APP STORE REVIEWS</p>
          <div className="rating-lockup"><strong>4.7</strong><div><span>★★★★★</span><small>from 14 early ratings</small></div></div>
          <h2 id="reviews-title">People came for a better feed.<br /><em>They stayed for the feeling after.</em></h2>
        </div>
        <div className="review-grid">
          <blockquote><div>★★★★★</div><p>“Switched from Instagram to this for a month—such a better use of my time and fun at the same time.”</p><cite>App Store review</cite></blockquote>
          <blockquote><div>★★★★★</div><p>“An educational version of Instagram and much better than doomscrolling. Highly recommended.”</p><cite>App Store review</cite></blockquote>
          <blockquote><div>★★★★★</div><p>“Every crazy fact I learn from the app makes me want to learn even more about it.”</p><cite>App Store review</cite></blockquote>
        </div>
      </section>

      <section className="download-panel section-shell" aria-labelledby="download-title">
        <div className="download-mark" aria-hidden="true">↟</div>
        <div>
          <p className="section-label">A HEALTHIER DEFAULT</p>
          <h2 id="download-title">Put something smarter<br />where the scroll already lives.</h2>
          <p>Krumbit is free to download on iPhone and iPad. Open it the next time your thumb goes looking for a feed.</p>
        </div>
        <div className="download-action"><AppStoreButton label="Download free on the" /><small>13+ · Early access · 58.3 MB</small></div>
      </section>

      <section className="faq section-shell" id="faq" aria-labelledby="faq-title">
        <div className="section-heading faq-heading"><p className="section-label">BEFORE YOUR FIRST SWIPE</p><h2 id="faq-title">A few quick answers.</h2></div>
        <div className="faq-list">
          <details><summary>Is Krumbit free?</summary><p>Krumbit is currently free to download during early access on the App Store.</p></details>
          <details><summary>What can I learn about?</summary><p>Explore science, technology, nature and biology, history and geography, health, and everyday facts. You can also search for a custom topic to shape your feed.</p></details>
          <details><summary>How long are the lessons?</summary><p>Krumbit is designed for short sessions. Lessons use the familiar pace of vertical video so you can learn something useful in the spare minutes you already have.</p></details>
          <details><summary>Is it just another video feed?</summary><p>The format is familiar, but the loop is different: lessons lead into quick recall, quiz history, topic progress, XP, and streaks so watching turns into active learning.</p></details>
          <details><summary>Does Krumbit work on iPad?</summary><p>Yes. Krumbit is available for both iPhone and iPad and requires iOS or iPadOS 15.1 or later.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <img src="/krumbit-icon.png" alt="" />
        <p className="section-label">YOUR NEXT SWIPE</p>
        <h2>Open a feed.<br />Leave with something useful.</h2>
        <p>Download Krumbit free and make the next five minutes count.</p>
        <AppStoreButton label="Download free on the" />
        <small>4.7 from 14 early ratings · iPhone &amp; iPad</small>
      </section>

      <footer className="site-footer">
        <Brand />
        <p>Keep scrolling. Start learning.</p>
        <div><a href="/privacy">Privacy</a><a href="/support">Support</a><a href="mailto:krumbit.co@gmail.com">Contact</a><span>© 2026 Krumbit Inc.</span></div>
      </footer>

      <a className="mobile-download" href={appStoreUrl} target="_blank" rel="noreferrer">Download Krumbit free <span aria-hidden="true">↗</span></a>
    </main>
  );
}
