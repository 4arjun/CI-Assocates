import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  const projectItems = [
    { src: project1, type: "Residential", location: "Kochi, Kerala" },
    { src: project2, type: "Residential", location: "Bengaluru, Karnataka" },
    { src: project3, type: "Residential", location: "Trivandrum, Kerala" },
    { src: project4, type: "Commercial", location: "Coimbatore, Tamil Nadu" },
    { src: project5, type: "Commercial", location: "Kakkanad, Kerala" },
    { src: project6, type: "Commercial", location: "Calicut, Kerala" },
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div
          className="projects-header"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Portfolio
          </span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="300">
            Featured Construction Projects
          </h2>
          <p
            className="projects-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Discover our portfolio of exceptional construction projects that
            showcase our commitment to quality, innovation, and architectural
            excellence across residential and commercial developments.
          </p>
        </div>

        <div className="projects-grid">
          {projectItems.map((p, index) => (
            <figure
              key={`${p.type}-${index}`}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="project-image-container">
                <img src={p.src} alt={`${p.type} project`} loading="lazy" />
                <span className="project-chip project-chip-fixed">
                  {p.type}
                </span>
                <div className="project-overlay">
                  <p className="project-location">{p.location}</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
