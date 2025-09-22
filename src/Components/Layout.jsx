// Components/Layout.jsx
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Layout() {
  return (
    <header className="layout-header">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
          <span className="logo-text">Suha Oudeh</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
