import React from "react";
import { motion } from "framer-motion";
import "./Clients.css";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "TechCorp Solutions",
      sector: "Technology",
      project: "Corporate Headquarters"
    },
    {
      id: 2,
      name: "Prestige Group",
      sector: "Real Estate",
      project: "Residential Complex"
    },
    {
      id: 3,
      name: "Infosys Limited",
      sector: "IT Services",
      project: "Development Center"
    },
    {
      id: 4,
      name: "Brigade Enterprises",
      sector: "Real Estate",
      project: "Commercial Mall"
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="clients" className="section clients-section">
      <div className="container-clients">
        <motion.div
          className="clients-section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="clients-section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Clients
          </motion.p>
          <motion.h2
            className="clients-section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by Leading Organizations
          </motion.h2>
          <motion.p
            className="clients-section-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We have had the privilege of working with some of the most respected companies 
            across various industries, delivering exceptional construction solutions that meet 
            their unique requirements.
          </motion.p>
        </motion.div>

        <motion.div
          className="clients-portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="clients-portfolio-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="clients-portfolio-logo">
                <div className="clients-logo-placeholder">
                  {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
              </div>
              <div className="clients-portfolio-info">
                <h3 className="clients-company-name">{client.name}</h3>
                <p className="clients-company-sector">{client.sector}</p>
                <p className="clients-project-type">{client.project}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </section>
  );
};

export default Clients; 