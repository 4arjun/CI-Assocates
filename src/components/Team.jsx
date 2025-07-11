import React from "react";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "./Team.css";

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="team-badge"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.span>
          <motion.h2
            className="team-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Leadership & Expertise
          </motion.h2>
          <motion.p
            className="team-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Meet the dedicated professionals who drive CI Associates' success, bringing specialized expertise 
            in engineering, finance, operations, and project management to deliver exceptional construction solutions.
          </motion.p>
        </motion.div>

        <div className="team-grid">
          {/* C. I. Salam - Managing Partner */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">CS</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
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
          </motion.div>

          {/* Shaji Kumar R. - COO */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">SK</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
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
          </motion.div>

          {/* Abhijith Babu - Senior Manager (Engineering) */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">AB</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
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
          </motion.div>

          {/* Milben David - Manager (Finance) */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MD</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
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
          </motion.div>

          {/* Manu Soman - Project Coordinator */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MS</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="team-member-info">
              <h3 className="team-member-name">Manu Soman</h3>
              <p className="team-member-role">Project Coordinator</p>
              <p className="team-member-description">
                Oversees project workflows and team collaboration (M.Com background), ensuring seamless execution.
              </p>
            </div>
          </motion.div>

          {/* Shaju Stephen - Manager (Admin) */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">SS</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
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
          </motion.div>

          {/* Rakesh - Civil Engineer */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">R</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
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
          </motion.div>

          {/* Mohammed Asadullah M.S. - Team Member */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MA</span>
              </div>
              <div className="team-member-overlay">
                <div className="social-links-team">
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team; 