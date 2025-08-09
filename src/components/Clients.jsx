import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Clients.css";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      sector: "Technology",
      project: "Corporate Headquarters",
    },
    {
      id: 2,
      name: "Prestige Group",
      sector: "Real Estate",
      project: "Residential Complex",
    },
    {
      id: 3,
      name: "Infosys Limited",
      sector: "IT Services",
      project: "Development Center",
    },
    {
      id: 4,
      name: "Brigade Enterprises",
      sector: "Real Estate",
      project: "Commercial Mall",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="clients" className="section clients-section">
      <div className="container-clients">
        <div
          className="clients-section-header"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p
            className="clients-section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Clients
          </p>
          <h2
            className="clients-section-title"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Trusted by Leading Organizations
          </h2>
          <p
            className="clients-section-description"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            We have had the privilege of working with some of the most respected
            companies across various industries, delivering exceptional
            construction solutions that meet their unique requirements.
          </p>
        </div>

        <div className="clients-portfolio-grid">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="clients-portfolio-card"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="clients-portfolio-logo">
                <div className="clients-logo-placeholder">
                  {client.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              </div>
              <div className="clients-portfolio-info">
                <h3 className="clients-company-name">{client.name}</h3>
                <p className="clients-company-sector">{client.sector}</p>
                <p className="clients-project-type">{client.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
