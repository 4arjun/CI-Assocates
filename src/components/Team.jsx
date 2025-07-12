import React, { useEffect } from "react";
import { Linkedin, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Team.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 900, 
      offset: 80, 
      easing: "ease-out-cubic" 
    });
  }, []);

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div
          className="team-header"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span
            className="team-badge"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Team
          </span>
          <h2
            className="team-title"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Leadership & Expertise
          </h2>
          <p
            className="team-description"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Meet the dedicated professionals who drive CI Associates' success, bringing specialized expertise 
            in engineering, finance, operations, and project management to deliver exceptional construction solutions.
          </p>
        </div>

        <div className="team-grid">
          {/* C. I. Salam - Managing Partner */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">CS</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">C. I. Salam</h3>
              <p className="team-member-role">Managing Partner</p>
              <p className="team-member-description">
                Visionary leader and founder, overseeing strategic direction and overall operations of CI Associates.
              </p>
        
            </div>
          </div>

          {/* Shaji Kumar R. - COO */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">SK</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Shaji Kumar R.</h3>
              <p className="team-member-role">Chief Operating Officer (COO)</p>
              <p className="team-member-description">
                Senior executive (DME) responsible for day-to-day operations and efficient project execution.
              </p>
            </div>
          </div>

          {/* Abhijith Babu - Senior Manager (Engineering) */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">AB</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Abhijith Babu</h3>
              <p className="team-member-role">Senior Manager (Engineering)</p>
              <p className="team-member-description">
                B.Tech (Civil) professional leading engineering operations with a focus on technical excellence.
              </p>
            </div>
          </div>

          {/* Milben David - Manager (Finance) */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MD</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Milben David</h3>
              <p className="team-member-role">Manager (Finance)</p>
              <p className="team-member-description">
                Finance consultant (FCA, IP) managing financial planning, reporting, and regulatory compliance.
              </p>
            </div>
          </div>

          {/* Manu Soman - Project Coordinator */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MS</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Manu Soman</h3>
              <p className="team-member-role">Project Coordinator</p>
              <p className="team-member-description">
                B.Tech (Civil) professional coordinating project timelines, resources, and client communications.
              </p>
            </div>
          </div>

          {/* Shaju Stephen - Manager (Admin) */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">SS</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Shaju Stephen</h3>
              <p className="team-member-role">Manager (Admin)</p>
              <p className="team-member-description">
                Handles administrative management and supports coordination across departments.
              </p>
            </div>
          </div>

          {/* Rakesh - Civil Engineer */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">R</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Rakesh</h3>
              <p className="team-member-role">Civil Engineer</p>
              <p className="team-member-description">
                On-site civil engineer contributing to structural design, planning, and site management.
              </p>
            </div>
          </div>

          {/* Mohammed Asadullah M.S. - Team Member */}
          <div
            className="team-member-card"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MA</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="social-link"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Mohammed Asadullah M.S.</h3>
              <p className="team-member-role">Team Member</p>
              <p className="team-member-description">
                Team member contributing to project execution; role and specialization to be confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 