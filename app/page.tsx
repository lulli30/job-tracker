export default function Home() {
  return (
    <div className="page">
      <nav>
        <div className="wordmark">
          <span className="dot" />
          Ledger
        </div>
        <a href="/applications" className="nav-cta">
          Open the tracker →
        </a>
      </nav>

      <div className="wrap">
        <header className="hero">
          <p className="eyebrow">Job application tracker</p>
          <h1 className="hero-title">
            Every application,
            <br />
            from <em>sent</em> to <em>signed</em>.
          </h1>
          <p className="hero-sub">
            Keep every role you&apos;ve applied to in one place. Log the
            company, the position, and where things stand — and always know
            what to follow up on next.
          </p>
          <div className="hero-actions">
            <a href="/applications/new" className="btn-primary">
              Add your first application →
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See how it works
            </a>
          </div>

          <div className="trail" aria-hidden="true">
            <div className="stamp stamp-applied">
              <div className="stamp-badge">Applied</div>
            </div>
            <div className="stamp-connector" />
            <div className="stamp stamp-interview">
              <div className="stamp-badge">Interview</div>
            </div>
            <div className="stamp-connector" />
            <div className="stamp stamp-offer">
              <div className="stamp-badge">Offer</div>
            </div>
            <div className="stamp-connector" />
            <div className="stamp stamp-accepted">
              <div className="stamp-badge">Accepted</div>
            </div>
          </div>
        </header>
      </div>

      <section id="how-it-works">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="section-tag">Add an application</p>
              <h2 className="section-title">
                Type it once. Watch it take shape.
              </h2>
            </div>
            <p className="section-note">
              Add the company, the role, and where you stand — your card
              builds itself as you type, so you can see exactly what
              you&apos;re about to save.
            </p>
          </div>

          <div className="form-preview-grid">
            <div className="paper-card">
              <p className="card-label">New application</p>
              <div className="fake-field">
                <label>Company</label>
                <div className="fake-input typing-text">
                  Northwind Robotics
                </div>
              </div>
              <div className="fake-field">
                <label>Position</label>
                <div className="fake-input">Frontend Engineer</div>
              </div>
              <div className="fake-field">
                <label>Status</label>
                <div className="fake-input">Interview</div>
              </div>
            </div>

            <div className="paper-card preview-card">
              <p className="card-label">Your card</p>
              <div className="preview-company">Northwind Robotics</div>
              <div className="preview-position">Frontend Engineer</div>
              <div className="preview-status">Interview</div>
              <div className="sync-note">
                <span className="pulse-dot" />
                this is what shows up on your dashboard
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="section-tag">Your dashboard</p>
              <h2 className="section-title">
                Everything you&apos;ve applied to, right where you left it.
              </h2>
            </div>
            <p className="section-note">
              Nothing to save manually and nothing to dig for — your latest
              applications are always waiting at the top.
            </p>
          </div>

          <div className="flow-grid">
            <div className="flow-card">
              <span className="flow-verb verb-post">Saved instantly</span>
              <p className="flow-title">Add it once, keep it forever</p>
              <p className="flow-desc">
                The moment you save an application, it&apos;s part of your
                tracker for good — no extra steps, nothing to remember to
                back up.
              </p>
            </div>

            <div className="flow-card">
              <span className="flow-verb verb-get">Newest first</span>
              <p className="flow-title">Pick up right where you left off</p>
              <p className="flow-desc">
                Open your dashboard and your most recent applications are
                already at the top, so you can jump straight back into the
                search.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="section-tag">Track your progress</p>
              <h2 className="section-title">
                Move an application forward in one tap.
              </h2>
            </div>
            <p className="section-note">
              Got an interview? Heard back? Update the status and everything
              else about that application — the company, the role, the notes
              — stays exactly as you left it.
            </p>
          </div>

          <div className="pipeline-block">
            <div className="pipeline-row">
              <span className="pipe-chip applied">Applied</span>
              <span className="pipe-arrow">→</span>
              <span className="pipe-chip interview">Interview</span>
              <span className="pipe-arrow">→</span>
              <span className="pipe-chip offer">Offer</span>
              <span className="pipe-arrow">→</span>
              <span className="pipe-chip accepted">Accepted</span>
            </div>
            <p className="pipeline-caption">
              Every application moves through these four stages, so a glance
              at your dashboard tells you exactly where things stand across
              your whole search.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="section-tag">Stay in control</p>
              <h2 className="section-title">
                Tidy, accurate, and never lost.
              </h2>
            </div>
            <p className="section-note">
              A tracker only helps if you can trust what&apos;s in it.
            </p>
          </div>

          <div className="reliability-grid">
            <div className="rel-card">
              <div className="rel-icon icon-delete">✕</div>
              <p className="rel-title">Clean up anytime</p>
              <p className="rel-desc">
                Applied somewhere by mistake, or just want a fresh start?
                Remove any application in a single tap.
              </p>
            </div>

            <div className="rel-card">
              <div className="rel-icon icon-400">!</div>
              <p className="rel-title">Catches mistakes early</p>
              <p className="rel-desc">
                Forget to fill in the company or role? We&apos;ll let you
                know before it gets saved, so your list stays accurate.
              </p>
            </div>

            <div className="rel-card">
              <div className="rel-icon icon-500">✓</div>
              <p className="rel-title">Built to be reliable</p>
              <p className="rel-desc">
                If something ever goes wrong on our end, you&apos;ll get a
                clear heads-up instead of a silent failure or lost data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-row">
            <div className="wordmark small">
              <span className="dot" />
              Ledger
            </div>
            <p className="footer-copy">
              Ledger — a small, honest place to keep track of the job hunt.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}