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
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            className="team-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our dedicated professionals bring decades of experience and
            expertise to every project, ensuring exceptional quality and
            innovative solutions for all your construction needs.
          </motion.p>
        </motion.div>

        <div className="team-grid">
          {/* Team Member 1 */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">JD</span>
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
              <h3 className="team-member-name">John Davis</h3>
              <p className="team-member-role">Project Manager</p>
              <p className="team-member-description">
                Over 15 years of experience in managing large-scale
                construction projects with expertise in residential and
                commercial developments.
              </p>
              <div className="team-member-skills">
                <span className="skill-tag">Project Management</span>
                <span className="skill-tag">Team Leadership</span>
                <span className="skill-tag">Quality Control</span>
              </div>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">SW</span>
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
              <h3 className="team-member-name">Sarah Wilson</h3>
              <p className="team-member-role">Lead Architect</p>
              <p className="team-member-description">
                Award-winning architect specializing in sustainable design and
                modern construction techniques with 12+ years of industry
                experience.
              </p>
              <div className="team-member-skills">
                <span className="skill-tag">Architectural Design</span>
                <span className="skill-tag">Sustainable Building</span>
                <span className="skill-tag">3D Modeling</span>
              </div>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MT</span>
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
              <h3 className="team-member-name">Michael Thompson</h3>
              <p className="team-member-role">Construction Supervisor</p>
              <p className="team-member-description">
                Experienced construction supervisor ensuring safety standards
                and quality execution with expertise in heavy machinery and
                site management.
              </p>
              <div className="team-member-skills">
                <span className="skill-tag">Site Management</span>
                <span className="skill-tag">Safety Compliance</span>
                <span className="skill-tag">Quality Assurance</span>
              </div>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">ER</span>
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
              <h3 className="team-member-name">Emily Roberts</h3>
              <p className="team-member-role">Interior Designer</p>
              <p className="team-member-description">
                Creative interior designer with a passion for transforming
                spaces into functional and beautiful environments that exceed
                client expectations.
              </p>
              <div className="team-member-skills">
                <span className="skill-tag">Interior Design</span>
                <span className="skill-tag">Space Planning</span>
                <span className="skill-tag">Color Theory</span>
              </div>
            </div>
          </motion.div>

          {/* Team Member 5 */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">DL</span>
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
              <h3 className="team-member-name">David Lee</h3>
              <p className="team-member-role">Structural Engineer</p>
              <p className="team-member-description">
                Licensed structural engineer with expertise in analyzing and
                designing safe, efficient structural systems for residential
                and commercial buildings.
              </p>
              <div className="team-member-skills">
                <span className="skill-tag">Structural Analysis</span>
                <span className="skill-tag">Building Codes</span>
                <span className="skill-tag">CAD Design</span>
              </div>
            </div>
          </motion.div>

          {/* Team Member 6 */}
          <motion.div
            className="team-member-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="team-member-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">AG</span>
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
              <h3 className="team-member-name">Anna Garcia</h3>
              <p className="team-member-role">Financial Coordinator</p>
              <p className="team-member-description">
                Expert financial coordinator managing project budgets, cost
                estimation, and ensuring projects are delivered within
                financial parameters.
              </p>
              <div className="team-member-skills">
                <span className="skill-tag">Budget Management</span>
                <span className="skill-tag">Cost Analysis</span>
                <span className="skill-tag">Financial Planning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team; 