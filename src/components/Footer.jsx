import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, TwitterIcon, YoutubeIcon } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/footer-logo-construction.png" alt="XTRA Construction" width="540" height="200" loading="lazy" />
          <p>
            A company is any entity that engages in business. Companies can be structured in different ways. For example,
            your company can be a sole proprietorship, a partnership, or a corporation.
          </p>
          <ul className="socials footer-socials">
            <li>
              <a href="https://www.facebook.com/XtraTheme" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Xtra_Theme" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/XtraTheme/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#quote">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Building</a></li>
            <li><a href="#services">Road Construction</a></li>
            <li><a href="#services">Maintenance</a></li>
            <li><a href="#services">Building Engineering</a></li>
            <li><a href="#services">Safety First</a></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <PinIcon />
              <span>1234 Building Avenue,<br />Los Angeles, CA 90015</span>
            </li>
            <li>
              <PhoneIcon />
              <a href="tel:0018182345678">+1 (818) 23 45 678</a>
            </li>
            <li>
              <MailIcon />
              <a href="mailto:info@xtraconstruction.com">info@xtraconstruction.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} XTRA, Powered by WordPress</p>
          <ul>
            <li><a href="#quote">Contact Us</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#home">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
