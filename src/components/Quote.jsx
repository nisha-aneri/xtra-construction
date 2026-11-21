import { useState } from 'react';
import { departments } from '../data/site.js';
import { CheckIcon } from './Icons.jsx';
import SectionTag from './SectionTag.jsx';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  department: departments[0],
  message: '',
};

export default function Quote() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) nextErrors.email = 'Please enter a valid email address.';
    if (!values.message.trim()) nextErrors.message = 'Please tell us about your project.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSent(true);
  };

  return (
    <section id="quote" className="quote">
      <div className="container quote-grid">
        <div className="quote-copy" data-reveal>
          <SectionTag gold="QUOTE" muted="INTERESTED IN CONSTRUCTION?" light />
          <h2 className="section-title light">Request a free and fair quote</h2>
          <p>
            Slogan creation for your construction company is crucial for the overall branding. And branding in today’s
            world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it on social media.
          </p>
          <ul className="quote-points">
            <li>
              <CheckIcon /> Free on-site assessment
            </li>
            <li>
              <CheckIcon /> Transparent, itemised pricing
            </li>
            <li>
              <CheckIcon /> Response within one business day
            </li>
          </ul>
          <div className="quote-call">
            <span>Or call us directly</span>
            <a href="tel:0018182345678">+1 (818) 23 45 678</a>
          </div>
        </div>

        <div className="quote-form-wrap" data-reveal style={{ '--delay': '140ms' }}>
          {sent ? (
            <div className="quote-success" role="status">
              <span className="success-check">
                <CheckIcon />
              </span>
              <h3>Thank you, {values.name.split(' ')[0]}!</h3>
              <p>Your quote request has been received. Our team will get back to you within one business day.</p>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => {
                  setValues(initialValues);
                  setSent(false);
                }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit} noValidate aria-label="Request a quote">
              <div className="form-row">
                <label className={`field${errors.name ? ' has-error' : ''}`}>
                  <span>
                    Your Name <em>(required)</em>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={update('name')}
                    required
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <small role="alert">{errors.name}</small>}
                </label>
                <label className={`field${errors.email ? ' has-error' : ''}`}>
                  <span>
                    Your Email <em>(required)</em>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={update('email')}
                    required
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <small role="alert">{errors.email}</small>}
                </label>
              </div>
              <div className="form-row">
                <label className="field">
                  <span>Subject</span>
                  <input type="text" name="subject" value={values.subject} onChange={update('subject')} />
                </label>
                <label className="field">
                  <span>Departemant</span>
                  <select name="department" value={values.department} onChange={update('department')}>
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className={`field${errors.message ? ' has-error' : ''}`}>
                <span>Your Message</span>
                <textarea name="message" rows="4" value={values.message} onChange={update('message')} aria-invalid={Boolean(errors.message)} />
                {errors.message && <small role="alert">{errors.message}</small>}
              </label>
              <button type="submit" className="btn btn-gold quote-send">
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
