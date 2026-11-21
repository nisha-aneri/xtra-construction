import { useEffect, useRef, useState } from 'react';
import { navLinks, pagesMenu, services, projects } from '../data/site.js';
import {
  ChevronDown,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  SearchIcon,
  TwitterIcon,
} from './Icons.jsx';

const searchIndex = [
  ...navLinks.map((link) => ({ label: link.label, href: link.href, group: 'Page' })),
  ...services.map((service) => ({ label: service.title, href: '#services', group: 'Service' })),
  ...projects.slice(0, 4).map((project) => ({ label: project.title, href: '#projects', group: 'Project' })),
];

function PromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-inner">
        <a className="promo-brand" href="#home" aria-label="Envato Market">
          <span className="promo-leaf" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="promo-envato">envato</span>
          <span className="promo-market">market</span>
        </a>
        <p className="promo-offer">
          Limited time offer, Buy XTRA WordPress theme only <strong>$39</strong>
        </p>
        <a
          className="promo-cta"
          href="https://1.envato.market/xtra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download XTRA Theme
        </a>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-contact">
          <span>Have any questions? call us</span>
          <a href="tel:0018182345678">
            <span className="topbar-phone-ico">
              <PhoneIcon size={15} />
            </span>
            +1 (818) 23 45 678
          </a>
        </div>
        <ul className="socials" aria-label="Social media">
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
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return undefined;
    }
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open, onClose]);

  if (!open) return null;

  const term = query.trim().toLowerCase();
  const results = term
    ? searchIndex.filter((item) => item.label.toLowerCase().includes(term))
    : searchIndex.slice(0, 7);

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search">
      <button className="search-close" onClick={onClose} aria-label="Close search">
        &times;
      </button>
      <div className="search-panel">
        <form
          className="search-form"
          onSubmit={(event) => {
            event.preventDefault();
            const first = results[0];
            if (first) {
              onClose();
              window.location.hash = first.href;
            }
          }}
        >
          <SearchIcon size={26} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services, projects, pages…"
            aria-label="Search the site"
          />
        </form>
        <ul className="search-results">
          {results.length === 0 && <li className="search-empty">No results for “{query}”.</li>}
          {results.map((item, index) => (
            <li key={`${item.group}-${item.label}-${index}`}>
              <a href={item.href} onClick={onClose}>
                <span>{item.label}</span>
                <em>{item.group}</em>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <PromoBar />
        <TopBar />
        <div className="main-header">
          <div className="container header-inner">
            <a className="brand" href="#home" aria-label="XTRA Construction — home">
              <img src="/images/logo-construction.png" alt="XTRA Construction" width="540" height="200" />
            </a>

            <nav className="primary-nav" aria-label="Primary">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={link.home ? 'nav-home' : undefined}>
                      {link.home ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3z" />
                        </svg>
                      ) : null}
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
                <li
                  className={`has-dropdown${pagesOpen ? ' is-open' : ''}`}
                  onMouseEnter={() => setPagesOpen(true)}
                  onMouseLeave={() => setPagesOpen(false)}
                >
                  <button
                    type="button"
                    className="dropdown-toggle"
                    aria-expanded={pagesOpen}
                    onClick={() => setPagesOpen((value) => !value)}
                  >
                    Pages <ChevronDown />
                  </button>
                  <ul className="dropdown">
                    {pagesMenu.map((page) => (
                      <li key={page.label}>
                        <a href={page.href} onClick={() => setPagesOpen(false)}>
                          {page.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a href="#quote">Contact</a>
                </li>
              </ul>
            </nav>

            <div className="header-actions">
              <button
                type="button"
                className="icon-btn search-toggle"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
              >
                <SearchIcon />
              </button>
              <a className="btn btn-header" href="#quote">
                Free Consultation
              </a>
              <button
                type="button"
                className={`hamburger${menuOpen ? ' is-active' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="drawer-backdrop" onClick={closeMenu} />
        <div className="drawer-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="drawer-head">
            <img src="/images/logo-construction.png" alt="XTRA Construction" width="540" height="200" />
            <button type="button" className="drawer-close" onClick={closeMenu} aria-label="Close menu">
              &times;
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul className="drawer-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#quote" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
            <p className="drawer-label">Pages</p>
            <ul className="drawer-links drawer-sub">
              {pagesMenu.map((page) => (
                <li key={page.label}>
                  <a href={page.href} onClick={closeMenu}>
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="drawer-phone" href="tel:0018182345678">
            <PhoneIcon /> +1 (818) 23 45 678
          </a>
          <ul className="socials drawer-socials">
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
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
