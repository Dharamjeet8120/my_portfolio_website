// Place image in src/assets/myImage10.jpg

const Hero = () => {
    return (
        <section id="home" className="bg-dark text-white py-5 min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center gy-5">

                    {/* Left Column: Text & Intro */}
                    <div className="col-lg-7 text-center text-lg-start">
                        <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-2 rounded-pill fs-6 mb-3">
                            👋 Welcome to my portfolio
                        </span>

                        <h1 className="display-4 fw-bold mb-3">
                            Hi, I'm <span className="text-primary">Dharamjeet Kushwaha</span>
                        </h1>

                        <h2 className="h3 text-secondary mb-4">
                            Full-Stack Java Developer | Java, Spring Boot, React.js
                        </h2>

                        <p className="lead text-light-50 mb-4 me-lg-4" style={{ color: '#adb5bd' }}>
                            Motivated and detail-oriented Full-Stack Java Developer skilled in designing,
                            developing, and deploying robust, scalable web applications, REST APIs, and microservices.
                        </p>

                        {/* Expanded Core Competency Badges */}
                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-4">
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">Core Java</span>
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">Spring Boot</span>
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">Spring Data JPA</span>
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">Hibernate</span>
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">REST APIs</span>
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">React.js</span>
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">MySQL</span>
                            <span className="badge bg-secondary bg-opacity-25 text-light px-3 py-2 border border-secondary">Microservices</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                            <a href="#contact" className="btn btn-primary btn-lg px-4 shadow-sm">
                                Get In Touch
                            </a>
                            <a href="#projects" className="btn btn-outline-light btn-lg px-4">
                                View My Work
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="col-lg-5 text-center">
                        <img
                            src={`${import.meta.env.BASE_URL}image/myImage10.jpg`}
                            alt="Dharamjeet Kushwaha"
                            className="img-fluid rounded-4 p-1 w-75 shadow-lg bg-dark border border-secondary"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;