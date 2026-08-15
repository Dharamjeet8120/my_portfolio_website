import  { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      title: "HRMS (Human Resource Management System)",
      techHeader: "Java, Spring Boot, Spring MVC, MySQL",
      date: "Mar 2026",
      shortDescription: "Built an HRMS application using Spring Boot and Spring MVC with a layered, RESTful architecture to manage onboarding, attendance, leave, and payroll operations.",
      bullets: [
        "Built an HRMS application using Spring Boot and Spring MVC with a layered, RESTful architecture (Controller-Service-Repository).",
        "Designed a relational database schema to manage employee records, attendance, leave requests, departments, and payroll-related data.",
        "Implemented CRUD operations through REST endpoints for employee onboarding, profile updates, leave management, and record retrieval.",
        "Applied validation, exception handling, and business logic to ensure data consistency and system reliability.",
        "Used an AI coding assistant to scaffold boilerplate layers, then reviewed and refactored the generated code for correctness, maintainability, and clean architecture.",
        "Applied OOP principles and MVC architecture to keep service and controller layers modular, testable, and easy to extend."
      ],
      techStack: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "MySQL", "OOP"],
      githubLink: "https://github.com/Dharamjeet8120"
    },
    {
      id: 2,
      title: "Hospital Management System",
      techHeader: "Advanced Java, JDBC, MySQL",
      date: "Mar 2026",
      shortDescription: "Developed a Hospital Management System using Advanced Java and JDBC for managing core clinical operations, doctor allocations, and patient records.",
      bullets: [
        "Developed a Hospital Management System using Advanced Java and JDBC for managing core hospital operations.",
        "Designed and implemented a MySQL database to manage patient records, doctor information, appointments, medical history, and billing details.",
        "Implemented CRUD operations for patient registration, appointment scheduling, doctor management, and record maintenance.",
        "Applied OOP principles and PreparedStatement APIs to ensure secure, structured, and SQL injection-free database interactions.",
        "Built a menu-driven application with robust exception handling, input validation, and user-friendly navigation.",
        "Optimized database operations to improve performance and maintain data integrity across hospital workflows."
      ],
      techStack: ["Advanced Java", "JDBC", "MySQL", "PreparedStatements", "OOP"],
      githubLink: "https://github.com/Dharamjeet8120"
    },
    {
      id: 3,
      title: "Bank Management System",
      techHeader: "Core Java, JDBC, MySQL",
      date: "Mar 2026",
      shortDescription: "Built a Core Java and JDBC-based banking application simulating real-world banking operations such as account creation, deposits, withdrawals, and fund transfers.",
      bullets: [
        "Built a Core Java and JDBC-based banking application simulating real-world banking operations such as account creation, deposits, withdrawals, balance inquiries, and fund transfers.",
        "Designed a normalized MySQL database schema to manage customer accounts, transaction history, and account balances.",
        "Implemented secure database communication using JDBC and PreparedStatements to prevent SQL injection attacks.",
        "Applied object-oriented design principles to create reusable and maintainable business logic components.",
        "Developed transaction processing features with validation and exception handling to ensure data consistency and reliability.",
        "Implemented account management functionalities while maintaining accurate transaction records and audit trails."
      ],
      techStack: ["Core Java", "JDBC", "MySQL", "Transaction Logic", "OOP"],
      githubLink: "https://github.com/Dharamjeet8120"
    },
    {
      id: 4,
      title: "School Management System",
      techHeader: "Spring Boot, Spring Data JPA, Hibernate, MySQL",
      date: "Apr 2026",
      shortDescription: "Developed a School Management System using Spring Boot, Spring Data JPA, and Hibernate to automate academic and administrative processes.",
      bullets: [
        "Developed a School Management System using Spring Boot, Spring Data JPA, and Hibernate to automate academic and administrative processes.",
        "Designed and implemented modules for student management, teacher management, classes, subjects, examinations, results, and fee tracking.",
        "Built RESTful APIs following Controller-Service-Repository architecture to support scalable and maintainable application development.",
        "Implemented JPA entity relationships, validation mechanisms, and business logic for efficient data management.",
        "Integrated Hibernate ORM to simplify database operations and improve application performance.",
        "Applied OOP principles, layered architecture, and exception handling to build a robust and extensible enterprise application."
      ],
      techStack: ["Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs"],
      githubLink: "https://github.com/Dharamjeet8120"
    },
    {
      id: 5,
      title: "Library Management System",
      techHeader: "Java, JDBC, MySQL",
      date: "Apr 2026",
      shortDescription: "Developed a Library Management System to automate book catalog management, member registration, book issue/return processes, and inventory tracking.",
      bullets: [
        "Developed a Library Management System to automate book catalog management, member registration, book issue/return processes, and inventory tracking.",
        "Designed a relational MySQL database schema for managing books, members, transactions, and fine calculations.",
        "Implemented CRUD operations using JDBC and PreparedStatements for secure and efficient database interactions.",
        "Built search and filtering functionalities to quickly locate books and member records.",
        "Added exception handling, input validation, and transaction management to improve application reliability.",
        "Applied object-oriented programming concepts to create modular, reusable, and maintainable code."
      ],
      techStack: ["Java", "JDBC", "MySQL", "CRUD Operations", "OOP"],
      githubLink: "https://github.com/Dharamjeet8120"
    },
    {
      id: 6,
      title: "Employee Management System",
      techHeader: "Spring Boot, Spring Data JPA, Hibernate, MySQL",
      date: "Apr 2026",
      shortDescription: "Built an Employee Management System for managing employee information, departments, job roles, and organizational records using RESTful APIs.",
      bullets: [
        "Built an Employee Management System for managing employee information, departments, job roles, and organizational records.",
        "Developed RESTful APIs using Spring Boot and Spring Data JPA to support employee onboarding, updates, search operations, and reporting.",
        "Designed a normalized MySQL database schema and implemented JPA entity relationships using Hibernate ORM.",
        "Followed MVC and layered architecture principles to ensure proper separation of concerns and maintainable code structure.",
        "Implemented validation, exception handling, and standardized API responses to improve application robustness and user experience.",
        "Applied OOP principles and software engineering best practices to develop a scalable and enterprise-ready solution."
      ],
      techStack: ["Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs"],
      githubLink: "https://github.com/Dharamjeet8120"
    }
  ];

  return (
    <section id="projects" className="bg-dark text-white py-5 border-top border-secondary">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-primary font-monospace text-uppercase fw-bold tracking-wider">My Work</span>
          <h2 className="display-5 fw-bold mt-2">Featured Projects</h2>
          <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4 justify-content-center">
          {projectData.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card h-100 bg-secondary bg-opacity-10 border-secondary text-white rounded-4 shadow-sm d-flex flex-column">
                
                {/* Card Header Bar */}
                <div className="card-header bg-transparent border-secondary d-flex justify-content-between align-items-center py-3">
                  <span className="font-monospace text-primary fw-bold">0{project.id}.</span>
                  <span className="badge bg-secondary bg-opacity-50 text-light">{project.date}</span>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 card-title fw-bold text-light mb-1">{project.title}</h3>
                  <p className="small text-primary font-monospace mb-3">{project.techHeader}</p>
                  
                  <p className="card-text text-light-50 flex-grow-1 small" style={{ color: '#adb5bd', lineHeight: '1.6' }}>
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="d-flex flex-wrap gap-2 my-3">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="badge bg-secondary bg-opacity-25 text-primary border border-secondary px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-transparent border-secondary pt-3 pb-3 d-flex gap-2">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline-primary btn-sm flex-grow-1 rounded-2"
                  >
                    View Details
                  </button>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary btn-sm rounded-2"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="modal show d-block bg-dark bg-opacity-75" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content bg-dark border-secondary text-white">
                <div className="modal-header border-secondary">
                  <div>
                    <h4 className="modal-title fw-bold text-primary mb-0">{selectedProject.title}</h4>
                    <small className="text-muted">{selectedProject.techHeader} • {selectedProject.date}</small>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={() => setSelectedProject(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <h5 className="h6 text-light fw-bold mb-3">Key Highlights & Implementation:</h5>
                  <ul className="text-light-50 ps-3" style={{ color: '#adb5bd', lineHeight: '1.7' }}>
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="mb-2">{bullet}</li>
                    ))}
                  </ul>

                  <h5 className="h6 text-light fw-bold mt-4 mb-2">Technologies Used:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="badge bg-primary text-dark font-monospace">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-footer border-secondary">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                  <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                    View Repository on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;