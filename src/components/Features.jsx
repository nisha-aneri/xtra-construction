import { features } from '../data/site.js';
import { ArrowRight } from './Icons.jsx';
import SectionTag from './SectionTag.jsx';

export default function Features() {
  return (
    <section id="features" className="features section-dark">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <img className="hat-mark" src="/images/safety-icon.png" alt="" width="80" height="67" />
          <SectionTag gold="FEATURES AT A GLANCE" muted="" light center />
          <h2 className="section-title light">We know what your needs are</h2>
        </header>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title} data-reveal style={{ '--delay': `${index * 120}ms` }}>
              <a className="feature-media" href="#services" aria-label={`Learn more about ${feature.title}`}>
                <img src={feature.image} alt={feature.title} loading="lazy" width="800" height="600" />
                <span className="feature-media-overlay" aria-hidden="true" />
              </a>
              <div className="feature-body">
                <h3>
                  <a href="#services">{feature.title}</a>
                </h3>
                <p>{feature.text}</p>
                <a className="text-link" href="#services">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
