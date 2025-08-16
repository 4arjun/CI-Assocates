import React, { useEffect, useState, useRef } from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "./Team.css";

const Team = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Function to determine members per page based on screen size
    const updateMembersPerPage = () => {
      if (window.innerWidth <= 480) {
        setMembersPerPage(1); // 1 member per page on very small screens
      } else if (window.innerWidth <= 768) {
        setMembersPerPage(2); // 2 members per page on mobile
      } else if (window.innerWidth <= 1024) {
        setMembersPerPage(2); // 2 members per page on tablet
      } else {
        setMembersPerPage(3); // 3 members per page on desktop
      }
    };

    // Set initial value
    updateMembersPerPage();

    // Add event listener
    window.addEventListener("resize", updateMembersPerPage);

    // Cleanup
    return () => window.removeEventListener("resize", updateMembersPerPage);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "C. I. Salam",
      title: "Managing Partner",
      initials: "CS",
      description:
        "Visionary leader and founder, overseeing strategic direction and overall operations of CI Associates.",
    },
    {
      id: 2,
      name: "Shaji Kumar R.",
      title: "Chief Operating Officer (COO)",
      initials: "SK",
      description:
        "Senior executive (DME) responsible for day-to-day operations and efficient project execution.",
    },
    {
      id: 3,
      name: "Shaju Stephen",
      title: "Manager",
      initials: "SS",
      description:
        "Handles administrative management and supports coordination across departments.",
    },
    {
      id: 4,
      name: "Manu Soman",
      title: "Project Coordinator",
      initials: "MS",
      description:
        "B.Tech (Civil) professional coordinating project timelines, resources, and client communications.",
    },
    {
      id: 5,
      name: "Milben David",
      title: "Finance Consultant",
      initials: "MD",
      description:
        "Finance consultant (FCA, IP) managing financial planning, reporting, and regulatory compliance.",
    },
    {
      id: 6,
      name: "Abhijith Babu",
      title: "Senior Manager (Engineering)",
      initials: "AB",
      description:
        "B.Tech (Civil) professional leading engineering operations with a focus on technical excellence.",
    },
    {
      id: 7,
      name: "Rakesh",
      title: "Civil Engineer",
      initials: "R",
      description:
        "On-site civil engineer contributing to structural design, planning, and site management.",
    },
    {
      id: 8,
      name: "Mohammed Asadullah M.S.",
      title: "Civil Engineer",
      initials: "MA",
      description:
        "Civil engineer contributing to project execution and structural design.",
    },
    {
      id: 9,
      name: "Anoop S",
      title: "Site Engineer",
      initials: "AS",
      description:
        "Site engineer responsible for on-site supervision and quality control.",
    },
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

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      nextPage();
    }
    if (isRightSwipe && currentPage > 0) {
      prevPage();
    }
  };

  return (
    <section id="team" className="ca-team">
      <div className="ca-team__container">
        <div className="ca-team__content" data-aos="fade-up">
          {/* Left side - Content */}
          <div className="ca-team__text-section">
            <div className="ca-team__text-wrapper">
              <span
                className="section-subtitle"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Our Leadership
              </span>
              <h2
                className="section-title"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Meet Our Expert Team
              </h2>
              <div className="ca-team__description-row">
                <p 
                  className="ca-team__description"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Meet the dedicated professionals who drive CI Associates'
                  success, bringing specialized expertise in engineering,
                  finance, operations, and project management to deliver
                  exceptional construction solutions.
                </p>
                <div className="ca-team__nav-buttons">
                  <IconButton
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    aria-label="Previous directors"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      color: "#1a1a1a",
                      border: "1px solid rgba(212, 165, 116, 0.3)",
                      width: 48,
                      height: 48,
                      marginRight: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#d4a574",
                        color: "#1a1a1a",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(212, 165, 116, 0.3)",
                      },
                      "&:disabled": {
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        color: "rgba(26, 26, 26, 0.3)",
                        transform: "none",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={nextPage}
                    disabled={
                      currentPage >=
                      Math.ceil(teamMembers.length / membersPerPage) - 1
                    }
                    aria-label="Next directors"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      color: "#1a1a1a",
                      border: "1px solid rgba(212, 165, 116, 0.3)",
                      width: 48,
                      height: 48,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#d4a574",
                        color: "#1a1a1a",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(212, 165, 116, 0.3)",
                      },
                      "&:disabled": {
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        color: "rgba(26, 26, 26, 0.3)",
                        transform: "none",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <ChevronRight />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Team cards */}
          <div className="ca-team__cards-section">
            <div 
              className="ca-team__grid"
              ref={cardsRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {currentMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="ca-team__card"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="ca-team__image">
                    <div className="ca-team__initials">{member.initials}</div>
                  </div>
                  <div className="ca-team__info">
                    <h3 className="ca-team__name">{member.name}</h3>
                    <p className="ca-team__title">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ca-team__mobile-hint">
              <span>Swipe to view more team members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
