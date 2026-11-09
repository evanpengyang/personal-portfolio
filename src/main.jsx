import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { experience, heroPhotos, leadershipExperience, photoSections, profile, projects } from "./data";
import "./styles.css";

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;
const UbcCrest = () => <span className="ubc-crest-frame" aria-hidden="true"><img className="ubc-crest" src="https://brand3.sites.olt.ubc.ca/files/2018/09/2Crest_ex_768.png" alt="" /></span>;
const sectionTargets = [
  { id: "work", label: "Projects", direction: "down" },
  { id: "experience", label: "Experiences", direction: "down" },
  { id: "about", label: "About", direction: "down" },
  { id: "contact", label: "Contact", direction: "down" },
  { id: "top", label: "Top", direction: "up" },
];

function NextSectionArrow({ direction }) {
  return (
    <svg className={`next-section-arrow ${direction === "up" ? "is-up" : ""}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16M6 14l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.46 8.02h4.08V23H.46V8.02ZM7.1 8.02h3.91v2.05h.06c.54-1.03 1.88-2.12 3.87-2.12C19 7.95 20 10.6 20 14.05V23h-4.07v-7.92c0-1.89-.03-4.32-2.63-4.32-2.64 0-3.05 2.06-3.05 4.18V23H6.18V8.02H7.1Z" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.25.77-.54v-2.18c-3.13.68-3.79-1.33-3.79-1.33-.5-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.12.08 1.72 1.18 1.72 1.18 1.02 1.72 2.65 1.22 3.3.94.1-.72.4-1.22.73-1.5-2.5-.28-5.14-1.25-5.14-5.58 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15A10.7 10.7 0 0 1 12 5.14c.96 0 1.93.13 2.83.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.8 1.16 1.8 1.16 3.02 0 4.34-2.65 5.3-5.16 5.57.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 1h9.2A6.4 6.4 0 0 1 23 7.4v9.2a6.4 6.4 0 0 1-6.4 6.4H7.4A6.4 6.4 0 0 1 1 16.6V7.4A6.4 6.4 0 0 1 7.4 1Zm-.2 2.2A4 4 0 0 0 3.2 7.2v9.6a4 4 0 0 0 4 4h9.6a4 4 0 0 0 4-4V7.2a4 4 0 0 0-4-4H7.2Zm10.55 1.65a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9ZM12 6.35A5.65 5.65 0 1 1 6.35 12 5.65 5.65 0 0 1 12 6.35Zm0 2.2A3.45 3.45 0 1 0 15.45 12 3.45 3.45 0 0 0 12 8.55Z" /></svg>;
}

function HeroPhotoStack({ photos }) {
  const [photoOrder, setPhotoOrder] = useState(() => photos.map((_, index) => index));

  const showNext = () => {
    setPhotoOrder((order) => [...order.slice(1), order[0]]);
  };

  return (
    <div className="hero-photo-stack" aria-label="Photo gallery">
      {photoOrder.map((photoIndex, position) => {
        const photo = photos[photoIndex];
        const isFront = position === 0;
        return (
          <button
            className={`stack-card stack-card-position-${position}`}
            type="button"
            key={photo.id ?? photo.src}
            onClick={showNext}
            disabled={!isFront}
            tabIndex={isFront ? 0 : -1}
            aria-label={isFront ? "Show next photo" : undefined}
            aria-hidden={!isFront}
          >
            <img src={photo.src} alt={isFront ? photo.alt : ""} />
          </button>
        );
      })}
    </div>
  );
}

function ProjectArtwork({ type }) {
  if (type === "etika-reveal") {
    return (
      <div className="art art-etika" aria-hidden="true">
        <iframe loading="lazy" src="/photos/etika%20Logo%20Reveal%20(1).html?cover=1" title="" tabIndex="-1" sandbox="allow-scripts" />
      </div>
    );
  }

  if (type === "campus-eats") {
    return (
      <div className="art art-campus-eats" aria-hidden="true">
        <img src="/photos/campus-eats-logo.jpg" alt="" />
      </div>
    );
  }

  if (type === "chud-life") {
    return (
      <div className="art art-chud-life" aria-hidden="true">
        <img src="/photos/chud-life.png" alt="" />
      </div>
    );
  }

  if (type === "internship-tracker") {
    return (
      <div className="art art-internship-tracker" aria-hidden="true">
        <img src="/photos/internship-tracker.png" alt="" />
      </div>
    );
  }

  if (type === "psyflow") {
    return (
      <div className="art art-psyflow" aria-hidden="true">
        <img src="/photos/Screenshot%202026-11-08%20at%2012.19.24%E2%80%AFAM.png" alt="" />
      </div>
    );
  }

  if (type === "quiet-hours") {
    return (
      <div className="art art-quiet" aria-hidden="true">
        <div className="quiet-window">
          <div className="window-top"><i /><i /><i /></div>
          <div className="quiet-body">
            <span className="tiny-label">TODAY</span>
            <strong>Make space<br />for focus.</strong>
            <div className="focus-row"><span className="focus-ring" /> 01:24:09</div>
          </div>
        </div>
        <span className="orb orb-one" /><span className="orb orb-two" />
      </div>
    );
  }

  if (type === "commonplace") {
    return (
      <div className="art art-commonplace" aria-hidden="true">
        <div className="paper paper-back"><span>care for things<br />that grow</span></div>
        <div className="paper paper-front">
          <span className="tiny-label">COMMONPLACE</span>
          <div className="ink-lines"><i /><i /><i /><i /></div>
          <b>What is worth<br />remembering?</b>
          <span className="paper-date">22.10.26</span>
        </div>
        <span className="clip" />
      </div>
    );
  }

  return (
    <div className="art art-notes" aria-hidden="true">
      <div className="note note-one"><span>Things I am<br />noticing</span><i /></div>
      <div className="note note-two"><span>less, but<br />better</span><i /></div>
      <div className="note note-three"><span>keep<br />looking</span><i /></div>
      <div className="scribble">✳</div>
    </div>
  );
}

function ProjectPage({ project, onBack }) {
  return (
    <main className="project-page">
      <button className="project-back" type="button" onClick={onBack}><span aria-hidden="true">←</span> Back to work</button>
      <article className="project-case section-shell">
        <div className="project-case-intro">
          <div>
            <p className="section-index">Selected work</p>
            <h1>{project.title}</h1>
            {project.award && <p className="project-award">{project.award}</p>}
            <p className="project-case-summary">{project.description}</p>
            <a className="case-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a>
          </div>
          <ProjectArtwork type={project.type} />
        </div>
        <div className="project-case-body">
          <div><p className="section-index">The project</p></div>
          <p>{project.detail}</p>
          <div className="case-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
      </article>
    </main>
  );
}

function NextSectionButton({ target }) {
  const [visibleTarget, setVisibleTarget] = useState(target);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (target.id === visibleTarget.id) return undefined;

    setIsChanging(true);
    const transitionTimer = window.setTimeout(() => {
      setVisibleTarget(target);
      setIsChanging(false);
    }, 140);

    return () => window.clearTimeout(transitionTimer);
  }, [target, visibleTarget.id]);

  const buttonWidth = `${Math.min(157, Math.max(126, visibleTarget.label.length * 7 + 80))}px`;

  return (
    <a href={`#${target.id}`} className="next-section-button" aria-label={`Go to ${target.label}`} style={{ "--next-button-width": buttonWidth }}>
      <NextSectionArrow direction={visibleTarget.direction} />
      <span className={`next-section-label ${isChanging ? "is-changing" : ""}`}>To {visibleTarget.label}</span>
    </a>
  );
}

function projectSlugFromHash() {
  const prefix = "#project/";
  return window.location.hash.startsWith(prefix) ? window.location.hash.slice(prefix.length) : "";
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProjectSlug, setActiveProjectSlug] = useState(projectSlugFromHash);
  const [nextTarget, setNextTarget] = useState(sectionTargets[0]);

  useEffect(() => {
    if (activeProjectSlug) return undefined;

    const activeSections = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSections.add(entry.target.id);
        else activeSections.delete(entry.target.id);
      });

      const activeIndex = sectionTargets.slice(0, -1).findIndex((target) => activeSections.has(target.id));
      const target = activeIndex === -1 ? sectionTargets[0] : sectionTargets[activeIndex + 1];
      setNextTarget((current) => (current === target ? current : target));
    }, { rootMargin: "-35% 0px -50% 0px", threshold: 0 });

    sectionTargets.slice(0, -1).forEach((target) => {
      const section = document.getElementById(target.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeProjectSlug]);

  useEffect(() => {
    const syncProjectRoute = () => setActiveProjectSlug(projectSlugFromHash());
    window.addEventListener("popstate", syncProjectRoute);
    window.addEventListener("hashchange", syncProjectRoute);
    return () => {
      window.removeEventListener("popstate", syncProjectRoute);
      window.removeEventListener("hashchange", syncProjectRoute);
    };
  }, []);

  useEffect(() => {
    if (activeProjectSlug) return undefined;

    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [activeProjectSlug]);

  const closeMenu = () => setMenuOpen(false);
  const openProject = (slug) => {
    window.history.pushState({}, "", `#project/${slug}`);
    setActiveProjectSlug(slug);
    window.scrollTo(0, 0);
  };
  const closeProject = () => {
    window.history.pushState({}, "", "#work");
    setActiveProjectSlug("");
    requestAnimationFrame(() => document.getElementById("work")?.scrollIntoView({ block: "start" }));
  };

  const activeProject = projects.find((project) => project.slug === activeProjectSlug);

  if (activeProject) return <ProjectPage project={activeProject} onBack={closeProject} />;

  return (
    <main>
      <header className="site-header is-visible">
        <a href="#top" className="wordmark" aria-label="Back to top" onClick={closeMenu}>
          <span className="wordmark-name">{profile.name}</span>
        </a>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experiences</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact <Arrow /></a>
        </nav>
      </header>
      <NextSectionButton target={nextTarget} />

      <section id="top" className="hero section-shell">
        <div className="hero-intro">
          <div className="hero-lead">
            <h1 className="home-title" aria-label="Hi, I'm Evan!"><span className="hero-reveal hero-reveal-title-one">Hi, I&apos;m Evan!</span></h1>
            <p className="hero-copy hero-reveal hero-reveal-copy">I love learning how things work, understanding what people need, and solving real problems.</p>
            <p className="hero-credential hero-reveal hero-reveal-meta"><UbcCrest /><span className="credential-text">UBC Business and Computer Science <b aria-hidden="true">|</b> Presidential Scholar</span></p>
            <div className="quick-links hero-reveal hero-reveal-links" aria-label="My quick links">
              <a className="linkedin-link" href="https://www.linkedin.com/in/evan-py-peng" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
              <a className="github-link" href="https://github.com/evanpengyang" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
              <a className="instagram-link" href="https://www.instagram.com/evan_fifi/" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
            </div>
          </div>
          <div className="hero-photo-stack-reveal hero-reveal hero-reveal-image"><HeroPhotoStack photos={heroPhotos} /></div>
        </div>
      </section>

      <section id="work" className="work section-shell scroll-reveal" data-reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project project-${index + 1}`} key={project.title}>
              <button type="button" className="project-link" onClick={() => openProject(project.slug)} aria-label={`Open ${project.title} project details`}>
                <ProjectArtwork type={project.type} />
                <div className="project-info">
                  <div className="project-topline"><span className="project-arrow"><Arrow /></span></div>
                  {project.award && <span className="project-award">{project.award}</span>}
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience section-shell scroll-reveal" data-reveal>
        <div className="section-heading">
          <p className="section-index">Experience</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <div className="experience-row" key={item.period + item.place}>
              <span className="period">{item.period}</span>
              <strong>{item.role}</strong>
              <span>{item.place}</span>
            </div>
          ))}
        </div>
        <div className="leadership-experience">
          <div className="section-heading">
            <p className="section-index">Leadership Experience</p>
          </div>
          <div className="experience-list">
            {leadershipExperience.map((item) => (
              <div className="experience-row" key={item.period + item.place}>
                <span className="period">{item.period}</span>
                <strong>{item.role}</strong>
                <span>{item.place}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about section-shell scroll-reveal" data-reveal>
        <div className="about-card">
          <div className="about-intro">
            <div className="about-column">
              <h3>Outside of Work</h3>
              <p>I love travelling, exploring different cultures, food, and experiences, anything which will give me future dad lore. In my free time you can catch me bouldering, swimming, working out and enjoying time with friends :)</p>
            </div>
            <div className="about-column about-philosophy">
              <h3>My Philosophy</h3>
              <p>I've always loved teaching, and in the far future aspire to be a professor. I've taught cadets leadership skills, young kids how to swim, and led a free chess tutoring program for elementary kids across BC. Teaching is my passion and the reason why I work hard to learn and grow.</p>
            </div>
          </div>
          <div className="photo-journal">
            <div className="journal-heading"><h3>A few moments</h3><p>Friends and Communities</p></div>
            {photoSections.length > 0 ? photoSections.map((section) => (
              <div className="photo-section" key={section.section}>
                <h4 className="photo-section-title">{section.section}</h4>
                <div className="photo-grid">
                  {section.photos.map((photo) => (
                    <figure className={`journal-photo ${photo.layout ?? ""} ${photo.caption ? "has-caption" : ""}`} key={photo.id ?? photo.src}>
                      <img src={photo.src} alt={photo.alt} />
                      {photo.caption && <figcaption className="photo-caption">{photo.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </div>
            )) : (
              <p className="photo-empty">No photos yet.</p>
            )}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer section-shell scroll-reveal" data-reveal>
        <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Evan Peng</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
