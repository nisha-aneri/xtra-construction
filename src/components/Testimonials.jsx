import { useEffect, useState } from 'react';
import { logos, testimonials } from '../data/site.js';
import { ArrowLeft, ArrowRight } from './Icons.jsx';
import SectionTag from './SectionTag.jsx';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setTimeout(() => setIndex((value) => (value + 1) % testimonials.length), 9000);
    return () => window.clearTimeout(timer);
  }, [index, paused]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <header className="section-head section-head-center" data-reveal>
          <SectionTag gold="TESTIMONIALS" muted="SEE WHAT SAYS OUR HAPPY CLIENTS" center />
          <h2 className="section-title">Our happy customers</h2>
        </header>

        <div
          className="testimonial-carousel"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <button type="button" className="carousel-arrow prev" onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">
            <ArrowLeft />
          </button>
          <div className="testimonial-card" key={index}>
            <div className="testimonial-avatar">
              <img src={active.avatar} alt={active.name} loading="lazy" width="200" height="200" />
              <span className="quote-mark" aria-hidden="true">
                ”
              </span>
            </div>
            <div className="testimonial-body">
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>{active.quote}</blockquote>
              <p className="testimonial-name">
                <strong>{active.name}</strong>
                <span>{active.role}</span>
              </p>
            </div>
          </div>
          <button type="button" className="carousel-arrow next" onClick={() => setIndex((value) => (value + 1) % testimonials.length)} aria-label="Next testimonial">
            <ArrowRight />
          </button>
          <div className="carousel-dots" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((item, dotIndex) => (
              <button
                type="button"
                key={item.name}
                className={dotIndex === index ? 'is-active' : ''}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show testimonial from ${item.name}`}
                aria-selected={dotIndex === index}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logo-strip">
        <div className="container logo-strip-inner">
          {logos.map((logo) => (
            <span className="logo-item" key={logo.src}>
              <img src={logo.src} alt={logo.alt} loading="lazy" width="140" height="60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
