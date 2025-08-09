import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Team.css";

const Team = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(3);

  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 900, 
      offset: 80, 
      easing: "ease-out-cubic" 
    });

    // Function to determine members per page based on screen size
    const updateMembersPerPage = () => {
      if (window.innerWidth <= 480) {
        setMembersPerPage(1); // Mobile: 1 card per row
      } else if (window.innerWidth <= 768) {
        setMembersPerPage(1); // Small tablet: 1 card per row
      } else if (window.innerWidth <= 991) {
        setMembersPerPage(2); // Tablet: 2 cards per row
      } else {
        setMembersPerPage(3); // Desktop: 3 cards per row
      }
    };

    // Set initial value
    updateMembersPerPage();

    // Add event listener for window resize
    window.addEventListener('resize', updateMembersPerPage);

    // Cleanup
    return () => window.removeEventListener('resize', updateMembersPerPage);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "C. I. Salam",
      title: "Managing Partner",
      initials: "CS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Visionary leader and founder, overseeing strategic direction and overall operations of CI Associates."
    },
    {
      id: 2,
      name: "Shaji Kumar R.",
      title: "Chief Operating Officer (COO)",
      initials: "SK",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Senior executive (DME) responsible for day-to-day operations and efficient project execution."
    },
    {
      id: 3,
      name: "Abhijith Babu",
      title: "Senior Manager (Engineering)",
      initials: "AB",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "B.Tech (Civil) professional leading engineering operations with a focus on technical excellence."
    },
    {
      id: 4,
      name: "Milben David",
      title: "Manager (Finance)",
      initials: "MD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Finance consultant (FCA, IP) managing financial planning, reporting, and regulatory compliance."
    },
    {
      id: 5,
      name: "Manu Soman",
      title: "Project Coordinator",
      initials: "MS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "B.Tech (Civil) professional coordinating project timelines, resources, and client communications."
    },
    {
      id: 6,
      name: "Shaju Stephen",
      title: "Manager (Admin)",
      initials: "SS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Handles administrative management and supports coordination across departments."
    },
    {
      id: 7,
      name: "Rakesh",
      title: "Civil Engineer",
      initials: "R",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "On-site civil engineer contributing to structural design, planning, and site management."
    },
    {
      id: 8,
      name: "Mohammed Asadullah M.S.",
      title: "Team Member",
      initials: "MA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Team member contributing to project execution; role and specialization to be confirmed."
    }
  ];

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const currentMembers = teamMembers.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="team" className="board-directors-section">
      <div className="board-directors-container">
        <div className="board-directors-content">
          {/* Left side - Text content */}
          <div className="board-directors-text">
            <div
              className="board-directors-header"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="board-directors-title">Our Team</h2>
              <div className="board-directors-description-row">
                <p className="board-directors-description">
                  Meet the dedicated professionals who drive CI Associates' success, bringing specialized expertise 
                  in engineering, finance, operations, and project management to deliver exceptional construction solutions.
                </p>
                <div className="board-directors-nav-buttons">
                  <button 
                    className="board-directors-nav-btn board-directors-prev-btn"
                    onClick={prevPage}
                    aria-label="Previous directors"
                  >
                    ‹
                  </button>
                  <button 
                    className="board-directors-nav-btn board-directors-next-btn"
                    onClick={nextPage}
                    aria-label="Next directors"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Team cards */}
          <div className="board-directors-cards-section">
            <div className="board-directors-grid">
              {currentMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="board-directors-card"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="board-directors-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="board-directors-info">
                    <h3 className="board-directors-name">{member.name}</h3>
                    <p className="board-directors-title-text">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="board-directors-pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`board-directors-dot ${index === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 