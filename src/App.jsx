import React from 'react';

const navItems = ['Home', 'About', 'Causes', 'Services', 'Impact', 'Contact'];

const values = [
  {
    title: 'Compassion',
    text: 'Care that begins with listening and dignity.',
  },
  {
    title: 'Community',
    text: 'People coming together to protect shared hope.',
  },
  {
    title: 'Action',
    text: 'Simple programs that make daily life easier.',
  },
];

const causes = [
  {
    icon: '📚',
    title: 'Education Support',
    text: 'Helping children stay curious, confident, and ready to learn.',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
    alt: 'Children learning together in a classroom setting',
  },
  {
    icon: '🍲',
    title: 'Food Distribution',
    text: 'Sharing meals and essentials with families who need support.',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
    alt: 'Volunteers preparing food support packages for distribution',
  },
  {
    icon: '🌸',
    title: 'Women Empowerment',
    text: 'Creating safe spaces for confidence, skills, and independence.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Women collaborating during a group learning session',
  },
  {
    icon: '🐾',
    title: 'Animal Welfare',
    text: 'Encouraging kindness, rescue awareness, and responsible care.',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80',
    alt: 'Person gently caring for a dog outdoors',
  },
  {
    icon: '🌿',
    title: 'Environmental Awareness',
    text: 'Inspiring cleaner neighborhoods and greener everyday habits.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    alt: 'Hands holding a young green plant for environmental awareness',
  },
  {
    icon: '🛠️',
    title: 'Skill Development',
    text: 'Opening doors through practical skills and guided learning.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Student using a laptop during a skill development workshop',
  },
];

const services = [
  {
    title: 'Volunteer Programs',
    text: 'Join local drives, mentoring sessions, and care-based outreach.',
  },
  {
    title: 'Donation Drives',
    text: 'Support food, learning kits, hygiene supplies, and essentials.',
  },
  {
    title: 'Awareness Campaigns',
    text: 'Help communities learn about health, environment, and safety.',
  },
  {
    title: 'Student Support',
    text: 'Encourage learners with resources, guidance, and motivation.',
  },
  {
    title: 'Event Outreach',
    text: 'Create focused support days for neighborhoods and schools.',
  },
  {
    title: 'NGO Partnerships',
    text: 'Collaborate with groups that share practical social goals.',
  },
];

const stats = [
  { number: '500+', label: 'Meals Distributed', text: 'Warm food support through demo community drives.' },
  { number: '120+', label: 'Students Supported', text: 'Learners reached through resources and encouragement.' },
  { number: '80+', label: 'Volunteers', text: 'People ready to give time, care, and practical help.' },
  { number: '15+', label: 'Community Events', text: 'Awareness and outreach moments planned for local needs.' },
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
      'HopeBridge makes volunteering feel personal, organized, and meaningful.',
    name: 'Demo Volunteer',
    role: 'Community volunteer',
  },
  {
    quote:
      'The donation journey feels clear, respectful, and connected to real needs.',
    name: 'Demo Donor',
    role: 'Monthly supporter',
  },
  {
    quote:
      'The community session felt warm, useful, and easy for families to trust.',
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
        <a className="nav-cta" href="#contact">
          Donate Now
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">HOPEBRIDGE FOUNDATION</p>
            <h1>Building Hope, One Community at a Time</h1>
            <p>
              A demo social impact foundation bringing education, meals, care, and green action
              closer to the people who need them most.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Donate Now
              </a>
              <a className="button secondary" href="#services">
                Become a Volunteer
              </a>
            </div>
          </div>
          <figure className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=82"
              alt="Smiling children gathered during a community support activity"
            />
            <figcaption>
              <span>COMMUNITY-FIRST SUPPORT</span>
              <strong>Every act of care becomes a bridge toward a safer, kinder tomorrow.</strong>
            </figcaption>
          </figure>
        </section>

        <section className="section about-section" id="about">
          <SectionHeader
            eyebrow="WHO WE ARE"
            title="A Small Bridge Between Care and Change"
            text="HopeBridge is presented as a demo NGO concept built around practical help, human dignity, and community trust."
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
                create opportunities, offer essential support, and bring people together for
                meaningful change.
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
            title="Our Causes"
            text="We support communities through education, food assistance, women empowerment, animal welfare, environmental care, and skill-building."
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
                <a href="#contact">Learn More</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <SectionHeader
            eyebrow="HOW WE HELP"
            title="Services Built for Real Community Needs"
            text="Clear, action-focused programs make it easier for volunteers, donors, and partners to contribute with purpose."
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
            title="Small Numbers, Meaningful Stories"
            text="These demo metrics show how a focused foundation can communicate progress with clarity and warmth."
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
            title="A Glimpse of Work in Action"
            text="Warm, human-centered visuals help visitors quickly understand the kind of support HopeBridge represents."
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
            title="What Support Can Feel Like"
            text="Simple demo testimonials show the emotional tone of a caring volunteer and donor community."
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
            title="Start a Conversation"
            text="Reach out to volunteer, support a drive, or explore a community partnership with this demo foundation."
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
                <textarea name="message" rows="5" placeholder="How would you like to help?" required />
              </label>
              <button type="submit">Submit</button>
            </form>
            <aside className="contact-details">
              <h3>HopeBridge Foundation</h3>
              <p>
                A demo social impact website for education, food support, women empowerment, animal
                care, and environmental awareness.
              </p>
              <a href="mailto:hello@hopebridge.org">hello@hopebridge.org</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <span>India</span>
            </aside>
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
