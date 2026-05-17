import React from 'react';

const navItems = ['Home', 'About', 'Causes', 'Services', 'Impact', 'Contact'];

const values = [
  {
    title: 'Compassion',
    text: 'We lead with empathy and respect for every person, place, and life we support.',
  },
  {
    title: 'Community',
    text: 'We bring volunteers, donors, and local groups together around practical action.',
  },
  {
    title: 'Action',
    text: 'We focus on clear, helpful programs that can create visible change in daily life.',
  },
];

const causes = [
  {
    icon: '📚',
    title: 'Education Support',
    text: 'Learning kits, mentoring support, and student-friendly awareness activities.',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
    alt: 'Children learning together in a classroom setting',
  },
  {
    icon: '🍲',
    title: 'Food Distribution',
    text: 'Community meal drives and essential food support for families in need.',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
    alt: 'Volunteers preparing food support packages for distribution',
  },
  {
    icon: '🌸',
    title: 'Women Empowerment',
    text: 'Confidence-building sessions, wellness awareness, and skill-focused support.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Women collaborating during a group learning session',
  },
  {
    icon: '🐾',
    title: 'Animal Welfare',
    text: 'Awareness programs encouraging kindness, care, and responsible local action.',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80',
    alt: 'Person gently caring for a dog outdoors',
  },
  {
    icon: '🌿',
    title: 'Environmental Awareness',
    text: 'Clean-up activities, green campaigns, and simple sustainability education.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    alt: 'Hands holding a young green plant for environmental awareness',
  },
  {
    icon: '🛠️',
    title: 'Skill Development',
    text: 'Introductory workshops that help young people explore practical life skills.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Student using a laptop during a skill development workshop',
  },
];

const services = [
  'Volunteer Programs',
  'Donation Drives',
  'Community Awareness Campaigns',
  'Student Support Programs',
  'Event-Based Outreach',
  'NGO Partnership Support',
];

const stats = [
  { number: '500+', label: 'Meals Distributed' },
  { number: '120+', label: 'Students Supported' },
  { number: '80+', label: 'Volunteers' },
  { number: '15+', label: 'Community Events' },
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
      'Volunteering with HopeBridge felt organized, welcoming, and focused on small actions that matter.',
    name: 'Demo Volunteer',
    role: 'Community volunteer',
  },
  {
    quote:
      'The foundation presents a clear way for supporters to contribute to education and food support drives.',
    name: 'Demo Donor',
    role: 'Monthly supporter',
  },
  {
    quote:
      'The awareness event was simple, respectful, and useful for families in our neighborhood.',
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
            <p className="eyebrow">Demo NGO website</p>
            <h1>Building Hope, One Community at a Time</h1>
            <p>
              HopeBridge Foundation supports communities through education, food assistance,
              women empowerment, animal welfare, and environmental action.
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
              <span>Community-first support</span>
              <strong>Education, food assistance, and care programs for everyday needs.</strong>
            </figcaption>
          </figure>
        </section>

        <section className="section about-section" id="about">
          <SectionHeader eyebrow="About" title="About HopeBridge Foundation" />
          <div className="about-grid">
            <article className="about-copy">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80"
                alt="Volunteers organizing donated supplies for a community support program"
                loading="lazy"
              />
              <p>
                HopeBridge Foundation is a social impact initiative created to support underserved
                communities through education, awareness, and practical help. Our mission is to
                create opportunities, provide essential support, and bring people together for
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
            eyebrow="Causes"
            title="Programs Designed Around Everyday Needs"
            text="Each cause is written as demo content for an AI website generation task."
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
            eyebrow="Services"
            title="Practical Ways HopeBridge Can Help"
            text="Flexible outreach formats for volunteers, donors, students, and community groups."
          />
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section impact-section" id="impact">
          <SectionHeader eyebrow="Impact" title="Demo Impact Snapshot" />
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <SectionHeader eyebrow="Gallery" title="Work Preview" />
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
          <SectionHeader eyebrow="Testimonials" title="Demo Community Feedback" />
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
          <SectionHeader eyebrow="Contact" title="Start a Conversation" />
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
