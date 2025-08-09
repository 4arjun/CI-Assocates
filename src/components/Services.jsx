import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const Services = ({ isScrolling }) => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 900, 
      offset: 80, 
      easing: "ease-out-cubic" 
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Industrial & Commercial Projects",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      brief: "Multi-storied buildings, steel structures, warehouses, and large-scale RCC projects with precision engineering.",
      description: `Our Industrial & Commercial Projects service provides comprehensive construction solutions for large-scale developments. We specialize in:

• Multi-storied buildings with modern architectural designs
• Steel Structures – Fabrication & Erection with precision engineering
• Warehouse Buildings – Storage & Logistics facilities
• Large-scale RCC Structures with advanced construction techniques
• Industrial facilities and manufacturing plants
• Commercial complexes and office buildings
• Retail spaces and shopping centers
• Mixed-use developments`,
      features: [
        "Expert structural engineering",
        "Advanced construction techniques",
        "Quality control systems",
        "Project management expertise",
        "Timeline adherence"
      ]
    },
    {
      id: 2,
      title: "Construction & Civil Works",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      brief: "End-to-end project management, site development, quality control, and comprehensive structural construction.",
      description: `Our Construction & Civil Works service covers every aspect of construction projects from planning to completion. We provide:

• Comprehensive structural construction with modern techniques
• Project management and execution with experienced teams
• Site development and preparation with proper planning
• Quality control and supervision throughout the project
• Foundation work and structural integrity
• Infrastructure development and utilities
• Safety compliance and regulations
• Environmental considerations`,
      features: [
        "Comprehensive project management",
        "Quality assurance systems",
        "Safety protocols",
        "Environmental compliance",
        "Timeline management"
      ]
    },
    {
      id: 3,
      title: "Interiors & Fit-outs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      brief: "Complete interior fit-outs including false ceilings, MCM cladding, UPVC installations, and finishing works.",
      description: `Transform your interior spaces with our comprehensive fit-out services. We specialize in:

• False Ceiling & POP Work with modern designs
• MCM & ACP Cladding for exterior and interior applications
• UPVC Installations for windows and doors
• Complete Interior Works with attention to detail
• Custom furniture and joinery work
• Lighting design and installation
• Flooring solutions and installations
• Wall treatments and finishes`,
      features: [
        "Custom design solutions",
        "Premium materials",
        "Expert craftsmanship",
        "Timeline adherence",
        "Quality finishes"
      ]
    },
    {
      id: 4,
      title: "Painting & Coating",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      brief: "Professional painting, epoxy coatings, floor solutions, and specialized industrial protective coatings.",
      description: `Protect and beautify your surfaces with our professional painting and coating services. We offer:

• Internal & External Painting with premium materials
• Epoxy Coating & Protection for industrial applications
• Floor Coating Solutions for durability and aesthetics
• Specialized Industrial Coatings for harsh environments
• Decorative painting and finishes
• Anti-corrosive coatings
• Waterproofing solutions
• Texture and specialty finishes`,
      features: [
        "Premium paint materials",
        "Professional application",
        "Durability guarantee",
        "Custom color matching",
        "Protective coatings"
      ]
    },
    {
      id: 5,
      title: "Surface Finishing",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      brief: "Premium tiles, marble, granite installations, waterproofing, and decorative surface finishes.",
      description: `Achieve the perfect finish with our comprehensive surface finishing services. We provide:

• Tiles, Marble & Granite installations with precision
• Waterproofing Solutions for all surfaces
• Texture & Decorative Finishes for unique aesthetics
• Self-Leveling Applications for perfect surfaces
• Stone and tile restoration
• Grouting and sealing services
• Custom mosaic work
• Surface preparation and repair`,
      features: [
        "Premium materials",
        "Expert installation",
        "Custom designs",
        "Quality assurance",
        "Maintenance guidance"
      ]
    },
    {
      id: 6,
      title: "Steel Fabrication",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      brief: "Custom steel fabrication, structural steel work, and industrial steel solutions.",
      description: `Deliver robust steel solutions with our expert fabrication services. We specialize in:

• Custom steel fabrication for unique requirements
• Structural steel work for buildings and infrastructure
• Industrial steel solutions for manufacturing
• Steel staircases and railings
• Steel frames and trusses
• Steel storage solutions
• Steel decorative elements
• Steel maintenance and repair`,
      features: [
        "Custom fabrication",
        "Structural integrity",
        "Quality welding",
        "Precision cutting",
        "Durable finishes"
      ]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container-service">
        <div
          className="services-header"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive construction and development services delivered with excellence and precision
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-brief">{service.brief}</p>
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedService(service)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            <div className="modal-header">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="modal-image"
              />
              <h3 className="modal-title">{selectedService.title}</h3>
            </div>
            <div className="modal-body">
              <div className="modal-description">
                {selectedService.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  {selectedService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button 
                className="modal-cta"
                onClick={() => {
                  setSelectedService(null);
                  document.querySelector('#contact').scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services; 