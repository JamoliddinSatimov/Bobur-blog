import { Link } from 'react-router-dom';

import footerLogo from '../../assets/logos/logo-footer.svg';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__left-side">
            <Link to={'/'}>
              <img className="footer__main-logo" src={footerLogo} alt="footerLogo" />
            </Link>
          </div>
          <div className="footer__right-side">
            <ul className="footer__nav-items">
              <h3>FIGHT WITH ME ON:</h3>
              <li className="footer__nav-item">
                <Link to={'/'}>Twitter</Link>
              </li>
              <li className="footer__nav-item active">
                <Link to={'/'}>Instagram</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>Telegram</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>YouTube</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>Figma</Link>
              </li>
            </ul>
            <ul className="footer__nav-items">
              <h3>WHAT I HAVE DONE:</h3>
              <li className="footer__nav-item">
                <Link to={'/'}>Xalq kutubxonasi</Link>
              </li>
              <li className="footer__nav-item active">
                <Link to={'/'}>Websites</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>Website</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>Play Market</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>App Store</Link>
              </li>
            </ul>
            <ul className="footer__nav-items">
              <p>Contact</p>
              <li className="footer__nav-item active">
                <Link to={'/'}>Blog</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>Dribble</Link>
              </li>
              <li className="footer__nav-item">
                <Link to={'/'}>Behance</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
