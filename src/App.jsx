import React from 'react';

const navItems = ['Home', 'About', 'Causes', 'Services', 'Impact', 'Contact'];

const values = [
  {
    title: 'Compassion',
    text: 'Every helpful action starts with seeing people with dignity.',
  },
  {
    title: 'Community',
    text: 'A better community is built by all of us, one choice at a time.',
  },
  {
    title: 'Action',
    text: 'Small steps become real change when people decide to care.',
  },
];

const causes = [
  {
    icon: '📚',
    title: 'Lessons That Open Doors',
    text: 'Helping children feel seen, supported, and ready to learn.',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
    alt: 'Children learning together in a classroom setting',
  },
  {
    icon: '🍲',
    title: 'Meals That Bring Relief',
    text: 'Turning food support into comfort for families in need.',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
    alt: 'Volunteers preparing food support packages for distribution',
  },
  {
    icon: '🌸',
    title: 'Confidence for Women',
    text: 'Creating space for skills, safety, and self-belief.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Women collaborating during a group learning session',
  },
  {
    icon: '🐾',
    title: 'Care Beyond People',
    text: 'Encouraging kindness toward animals and responsible care.',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80',
    alt: 'Person gently caring for a dog outdoors',
  },
  {
    icon: '🌿',
    title: 'Greener Shared Spaces',
    text: 'Helping communities protect the places they call home.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    alt: 'Hands holding a young green plant for environmental awareness',
  },
  {
    icon: '🛠️',
    title: 'Skills for Tomorrow',
    text: 'Opening new paths through practical, guided learning.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Student using a laptop during a skill development workshop',
  },
];

const services = [
  {
    title: 'Volunteer Programs',
    text: 'Give time where a friendly hand can make the day lighter.',
  },
  {
    title: 'Donation Drives',
    text: 'Turn support into meals, learning kits, and daily essentials.',
  },
  {
    title: 'Awareness Campaigns',
    text: 'Share knowledge that helps families make safer choices.',
  },
  {
    title: 'Student Support',
    text: 'Help students keep learning when resources feel out of reach.',
  },
  {
    title: 'Event Outreach',
    text: 'Bring care directly into schools and neighborhoods.',
  },
  {
    title: 'NGO Partnerships',
    text: 'Work with others so good intentions become organized action.',
  },
];

const stats = [
  { number: '500+', label: 'Meals that brought relief', text: 'Every shared meal is a reminder that someone cared.' },
  { number: '120+', label: 'Students given support', text: 'Learning support can protect confidence and possibility.' },
  { number: '80+', label: 'Volunteers choosing to care', text: 'Time and kindness are powerful forms of service.' },
  { number: '15+', label: 'Communities reached', text: 'Outreach matters when it meets people where they are.' },
];

const gallery = [
  {
    title: 'Education Drive',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
    alt: 'Children sitting together during an education drive',
  },
  {
    title: 'Food Support',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
    alt: 'Community food support activity with children and volunteers',
  },
  {
    title: 'Volunteer Event',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80',
    alt: 'Volunteers sorting donations at a community event',
  },
  {
    title: 'Green Campaign',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    alt: 'Community members working together in a green outdoor campaign',
  },
  {
    title: 'Tree Plantation',
    image:
      'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=900&q=80',
    alt: 'Group of people working together during an outdoor community activity',
  },
  {
    title: 'Donation Support',
    image:
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80',
    alt: 'Hands holding a donation jar for support activities',
  },
];

const testimonials = [
  {
    quote:
      'I felt my time was valued and that even a small role could help someone feel supported.',
    name: 'Demo Volunteer',
    role: 'Community volunteer',
  },
  {
    quote:
      'The message is simple and honest: support can become food, learning, and relief.',
    name: 'Demo Donor',
    role: 'Monthly supporter',
  },
  {
    quote:
      'It felt respectful and hopeful, like the community was being invited to grow together.',
    name: 'Demo Community Member',
    role: 'Local participant',
  },
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  );
}

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    window.alert('Thank you for reaching out to HopeBridge Foundation. This demo form has been submitted.');
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="HopeBridge Foundation home">
          <span>HB</span>
          HopeBridge Foundation
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-volunteer" href="#services">
            Volunteer
          </a>
          <a className="nav-cta" href="#contact">
            Donate Now
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">CHANGE BEGINS WITH CARE</p>
            <h1>Your small act can become someone’s hope.</h1>
            <p>
              HopeBridge Foundation is a demo social impact initiative built around one simple
              belief: every meal, every lesson, and every hour of support can help a life move
              forward.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Donate Now
              </a>
              <a className="button secondary" href="#services">
                Become a Volunteer
              </a>
              <a className="button ghost" href="#causes">
                Start Helping Today
              </a>
            </div>
          </div>
          <figure className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=82"
              alt="Smiling children gathered during a community support activity"
            />
            <figcaption>
              <span>SHARED RESPONSIBILITY</span>
              <strong>A better community is not built by one person. It is built by all of us.</strong>
            </figcaption>
          </figure>
        </section>

        <section className="section about-section" id="about">
          <SectionHeader
            eyebrow="WHO WE ARE"
            title="A bridge between kindness and real change"
            text="HopeBridge is a demo NGO concept built around practical help, dignity, and the belief that caring for society is a shared responsibility."
          />
          <div className="about-grid">
            <article className="about-copy">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80"
                alt="Volunteers organizing donated supplies for a community support program"
                loading="lazy"
              />
              <p>
                HopeBridge Foundation is a social impact initiative created to support underserved
                communities through education, awareness, and practical help. The mission is simple:
                make it easier for people to care, contribute, and stand beside communities that
                need support.
              </p>
            </article>
            <div className="value-grid">
              {values.map((value) => (
                <article className="value-card" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="causes">
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="Causes that turn care into action"
            text="Every cause is a chance to help someone learn, eat, grow, heal, or feel less alone."
          />
          <div className="cause-grid">
            {causes.map((cause) => (
              <article className="cause-card" key={cause.title}>
                <img src={cause.image} alt={cause.alt} loading="lazy" />
                <div className="cause-icon" aria-hidden="true">
                  {cause.icon}
                </div>
                <h3>{cause.title}</h3>
                <p>{cause.text}</p>
                <a href="#contact">Support This Cause</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <SectionHeader
            eyebrow="HOW WE HELP"
            title="Simple ways to show up for others"
            text="Whether you give time, resources, or awareness, your support can become practical help for someone else."
          />
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section impact-section" id="impact">
          <SectionHeader
            eyebrow="OUR IMPACT"
            title="Every number points to a human moment"
            text="These demo impact figures show how small actions can add up to relief, confidence, and community connection."
          />
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <SectionHeader
            eyebrow="FIELD MOMENTS"
            title="Moments where hope becomes visible"
            text="Images help visitors feel the heart of the work: learning, sharing, volunteering, and protecting the world around us."
          />
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure className="gallery-card" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section testimonials-section" id="testimonials">
          <SectionHeader
            eyebrow="VOICES OF TRUST"
            title="Why people choose to care"
            text="These demo voices reflect the warmth, trust, and responsibility that strong community work can inspire."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeader
            eyebrow="GET INVOLVED"
            title="Start with one helpful step"
            text="Your time, support, or kindness can become someone’s turning point. Reach out to volunteer, donate, or collaborate."
          />
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell us how you would like to help" required />
              </label>
              <button type="submit">Send Message</button>
            </form>
            <aside className="contact-details">
              <h3>HopeBridge Foundation</h3>
              <p>
                Change begins when someone decides to care. Use this demo contact area to show how
                supporters, volunteers, and partners can take the first step.
              </p>
              <a href="mailto:hello@hopebridge.org">hello@hopebridge.org</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <span>India</span>
            </aside>
          </div>
        </section>
        <section className="final-cta" aria-labelledby="final-cta-title">
          <div>
            <p className="eyebrow">START HELPING TODAY</p>
            <h2 id="final-cta-title">Your support can become someone’s turning point.</h2>
            <span>
              Whether you donate, volunteer, or simply spread the word, your action can help create
              real change.
            </span>
          </div>
          <div className="final-cta-actions">
            <a className="button primary" href="#contact">
              Donate Now
            </a>
            <a className="button secondary" href="#services">
              Join as Volunteer
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>HopeBridge Foundation</h2>
          <p>Connecting people with practical ways to support brighter, healthier communities.</p>
        </div>
        <div className="footer-links" aria-label="Footer quick links">
          <a href="#about">About</a>
          <a href="#causes">Causes</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links" aria-label="Social media placeholders">
          <a href="#home">Facebook</a>
          <a href="#home">Instagram</a>
          <a href="#home">LinkedIn</a>
        </div>
        <p className="copyright">
          © 2026 HopeBridge Foundation. Demo website created using AI tools.
        </p>
      </footer>
    </>
  );
}

export default App;
