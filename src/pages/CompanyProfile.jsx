import React from 'react';
import SEO from '../components/SEO';
import './CompanyProfile.css';
import founderImage from '../assets/founder.jpeg'; // Add founder image if available
import certificationImage from '../assets/certifications.jpeg'; // Add certifications if available

const CompanyProfile = () => {
  return (
    <>
      <SEO 
        title="CI Associates — Leading Construction Company in Kerala | Company Profile"
        description="CI Associates is Kerala's premier construction company with 25+ years of excellence. Founded by Mr. CI Salam in 1998, we're among the best construction companies in South India specializing in industrial and commercial projects."
        keywords="CI Associates, CI Associates construction, best construction companies Kerala, top construction companies South India, CI Salam, construction company profile, leading construction firms Kerala"
        section="about"
        canonicalUrl="https://ciassociates.in/company-profile"
      />
      
      <div className="company-profile">
        {/* Hero Section */}
        <section className="company-hero">
          <div className="container">
            <div className="hero-content">
              <h1>CI Associates — Kerala's Premier Construction Company</h1>
              <p className="hero-subtitle">
                Established in 1998, CI Associates has emerged as one of the best construction companies in Kerala, 
                delivering excellence in industrial and commercial construction projects across South India.
              </p>
              <div className="company-stats">
                <div className="stat">
                  <h3>25+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="stat">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>100+</h3>
                  <p>Expert Team Members</p>
                </div>
                <div className="stat">
                  <h3>3</h3>
                  <p>South Indian States</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="company-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <h2>Why CI Associates is Among the Best Construction Companies in Kerala</h2>
                <p>
                  Since our founding in 1998, CI Associates has established itself as a leading name among 
                  construction companies in Kerala. Our reputation as one of the top construction companies 
                  in South India is built on unwavering commitment to quality, innovation, and client satisfaction.
                </p>
                <p>
                  We specialize in large-scale industrial and commercial construction projects, making us the 
                  preferred choice for businesses seeking reliable construction partners in Kerala, Tamil Nadu, 
                  and Karnataka.
                </p>
                
                <h3>Our Core Specializations</h3>
                <ul className="specializations-list">
                  <li><strong>Industrial Construction:</strong> Multi-storied industrial buildings, manufacturing facilities, and warehouses</li>
                  <li><strong>Commercial Projects:</strong> Office complexes, retail spaces, and mixed-use developments</li>
                  <li><strong>Steel Fabrication:</strong> Custom steel structures and structural engineering solutions</li>
                  <li><strong>Civil Works:</strong> Site development, infrastructure, and foundation engineering</li>
                  <li><strong>Interior Fit-outs:</strong> Complete interior solutions including false ceilings and UPVC installations</li>
                  <li><strong>Surface Finishing:</strong> Painting, coating, and architectural finishing services</li>
                </ul>
              </div>
              <div className="overview-image">
                <img src={founderImage} alt="Mr. CI Salam - Founder of CI Associates, one of Kerala's best construction companies" />
                <div className="image-caption">
                  <h4>Mr. CI Salam</h4>
                  <p>Founder & Chairman, CI Associates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="competitive-advantages">
          <div className="container">
            <h2>What Sets CI Associates Apart from Other Construction Companies</h2>
            <div className="advantages-grid">
              <div className="advantage-card">
                <h3>🏗️ Proven Track Record</h3>
                <p>
                  With over 500 successfully completed projects across Kerala, Tamil Nadu, and Karnataka, 
                  we have consistently delivered complex industrial and commercial construction projects on time and within budget.
                </p>
              </div>
              <div className="advantage-card">
                <h3>👥 Expert Team</h3>
                <p>
                  Our team of 100+ skilled professionals includes experienced engineers, project managers, 
                  and craftsmen who bring decades of combined expertise to every project.
                </p>
              </div>
              <div className="advantage-card">
                <h3>🔧 Comprehensive Services</h3>
                <p>
                  From initial planning and design to final handover, we offer end-to-end construction solutions, 
                  making us a one-stop destination for all construction needs.
                </p>
              </div>
              <div className="advantage-card">
                <h3>📍 Strategic Location</h3>
                <p>
                  Headquartered in Kochi, Kerala, we are strategically positioned to serve clients across 
                  South India with easy access to major industrial corridors and transportation networks.
                </p>
              </div>
              <div className="advantage-card">
                <h3>🏆 Quality Certification</h3>
                <p>
                  Our commitment to quality is backed by industry certifications and a stellar track record 
                  of delivering projects that exceed client expectations and industry standards.
                </p>
              </div>
              <div className="advantage-card">
                <h3>💡 Innovation & Technology</h3>
                <p>
                  We leverage the latest construction technologies and innovative building methods to ensure 
                  efficient project execution and superior construction quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas">
          <div className="container">
            <h2>Our Service Coverage Across South India</h2>
            <p className="section-intro">
              As one of the leading construction companies in South India, CI Associates proudly serves 
              clients across multiple states with our comprehensive construction services.
            </p>
            <div className="service-areas-grid">
              <div className="area-card">
                <h3>🌴 Kerala</h3>
                <p><strong>Primary Market:</strong> Kochi (HQ), Thiruvananthapuram, Calicut, Thrissur</p>
                <ul>
                  <li>Industrial construction in Cochin Port area</li>
                  <li>Commercial projects in IT corridors</li>
                  <li>Steel fabrication for marine industries</li>
                </ul>
              </div>
              <div className="area-card">
                <h3>🏙️ Tamil Nadu</h3>
                <p><strong>Key Markets:</strong> Chennai, Coimbatore, Salem, Madurai</p>
                <ul>
                  <li>Manufacturing facility construction</li>
                  <li>Automotive industry projects</li>
                  <li>Textile industry infrastructure</li>
                </ul>
              </div>
              <div className="area-card">
                <h3>🌆 Karnataka</h3>
                <p><strong>Focus Areas:</strong> Bangalore, Mysore, Hubli, Mangalore</p>
                <ul>
                  <li>IT and tech park construction</li>
                  <li>Commercial office complexes</li>
                  <li>Industrial park development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="awards-recognition">
          <div className="container">
            <h2>Awards & Recognition</h2>
            <p>
              Our excellence in construction has been recognized by industry bodies and clients alike, 
              cementing our position among the top construction companies in South India.
            </p>
            <div className="awards-grid">
              <div className="award-item">
                <h4>🏆 Excellence in Construction Award 2023</h4>
                <p>Recognized for outstanding project delivery and construction quality</p>
              </div>
              <div className="award-item">
                <h4>⭐ Best Industrial Contractor - South India</h4>
                <p>Acknowledged for expertise in large-scale industrial construction projects</p>
              </div>
              <div className="award-item">
                <h4>🎯 Client Satisfaction Award</h4>
                <p>Honored for consistently exceeding client expectations and maintaining long-term relationships</p>
              </div>
              <div className="award-item">
                <h4>🔨 Innovation in Steel Fabrication</h4>
                <p>Recognized for innovative approaches in structural steel construction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="client-testimonials">
          <div className="container">
            <h2>What Our Clients Say About CI Associates</h2>
            <div className="testimonials-grid">
              <blockquote className="testimonial">
                <p>
                  "CI Associates is undoubtedly one of the best construction companies we've worked with. 
                  Their attention to detail and commitment to deadlines is exceptional."
                </p>
                <cite>— Manufacturing Client, Kochi</cite>
              </blockquote>
              <blockquote className="testimonial">
                <p>
                  "Among all the construction companies in Kerala we evaluated, CI Associates stood out 
                  for their technical expertise and professional approach."
                </p>
                <cite>— Commercial Developer, Bangalore</cite>
              </blockquote>
              <blockquote className="testimonial">
                <p>
                  "Their steel fabrication work is top-notch. CI Associates has proven to be one of the 
                  most reliable construction companies in South India."
                </p>
                <cite>— Industrial Client, Chennai</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Partner with Kerala's Leading Construction Company</h2>
              <p>
                Ready to work with one of the best construction companies in Kerala? Contact CI Associates 
                today to discuss your industrial or commercial construction project requirements.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">Get Quote</a>
                <a href="/projects" className="btn btn-secondary">View Our Projects</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyProfile;