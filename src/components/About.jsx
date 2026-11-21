import { aboutPoints } from '../data/site.js';
import { CheckIcon } from './Icons.jsx';
import SectionTag from './SectionTag.jsx';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-media" data-reveal>
          <span className="about-frame" aria-hidden="true" />
          <img src="/images/about-company.jpg" alt="Construction team reviewing plans on site" loading="lazy" width="600" height="574" />
        </div>

        <div className="about-copy" data-reveal style={{ '--delay': '120ms' }}>
          <SectionTag gold="ABOUT" muted="ABOUT OUR COMPANY" />
          <h2 className="section-title">Always dedicated and devoted</h2>
          <p className="lead">
            Slogan creation for your construction company is crucial for the overall branding. And branding in today’s
            world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it on social media
            and related building communities.
          </p>
          <ul className="check-grid">
            {aboutPoints.map((point) => (
              <li key={point}>
                <span className="check-dot">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <a className="btn btn-dark" href="#services">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
