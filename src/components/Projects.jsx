import { projects } from '../data/site.js';
import { PlusIcon } from './Icons.jsx';
import SectionTag from './SectionTag.jsx';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <SectionTag gold="SERVICES" muted="WE ARE PROFESSIONAL" center />
          <h2 className="section-title">Our latest projects</h2>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              className="project-card"
              key={project.title}
              href="#quote"
              data-reveal
              style={{ '--delay': `${(index % 4) * 90}ms` }}
              aria-label={`${project.title} — ${project.category}`}
            >
              <img src={project.image} alt={project.title} loading="lazy" width="600" height="600" />
              <span className="project-overlay" aria-hidden="true" />
              <span className="project-plus" aria-hidden="true">
                <PlusIcon />
              </span>
              <span className="project-info">
                <span className="project-category">{project.category}</span>
                <strong>{project.title}</strong>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
