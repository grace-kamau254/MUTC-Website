import "./Nav.css"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Murang'a University Tech Club</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/leadership">Leadership</NavLink></li>
          <li><NavLink to="/tracks">Tracks</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
        </ul>
      </nav>
      <div className="cta">
        <a href="/register" className="btn-register">Join Us</a>
      </div>
    </header>
  );
};

export default Header;
