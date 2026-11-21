import { processSteps } from '../data/site.js';
import SectionTag from './SectionTag.jsx';

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container process-grid">
        <div className="process-media" data-reveal>
          <div className="process-intro">
            <SectionTag gold="HOW?" muted="PROCESS OF CONSTRUCTION" />
            <h2 className="section-title">
              How it works
              <br />
              in construction?
            </h2>
            <p className="lead">
              Slogan creation for your construction company is crucial for the overall branding.
            </p>
          </div>
          <div className="process-image">
            <img src="/images/process.jpg" alt="Engineers inspecting a construction site" loading="lazy" width="650" height="370" />
          </div>
        </div>

        <ol className="process-steps">
          {processSteps.map((step, index) => (
            <li className="process-step" key={step.number} data-reveal style={{ '--delay': `${index * 110}ms` }}>
              <span className="process-number">{step.number}</span>
              <div className="process-step-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
