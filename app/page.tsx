const appStoreUrl =
  "https://apps.apple.com/us/app/krumbit-learn-while-scrolling/id6747910126";

function AppStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`app-store-button${compact ? " compact" : ""}`}
      href={appStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Download Krumbit on the App Store"
    >
      <span className="apple" aria-hidden="true">●</span>
      <span><small>Download on the</small><strong>App Store</strong></span>
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
          <a href="#features">Features</a>
          <a href="#reviews">Reviews</a>
          <AppStoreButton compact />
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Microlearning for curious minds</p>
          <h1 id="hero-title">Keep the scroll.<br /><em>Change what it gives you.</em></h1>
          <p className="hero-lead">
            Krumbit turns the rhythm of short-form video into a learning habit.
            Discover quick lessons, test what stuck, and make real progress in the
            minutes you already spend scrolling.
          </p>
          <div className="hero-actions">
            <AppStoreButton />
            <a className="text-link" href="#how-it-works"><span aria-hidden="true">▶</span> See how it works</a>
          </div>
          <div className="trust-row" aria-label="App highlights">
            <span><b>✓</b> Free to download</span>
            <span><b>✓</b> 4.7 on the App Store</span>
            <span><b>✓</b> iPhone &amp; iPad</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Krumbit short video learning feed">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="float-card float-top"><span>✦</span><div><small>Today&apos;s progress</small><strong>12 useful ideas</strong></div></div>
          <div className="hero-phone"><img src="/screen-learn.webp" alt="Krumbit feed showing a bite-sized astronomy lesson" /></div>
          <div className="float-card float-bottom"><span>✓</span><div><small>Knowledge locked in</small><strong>Quiz complete · +25 XP</strong></div></div>
        </div>
      </section>

      <section className="promise" aria-label="Krumbit promise">
        <p>Your feed can leave you smarter.</p>
        <div><span>Watch</span><i /><span>Understand</span><i /><span>Quiz</span><i /><span>Remember</span></div>
      </section>

      <section className="how section-shell" id="how-it-works" aria-labelledby="how-title">
        <div className="section-heading">
          <p className="section-label">FROM SCROLL TO SKILL</p>
          <h2 id="how-title">A better loop, built into<br /><em>the format you already love.</em></h2>
          <p>No long lectures. No guilt-driven screen limits. Just small moments of curiosity that add up.</p>
        </div>
        <div className="step-grid">
          <article className="step-card">
            <span className="step-number">01</span>
            <div className="step-art video-art"><span>SCIENCE · 42 SEC</span><strong>How does a galaxy begin?</strong><i>▶</i></div>
            <h3>Swipe into something useful</h3>
            <p>Watch quick, visual lessons across science, health, history, technology, and everyday facts.</p>
          </article>
          <article className="step-card">
            <span className="step-number">02</span>
            <div className="step-art quiz-art"><small>QUICK CHECK</small><strong>Which force holds a galaxy together?</strong><span><i>A</i> Gravity</span><span><i>B</i> Magnetism</span></div>
            <h3>Quiz it before it disappears</h3>
            <p>Fast questions turn passive watching into active recall, helping each idea stick beyond the next swipe.</p>
          </article>
          <article className="step-card">
            <span className="step-number">03</span>
            <div className="step-art streak-art"><span>7</span><small>DAY STREAK</small><div><i /><i /><i /><i /><i /><i /><i /></div></div>
            <h3>Build a habit you can see</h3>
            <p>Track streaks, XP, quiz history, topic progress, and leaderboard momentum as minutes become mastery.</p>
          </article>
        </div>
      </section>

      <section className="feature-showcase" id="features" aria-labelledby="features-title">
        <div className="section-heading feature-heading">
          <p className="section-label">INSIDE KRUMBIT</p>
          <h2 id="features-title">Short-form energy.<br /><em>Long-term value.</em></h2>
          <p>Every feature is designed to move you from endless consumption toward curiosity, recall, and visible progress.</p>
        </div>

        <article className="feature-panel feature-feed">
          <div className="feature-copy">
            <span className="feature-index">01 · BITE-SIZED LESSONS</span>
            <h3>One swipe.<br />One useful idea.</h3>
            <p>Krumbit keeps the immediacy of a vertical video feed, but replaces forgettable noise with professionally curated learning.</p>
            <ul><li>Fast, visual explanations</li><li>Science, health, history &amp; more</li><li>Designed for spare minutes</li></ul>
          </div>
          <figure className="device"><img src="/screen-learn.webp" alt="Krumbit bite-sized astronomy lesson in the scrolling feed" /></figure>
        </article>

        <article className="feature-panel feature-topics">
          <figure className="device"><img src="/screen-topics.webp" alt="Krumbit topic menu and custom topic search" /></figure>
          <div className="feature-copy">
            <span className="feature-index">02 · YOUR CURIOSITY, YOUR FEED</span>
            <h3>Follow a topic.<br />Or ask for one.</h3>
            <p>Choose a subject or use custom topic search to shape the feed around what you actually want to understand next.</p>
            <ul><li>Topic-based feed controls</li><li>Custom topic discovery</li><li>More signal, less noise</li></ul>
          </div>
        </article>

        <div className="feature-pair">
          <article className="mini-feature">
            <div><span>03 · PROGRESS</span><h3>See what you&apos;ve learned.</h3><p>Review quiz history, watch totals, and your strongest subjects instead of wondering where the time went.</p></div>
            <img src="/screen-quiz.webp" alt="Krumbit learning statistics and quiz history" />
          </article>
          <article className="mini-feature dark">
            <div><span>04 · MOTIVATION</span><h3>Make curiosity a streak.</h3><p>XP, gems, daily streaks, levels, and leaderboards turn consistency into a game worth playing.</p></div>
            <img src="/screen-progress.webp" alt="Krumbit streak, level, XP, and leaderboard screen" />
          </article>
        </div>
      </section>

      <section className="habit-panel section-shell" aria-labelledby="habit-title">
        <div className="habit-mark" aria-hidden="true">↟</div>
        <div>
          <p className="section-label">A HEALTHIER DEFAULT</p>
          <h2 id="habit-title">Don&apos;t fight the urge to scroll.<br /><em>Give it somewhere better to go.</em></h2>
          <p>Krumbit is for commutes, coffee breaks, and late-night curiosity—the tiny windows where a mindless habit can become a meaningful one.</p>
        </div>
        <ul><li><span>01</span> Learn in under a minute</li><li><span>02</span> Recall with quick quizzes</li><li><span>03</span> Grow at your own pace</li></ul>
      </section>

      <section className="reviews section-shell" id="reviews" aria-labelledby="reviews-title">
        <div className="section-heading">
          <p className="section-label">EARLY LEARNERS</p>
          <h2 id="reviews-title">A scroll you can<br /><em>feel good about.</em></h2>
        </div>
        <div className="review-grid">
          <blockquote><div>★★★★★</div><p>“Switched from Instagram to this for a month—such a better use of my time and fun at the same time.”</p><cite>App Store review</cite></blockquote>
          <blockquote><div>★★★★★</div><p>“An educational version of Instagram and much better than doomscrolling. Highly recommended.”</p><cite>App Store review</cite></blockquote>
          <blockquote><div>★★★★★</div><p>“Every crazy fact I learn from the app makes me want to learn even more about it.”</p><cite>App Store review</cite></blockquote>
        </div>
        <p className="rating-line"><strong>4.7</strong> out of 5 from early App Store ratings</p>
      </section>

      <section className="final-cta">
        <img src="/krumbit-icon.png" alt="" />
        <p className="section-label">YOUR NEXT SWIPE</p>
        <h2>Open your feed.<br />Leave with something useful.</h2>
        <p>Krumbit is free on iPhone and iPad. Join early access and help shape the future of learning.</p>
        <AppStoreButton />
      </section>

      <footer className="site-footer">
        <Brand />
        <p>Keep scrolling. Start learning.</p>
        <div><a href="/privacy">Privacy</a><a href="/support">Support</a><a href="mailto:krumbit.co@gmail.com">Contact</a><span>© 2026 Krumbit Inc.</span></div>
      </footer>
    </main>
  );
}
