import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: "About CI Associates",
      questions: [
        {
          question: "What makes CI Associates one of the best construction companies in Kerala?",
          answer: "CI Associates stands out among construction companies in Kerala due to our 25+ years of experience, 500+ completed projects, expertise in industrial and commercial construction, in-house steel fabrication capabilities, and comprehensive service offerings. Our commitment to quality, timely delivery, and client satisfaction has established us as a leading construction company in South India."
        },
        {
          question: "Which areas does CI Associates serve in South India?",
          answer: "CI Associates serves clients across Kerala (headquarters in Kochi), Tamil Nadu (Chennai, Coimbatore, Salem, Madurai), and Karnataka (Bangalore, Mysore, Hubli, Mangalore). As one of the top construction companies in South India, we have successfully completed projects in industrial corridors, IT hubs, and commercial centers across these states."
        },
        {
          question: "Who founded CI Associates and when was it established?",
          answer: "CI Associates was founded in 1998 by Mr. CI Salam, a visionary leader in the construction industry. Under his leadership, the company has grown from a local construction firm to one of the most respected construction companies in Kerala and South India, specializing in industrial and commercial projects."
        }
      ]
    },
    {
      category: "Services & Expertise",
      questions: [
        {
          question: "What types of construction services does CI Associates offer?",
          answer: "CI Associates offers comprehensive construction services including: Industrial Construction (manufacturing facilities, warehouses, multi-story buildings), Commercial Construction (office complexes, retail spaces, mixed-use developments), Steel Fabrication (custom structural steel, industrial steel solutions), Civil Works (site development, infrastructure, foundations), Interior Fit-outs (false ceilings, MCM cladding, UPVC installations), and Surface Finishing (painting, coating, architectural finishes)."
        },
        {
          question: "Does CI Associates handle large-scale industrial construction projects?",
          answer: "Yes, CI Associates specializes in large-scale industrial construction projects. We have extensive experience in constructing manufacturing facilities, industrial warehouses, multi-story industrial buildings, and specialized facilities for various industries including textiles, automotive, marine, and technology sectors across Kerala, Tamil Nadu, and Karnataka."
        },
        {
          question: "What is CI Associates' expertise in steel fabrication?",
          answer: "CI Associates has advanced steel fabrication capabilities with in-house facilities for custom structural steel work. Our expertise includes designing and fabricating steel structures for industrial buildings, warehouses, commercial complexes, and specialized applications. We handle everything from structural steel framing to complex industrial steel solutions."
        },
        {
          question: "Can CI Associates handle turnkey construction projects?",
          answer: "Yes, CI Associates offers complete turnkey construction solutions. From initial planning and design to final handover, we manage all aspects of construction projects including civil works, structural construction, steel fabrication, interior fit-outs, and finishing work. This comprehensive approach makes us a preferred choice among construction companies in Kerala."
        }
      ]
    },
    {
      category: "Project Information",
      questions: [
        {
          question: "What is the typical project duration for construction projects?",
          answer: "Project duration varies based on scope and complexity. Typical timeframes include: Small commercial projects (6-12 months), Medium industrial facilities (12-18 months), Large commercial complexes (18-24 months), and Complex industrial projects (24+ months). CI Associates is known for completing projects on schedule while maintaining quality standards."
        },
        {
          question: "What industries does CI Associates serve?",
          answer: "CI Associates serves diverse industries including Manufacturing & Industrial, Information Technology, Textiles & Garments, Automotive & Engineering, Marine & Port-related industries, Retail & Commercial, Healthcare & Institutional, and Logistics & Warehousing. Our experience spans across various sectors in Kerala, Tamil Nadu, and Karnataka."
        },
        {
          question: "How does CI Associates ensure construction quality?",
          answer: "CI Associates maintains strict quality standards through qualified engineers and project managers, regular quality inspections and testing, use of premium materials and modern construction techniques, compliance with industry standards and building codes, experienced craftsmen and skilled workforce, and comprehensive quality assurance processes throughout project lifecycle."
        },
        {
          question: "What are some notable projects completed by CI Associates?",
          answer: "CI Associates has completed numerous landmark projects including advanced manufacturing facilities in Kochi, premium office complexes in Bangalore, industrial warehouse complexes in Chennai, mixed-use developments in Thrissur, textile manufacturing plants in Coimbatore, and corporate headquarters in Mysore. These projects showcase our capabilities as one of the leading construction companies in South India."
        }
      ]
    },
    {
      category: "Cost & Pricing",
      questions: [
        {
          question: "How does CI Associates price construction projects?",
          answer: "CI Associates provides competitive pricing based on detailed project assessment including scope of work, materials required, project complexity, timeline requirements, and location factors. We offer transparent pricing with detailed quotations and no hidden costs. Contact us for a customized quote for your construction project."
        },
        {
          question: "Does CI Associates provide cost estimates for construction projects?",
          answer: "Yes, CI Associates provides detailed cost estimates for all construction projects. Our experienced estimators analyze project requirements, material costs, labor requirements, and other factors to provide accurate pricing. We offer preliminary estimates during initial consultations and detailed quotations upon project finalization."
        },
        {
          question: "What factors affect construction project costs?",
          answer: "Construction project costs depend on several factors including project size and complexity, location and site conditions, material specifications and quality requirements, timeline and scheduling constraints, design complexity and special features, regulatory compliance requirements, and current market conditions for materials and labor."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          question: "What is the typical process for starting a construction project with CI Associates?",
          answer: "Our construction process includes: Initial Consultation & Site Assessment, Detailed Project Planning & Design Development, Regulatory Approvals & Permits, Material Procurement & Resource Allocation, Construction Execution with Regular Progress Updates, Quality Inspections & Testing, and Final Handover with Documentation. We maintain transparent communication throughout the project lifecycle."
        },
        {
          question: "How does CI Associates manage construction project timelines?",
          answer: "CI Associates uses advanced project management techniques including detailed scheduling and milestone tracking, resource optimization and allocation, regular progress monitoring and reporting, proactive issue identification and resolution, weather and seasonal planning, coordination with multiple trades and suppliers, and contingency planning for potential delays."
        },
        {
          question: "Does CI Associates handle construction permits and approvals?",
          answer: "Yes, CI Associates assists clients with obtaining necessary construction permits and approvals. Our team has extensive experience with local authorities in Kerala, Tamil Nadu, and Karnataka. We help navigate regulatory requirements, building codes compliance, environmental clearances, and other statutory approvals required for construction projects."
        }
      ]
    },
    {
      category: "Location & Contact",
      questions: [
        {
          question: "Where is CI Associates headquartered and how can I contact them?",
          answer: "CI Associates is headquartered in Kochi, Kerala. You can contact us through our website contact form, phone consultation, or visit our office for detailed project discussions. We also have project teams stationed across our service areas in Tamil Nadu and Karnataka to serve local clients effectively."
        },
        {
          question: "Does CI Associates provide on-site consultations?",
          answer: "Yes, CI Associates provides comprehensive on-site consultations across Kerala, Tamil Nadu, and Karnataka. Our experienced engineers and project managers visit client sites for detailed assessments, technical evaluations, and project planning discussions. This ensures accurate project planning and cost estimation."
        },
        {
          question: "How can I get a quote for my construction project from CI Associates?",
          answer: "To get a construction quote from CI Associates: Contact us through our website or phone, provide project details and requirements, schedule a site visit and consultation, receive a detailed project assessment, and get a comprehensive quotation with timeline and specifications. Our team responds promptly to all inquiry requests."
        }
      ]
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header" data-aos="fade-up">
          <span className="section-subtitle">Frequently Asked Questions</span>
          <h2 className="section-title">
            Everything You Need to Know About CI Associates Construction Services
          </h2>
          <p className="faq-description">
            Get answers to common questions about our construction services, project processes, and expertise. 
            As one of the best construction companies in Kerala, we're here to help with your construction needs.
          </p>
        </div>

        <div className="faq-content">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
              <h3 className="faq-category-title">{category.category}</h3>
              <div className="faq-questions">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div 
                      key={globalIndex} 
                      className={`faq-item ${openFAQ === globalIndex ? 'active' : ''}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleFAQ(globalIndex)}
                        aria-expanded={openFAQ === globalIndex}
                        aria-controls={`faq-answer-${globalIndex}`}
                      >
                        <span>{faq.question}</span>
                        <span className="faq-icon">
                          {openFAQ === globalIndex ? '−' : '+'}
                        </span>
                      </button>
                      <div 
                        id={`faq-answer-${globalIndex}`}
                        className="faq-answer"
                        style={{
                          maxHeight: openFAQ === globalIndex ? '1000px' : '0',
                          opacity: openFAQ === globalIndex ? '1' : '0'
                        }}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta" data-aos="fade-up">
          <h3>Still Have Questions?</h3>
          <p>
            Contact CI Associates today for personalized answers about your construction project requirements. 
            Our expert team is ready to help you with all your construction needs in Kerala, Tamil Nadu, and Karnataka.
          </p>
          <div className="faq-cta-buttons">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
            <a href="/company-profile" className="btn btn-secondary">Learn More About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;