
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <div className="contact-info">
        <p>Contact us at: info@mutc.ac.ke</p>
      </div>
      <div className="legal">
        <p>&copy; 2025 Murang'a University Tech Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
