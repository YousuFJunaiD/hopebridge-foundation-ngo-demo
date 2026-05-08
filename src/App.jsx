import React from 'react';

const portfolio = {
  name: 'Umme Hani Khanam',
  initials: 'UH',
  status: 'Available for Opportunities',
  role: 'Engineering Functional Systems',
  intro: 'I build scalable systems and craft clean interactive user experiences.',
  resume:
    'https://drive.google.com/file/d/1B61_lTwKbuSd4SPQpkjiJdGOOioMx4aG/view?usp=sharing',
  about: [
    'I’m a Full Stack Developer focused on designing scalable backend architectures and clean, intentional interfaces.',
    'I translate complex real-world problems into structured, production-ready digital systems with thoughtful architecture.',
    'My approach blends engineering clarity, performance optimization, and user-centered design to deliver systems that are both reliable and refined.',
  ],
  skills: [
    { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { group: 'Backend', items: ['Node.js', 'Express'] },
    { group: 'Database', items: ['Supabase', 'PostgreSQL', 'LocalStorage'] },
    { group: 'Tools & Languages', items: ['C', 'C++', 'Java', 'Python', 'Git', 'GitHub'] },
  ],
  experience: [
    {
      title: 'AI Content Creation Department Manager Intern',
      meta: 'Jan 2026 - Feb 2026 · Hadi & Taimur (Remote)',
      points: [
        'Developed AI-assisted campaign scripts for IPO Genie',
        'Collaborated with cross-functional teams',
        'Optimized content using trend analysis',
      ],
    },
    {
      title: 'Graphic Designer',
      meta: 'Jan 2023 – Jan 2026 · Girls Islamic Organization (Remote)',
      points: [
        'Designed promotional assets',
        'Increased event participation by 70+',
        'Maintained brand consistency',
      ],
    },
  ],
  projects: [
    {
      title: 'Todo Companion',
      problem:
        'Problem: Users struggle with structured task tracking and productivity consistency.',
      solution:
        'Solution: Built a full-stack AI-powered task manager with authentication and cloud database integration.',
      features: [
        'Secure authentication',
        'Supabase PostgreSQL database',
        'Real-time CRUD operations',
        'Task status tracking',
      ],
      responsibilities: [
        'Designed full-stack architecture',
        'Integrated Supabase Auth + DB',
        'Built REST interactions',
        'Managed application state flow',
      ],
      tech: 'React.js · Supabase · REST APIs',
      links: [{ label: 'Live Demo', href: 'https://todo-companion.vly.site/' }],
    },
    {
      title: 'Home Renovation Tracker',
      problem:
        'Problem: Home renovation projects involve managing tasks, expenses, materials, shopping, and permits. Without a centralized system, projects become disorganized, budgets are difficult to control, and important activities may be missed.',
      solution:
        'Solution: Developed a full-stack Home Renovation Tracker that centralizes project management with task, expense, inventory, shopping, and permit tracking. Integrated Gemini AI to generate renovation inspiration and estimate required materials, supported by a dashboard for monitoring project progress and resources.',
      features: [
        'Task and renovation progress tracking',
        'Expense management and budgeting',
        'Inventory and shopping list management',
        'AI-powered renovation inspiration',
        'AI-based material estimation',
        'Permit tracking for approvals',
        'Project dashboard overview',
      ],
      responsibilities: [
        'Designed full-stack architecture and REST APIs',
        'Integrated Gemini AI for inspiration and material estimation',
        'Built responsive React UI and dashboard',
        'Implemented backend logic for project, task, and expense management',
      ],
      tech: 'React · Node.js · Express.js · REST APIs · Gemini AI · MySQL/Supabase',
      links: [
        { label: 'Live Demo', href: 'https://homerenovationtracker.netlify.app/' },
        {
          label: 'GitHub',
          href: 'https://github.com/Umme-Hani-Khanam/home-renovation-frontend',
        },
      ],
    },
  ],
  contact: [
    {
      label: 'Email',
      href: 'mailto:khanamummehani100@gmail.com?subject=Portfolio Inquiry - Umme Hani Khanam&body=Hello Umme Hani,',
      value: 'khanamummehani100@gmail.com',
    },
    { label: 'GitHub', href: 'https://github.com/Umme-Hani-Khanam', value: 'Umme-Hani-Khanam' },
    { label: 'LinkedIn', href: 'https://linkedin.com', value: 'LinkedIn' },
  ],
};

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-header reveal">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#top" className="brand" aria-label="Umme Hani Khanam home">
          {portfolio.initials}
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="status">{portfolio.status}</p>
            <h1>{portfolio.name}</h1>
            <h2>{portfolio.role}</h2>
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#Projects">
                View Projects
              </a>
              <a className="button secondary" href="#Contact">
                Contact Me
              </a>
              <a className="button secondary" href={portfolio.resume} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </div>
          </div>

          <aside className="hero-card reveal" aria-label="Portfolio overview">
            <div className="portrait">{portfolio.initials}</div>
            <p>Full Stack Developer</p>
            <h3>Scalable systems with refined user experiences.</h3>
            <div className="mini-stats">
              <span>React</span>
              <span>Node.js</span>
              <span>Supabase</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section about" id="About">
        <SectionHeader eyebrow="About" title="Engineering clarity with intentional design" />
        <div className="about-grid">
          <div className="about-card reveal">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="highlight-grid reveal">
            <div>
              <span>Focus</span>
              <strong>Backend architecture</strong>
            </div>
            <div>
              <span>Approach</span>
              <strong>User-centered systems</strong>
            </div>
            <div>
              <span>Output</span>
              <strong>Reliable digital products</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="Skills">
        <SectionHeader eyebrow="Skills" title="Technical Skills" />
        <div className="skills-grid">
          {portfolio.skills.map((skillGroup) => (
            <article className="glass-card skill-card reveal" key={skillGroup.group}>
              <h3>{skillGroup.group}</h3>
              <div className="pills">
                {skillGroup.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="Experience">
        <SectionHeader eyebrow="Experience" title="Professional Journey" />
        <div className="timeline">
          {portfolio.experience.map((role) => (
            <article className="timeline-item reveal" key={role.title}>
              <div className="timeline-dot" />
              <div className="glass-card">
                <h3>{role.title}</h3>
                <p className="meta">{role.meta}</p>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="Projects">
        <SectionHeader eyebrow="Featured Work" title="Projects built around real problems" />
        <div className="projects-grid">
          {portfolio.projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-topline">
                <span>Featured Project</span>
                <span>{project.tech}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.problem}</p>
              <p>{project.solution}</p>
              <div className="project-columns">
                <div>
                  <h4>Core Features</h4>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>My Responsibilities</h4>
                  <ul>
                    {project.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="Contact">
        <div className="contact-panel reveal">
          <p className="status">Let’s work together</p>
          <h2>Open to thoughtful collaborations and opportunities.</h2>
          <div className="contact-links">
            {portfolio.contact.map((item) => (
              <a href={item.href} key={item.label} target={item.label === 'Email' ? undefined : '_blank'} rel="noreferrer">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>Designed & Built by Umme Hani Khanam · 2026</footer>
    </main>
  );
}

export default App;
