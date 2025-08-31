import React, { useEffect } from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import logoImage from "../assets/logo.jpeg";
import "./Footer.css";

const Footer = () => {


  return (
    <footer id="contact" className="footer">
      <div className="footer__container">
        {/* Main Content */}
        <div className="footer__main" data-aos="fade-up" data-aos-delay="100">
          {/* Company Section */}
          <div className="footer__company">
            <div className="footer__logo">
              <img
                src={logoImage}
                alt="CI Associates Logo"
                className="footer__logo-img"
              />
              <div className="footer__logo-text">
                <h3>CI ASSOCIATES</h3>
                <span>Construction Excellence</span>
              </div>
            </div>
            <p className="footer__description">
              We deliver high‑quality residential and commercial projects with
              integrity and craftsmanship.
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer__contact">

            {/* Bengaluru Office */}
            <div
              className="footer__office"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="footer__office-header">
                <h5>Bengaluru Office</h5>
              </div>
              <div className="footer__info">
                <div className="footer__info-item">
                  <MapPin size={16} />
                  <span>
                    No. 418, 4th Main Road, 4th Cross, Coffee Board Layout, H.A.
                    Farm Post, Hebbal, Kempapura, Bengaluru - 560024
                  </span>
                </div>
                <div className="footer__info-item">
                  <Phone size={16} />
                  <div className="footer__links">
                    <a href="tel:+919745105909">+91 97451 05909</a>
                    <a href="tel:+917012403609">+91 70124 03609</a>
                  </div>
                </div>
                <div className="footer__info-item">
                  <Mail size={16} />
                  <div className="footer__links">
                    <a href="mailto:ciassociates@gmail.com">
                      ciassociates@gmail.com
                    </a>
                    <a href="mailto:ciaassociates@hotmail.com">
                      ciaassociates@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} CI Associates. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        className="footer__back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
