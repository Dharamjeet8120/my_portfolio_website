
const Contact = () => {


    return (
        <section id="contact" className="bg-dark text-white py-5 border-top border-secondary">
            <div className="container py-4">

                {/* Section Header */}
                <div className="text-center mb-5">
                    <span className="text-primary font-monospace text-uppercase fw-bold tracking-wider">Get In Touch</span>
                    <h2 className="display-5 fw-bold mt-2">Contact Me</h2>
                    <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
                </div>

                <div className="row g-5 justify-content-center">
                    {/* Contact Details Cards */}
                    <div className="col-lg-5">
                        <h3 className="h4 fw-bold mb-4 text-light">Let's Build Something Amazing Together 🚀</h3>

                        <p className="text-light-50 mb-3" style={{ color: '#adb5bd', lineHeight: '1.7' }}>
                            I am actively seeking opportunities as a <strong>Full-Stack Java Developer</strong> and am passionate about building scalable, high-performance web applications. With expertise in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Spring MVC</strong>, <strong>Spring Data JPA</strong>, <strong>Hibernate</strong>, <strong>React.js</strong>, <strong>REST APIs</strong>, and <strong>MySQL</strong>, I enjoy transforming complex business requirements into innovative software solutions.
                        </p>

                        <p className="text-light-50 mb-4" style={{ color: '#adb5bd', lineHeight: '1.7' }}>
                            Whether you have a full-time opportunity, a freelance project, a collaboration proposal, or simply want to discuss technology and software development, I would be delighted to connect. I am always eager to learn, contribute, and work with talented teams to create impactful digital products. Let's connect, collaborate, and build the future—one line of code at a time.
                        </p>

                        <div className="d-flex flex-column gap-3">
                            {/* GitHub Info */}
                            <div className="card bg-secondary bg-opacity-10 border-secondary p-3 rounded-3 text-white">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-primary bg-opacity-15 text-primary rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                        💻
                                    </div>
                                    <div>
                                        <span className="small d-block ">GitHub Profile</span>
                                        <a href="https://github.com/Dharamjeet8120" target="_blank" rel="noreferrer" className="text-light text-decoration-none fw-semibold">
                                            github.com/Dharamjeet8120
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Email Info */}
                            <div className="card bg-secondary bg-opacity-10 border-secondary p-3 rounded-3 text-white">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-primary bg-opacity-15 text-primary rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                        ✉️
                                    </div>
                                    <div>
                                        <span className="small d-block ">Email</span>
                                        <a href="mailto:dharamjeetkushwaha2@gmail.com" className="text-light text-decoration-none fw-semibold">
                                            dharamjeetkushwaha2@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location Info */}
                            <div className="card bg-secondary bg-opacity-10 border-secondary p-3 rounded-3 text-white">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-primary bg-opacity-15 text-primary rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                        📍
                                    </div>
                                    <div>
                                        <span className="small d-block ">Location</span>
                                        <span className="text-light fw-semibold">Bhopal, Madhya Pradesh, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>



        </section>
    );
};

export default Contact;