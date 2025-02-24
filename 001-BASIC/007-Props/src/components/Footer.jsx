
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <h2>Webflix</h2>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Webflix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
