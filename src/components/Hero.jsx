import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, PlayIcon } from './Icons.jsx';

const SLIDE_DURATION = 8000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback((next) => {
    setIndex((current) => (next + 2) % 2);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    timer.current = window.setTimeout(() => setIndex((value) => (value + 1) % 2), SLIDE_DURATION);
    return () => window.clearTimeout(timer.current);
  }, [index, paused]);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') go(index + 1);
    if (event.key === 'ArrowLeft') go(index - 1);
  };

  return (
    <section
      id="home"
      className="hero"
      aria-roledescription="carousel"
      aria-label="Company highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <div className={`hero-slide hero-slide-one${index === 0 ? ' is-active' : ''}`} aria-hidden={index !== 0}>
        <div className="hero-art" aria-hidden="true">
          <span className="hero-band hero-band-1" />
          <span className="hero-band hero-band-2" />
          <span className="hero-band hero-band-3" />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              <span>START</span>
              <span>NEW</span>
              <span className="hero-gold">PROJECTS</span>
            </h1>
            <p>
              Don’t get framed by the competition,
              <br />
              trust our solid reputation.
            </p>
            <div className="hero-video-row">
              <a
                className="hero-play"
                href="https://www.youtube.com/watch?v=FyS_zcvmUr4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch the company video on YouTube"
              >
                <span className="hero-play-circle">
                  <PlayIcon />
                </span>
                <span className="hero-play-text">
                  <small>Watch video</small>
                  <strong>Why choose us?</strong>
                </span>
              </a>
            </div>
          </div>
          <div className="hero-figure">
            <img src="/images/man-model.png" alt="Construction engineer wearing a yellow hard hat" width="900" height="830" />
          </div>
        </div>
      </div>

      <div className={`hero-slide hero-slide-two${index === 1 ? ' is-active' : ''}`} aria-hidden={index !== 1}>
        <div className="hero-slide-bg" aria-hidden="true" />
        <div className="container hero-inner hero-inner-two">
          <div className="hero-quote-box">
            <span className="hero-quote-top">Committed to superior quality and results</span>
            <span className="hero-quote-bottom">We’ll get it done, like us there are none</span>
          </div>
        </div>
      </div>

      <div className="hero-controls">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide">
          <ArrowLeft />
        </button>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next slide">
          <ArrowRight />
        </button>
      </div>
      <div className="hero-progress" aria-hidden="true">
        <span className={index === 0 ? 'is-active' : ''} />
        <span className={index === 1 ? 'is-active' : ''} />
      </div>
    </section>
  );
}
