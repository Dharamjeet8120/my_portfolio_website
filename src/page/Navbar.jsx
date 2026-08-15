import { useState } from 'react';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="sticky-top bg-dark border-bottom border-secondary text-white shadow-lg ">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark container py-2 px-3 rounded shadow-lg   ">
        <a className="navbar-brand font-weight-bold text-primary" href="#"  >
          Dharamjeet<span className="text-light">.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-3 mb-md-3 align-items-md-center">
            <li className="nav-item">
              <a className="nav-link text-light px-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-3" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-3" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-3" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-3" href="#contact">Contact</a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;