
const AboutAndSkills = () => {
  const skills = [
    {
      category: "Backend Development",
      items: [
        "Java (Core/8/11/17/21/25)",
        "Spring Core",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "RESTful APIs",
        "Microservices",
        "Servlets & JSP",
        "JDBC",
        "Spring Security",
        "Exception Handling",
        "Dependency Injection (IoC)",
        "Maven"
      ]
    },
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "Responsive Web Design",
        "AJAX",
        "JSON",
        "DOM Manipulation",
        "React Hooks",
        "React Router"
      ]
    },
    {
      category: "Database & Tools",
      items: [
        "MySQL",
        "SQL",
        "Database Design",
        "Query Optimization",
        "Git",
        "GitHub",
        "Maven",
        "Apache Tomcat",
        "Postman",
        "IntelliJ IDEA",
        "Eclipse IDE",
        "VS Code",
        "Command Line Tools"
      ]
    },
    {
      category: "Core Computer Science",
      items: [
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Collections Framework",
        "Multithreading & Concurrency",
        "Exception Handling",
        "Generics",
        "Java 8 Stream API",
        "Lambda Expressions",
        "Functional Interfaces",
        "JVM Architecture",
        "Garbage Collection",
        "Design Patterns",
        "MVC Architecture",
        "SOLID Principles"
      ]
    },
    {
      category: "Architecture & Practices",
      items: [
        "Layered Architecture",
        "REST API Design",
        "CRUD Operations",
        "ORM Frameworks",
        "Version Control",
        "Code Review",
        "Debugging & Troubleshooting",
        "Performance Optimization",
        "Software Testing",
        "Secure Coding Practices"
      ]
    }
  ];

  return (
    <section id="about" className="bg-dark text-white py-5 border-top border-secondary">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-primary font-monospace text-uppercase fw-bold tracking-wider">Get To Know Me</span>
          <h2 className="display-5 fw-bold mt-2">About Me & Technical Skills</h2>
          <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
        </div>

        {/* Updated About Summary */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card bg-secondary bg-opacity-10 border-secondary p-4 p-md-5 rounded-4 shadow-sm">
              <p className="lead text-light mb-3" style={{ lineHeight: '1.8' }}>
                I am a detail-oriented <strong>Full-Stack Java Developer</strong> with a strong foundation in software engineering principles and modern web technologies. I specialize in developing scalable backend applications, RESTful APIs, database-driven solutions, and responsive user interfaces that deliver seamless user experiences. My passion lies in transforming complex business requirements into efficient, maintainable, and high-performance software solutions.
              </p>
              <p className="text-light-50 mb-0" style={{ color: '#adb5bd', lineHeight: '1.7' }}>
                With hands-on experience in Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Microservices, React.js, and MySQL, I focus on building robust full-stack applications using industry best practices. I possess strong knowledge of Object-Oriented Programming (OOP), Data Structures & Algorithms, Collections Framework, Multithreading, Design Patterns, MVC Architecture, and Software Development Life Cycle (SDLC). I am committed to continuous learning, clean code practices, and delivering innovative solutions that create real business value while contributing effectively to high-performing engineering teams.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="pt-3">
          <h3 className="h3 fw-bold text-center mb-4">Core Competencies</h3>
          <div className="row g-4 justify-content-center">
            {skills.map((skillGroup, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 bg-secondary bg-opacity-10 border-secondary p-3 rounded-3">
                  <h4 className="h5 text-primary fw-bold mb-3 border-bottom border-secondary pb-2">
                    {skillGroup.category}
                  </h4>
                  <ul className="list-unstyled mb-0">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="mb-2 text-light d-flex align-items-center">
                        <span className="text-primary me-2">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndSkills;