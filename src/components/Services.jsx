import { services } from '../data/site.js';
import { ArrowRight } from './Icons.jsx';
import SectionTag from './SectionTag.jsx';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <SectionTag gold="SERVICES" muted="WHAT WE CAN DO FOR YOU" center />
          <h2 className="section-title">Our construction services</h2>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title} data-reveal style={{ '--delay': `${index * 120}ms` }}>
              <span className="service-icon">
                <img src={service.icon} alt="" loading="lazy" width="80" height="80" aria-hidden="true" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="service-link" href="#projects">
                Read More <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="cta-band" data-reveal>
          <div className="cta-band-icon">
            <img src="/images/safety-icon.png" alt="" width="80" height="67" />
          </div>
          <div className="cta-band-copy">
            <h3>
              Building a dream <span>shouldn’t be a nightmare!</span>
            </h3>
            <p>We have transforming the ideas and visions into winning projects.</p>
          </div>
          <a className="btn btn-gold" href="#quote">
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
