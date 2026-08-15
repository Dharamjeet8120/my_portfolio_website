
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4 border-top border-secondary">
      <div className="container py-3">
        <div className="row g-4 justify-content-between">
          
          {/* Column 1: Brand & Profile Overview */}
          <div className="col-lg-4 col-md-6">
            <h5 className="font-monospace text-primary fw-bold mb-3">&lt;Dharamjeet /&gt;</h5>
            <p className="text-light-50 small mb-3" style={{ color: '#adb5bd', lineHeight: '1.7' }}>
              Full-Stack Java Developer specializing in Spring Boot, REST APIs, Microservices architecture, and dynamic frontend integrations with React.js.
            </p>
            <div className="d-flex align-items-center gap-2 text-muted small">
              <span className="bg-success rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span>
              Available for full-time backend & full-stack roles
            </div>
          </div>

          {/* Column 2: Deep Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-light fw-bold mb-3 text-uppercase font-monospace small">Navigation</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleSmoothScroll(e, 'home')} 
                  className="text-decoration-none text-light-50 hover-primary"
                  style={{ color: '#adb5bd' }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, 'about')} 
                  className="text-decoration-none text-light-50 hover-primary"
                  style={{ color: '#adb5bd' }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => handleSmoothScroll(e, 'skills')} 
                  className="text-decoration-none text-light-50 hover-primary"
                  style={{ color: '#adb5bd' }}
                >
                  Skills & Tech
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleSmoothScroll(e, 'projects')} 
                  className="text-decoration-none text-light-50 hover-primary"
                  style={{ color: '#adb5bd' }}
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')} 
                  className="text-decoration-none text-light-50 hover-primary"
                  style={{ color: '#adb5bd' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Technology Focus
          <div className="col-lg-3 col-md-6">
            <h6 className="text-light fw-bold mb-3 text-uppercase font-monospace small">Core Expertise</h6>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge bg-secondary bg-opacity-25 text-primary border border-secondary">Java SE / EE</span>
              <span className="badge bg-secondary bg-opacity-25 text-primary border border-secondary">Spring Boot</span>
              <span className="badge bg-secondary bg-opacity-25 text-primary border border-secondary">Spring Data JPA</span>
              <span className="badge bg-secondary bg-opacity-25 text-primary border border-secondary">Hibernate ORM</span>
              <span className="badge bg-secondary bg-opacity-25 text-primary border border-secondary">RESTful APIs</span>
              <span className="badge bg-secondary bg-opacity-25 text-primary border border-secondary">MySQL</span>
              <span className="badge bg-secondary bg-opacity-25 text-primary border border-secondary">React.js</span>
            </div>
          </div> */}

          {/* Column 4: Social Media & Connect */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-light fw-bold mb-3 text-uppercase font-monospace small">Connect With Me</h6>
            <p className="text-light-50 small mb-3" style={{ color: '#adb5bd' }}>
              Follow my code updates, technical projects, and professional contributions across channels.
            </p>
            <div className="d-flex flex-column gap-2">
              <a 
                href="https://github.com/Dharamjeet8120" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-secondary btn-sm text-start text-light border-secondary d-flex align-items-center justify-content-between px-3 py-2 rounded-3"
              >
                <span>💻 GitHub</span>
                <span className="small text-muted font-monospace">@Dharamjeet8120</span>
              </a>
              <a 
                href="www.linkedin.com/in/dharamjeet-kushwaha-9592081ba" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline-secondary btn-sm text-start text-light border-secondary d-flex align-items-center justify-content-between px-3 py-2 rounded-3"
              >
                <span>💼 LinkedIn</span>
                <span className="small text-muted font-monospace">Connect</span>
              </a>
              <a 
                href="mailto:dharamjeetkuswaha2@gmail.com" 
                className="btn btn-outline-secondary btn-sm text-start text-light border-secondary d-flex align-items-center justify-content-between px-3 py-2 rounded-3"
              >
                <span>✉️ Email</span>
                <span className="small text-muted font-monospace">Direct Mail</span>
              </a>
            </div>
          </div>

        </div>

        <hr className="my-4 border-secondary opacity-50" />

        {/* Bottom Credit Line */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <small className="text-muted">
              &copy; {currentYear} Dharamjeet Kushwaha. All rights reserved.
            </small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <small className="text-muted font-monospace">
              Designed & Built with React & Bootstrap 5
            </small>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;