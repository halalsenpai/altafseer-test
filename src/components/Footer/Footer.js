import React from "react";
import logo from "../../Assets/Logo Black Text@2x.png";
import bookdemobtn from "../../Assets/Book A demo Btn.png";
import { Link } from "react-router-dom";
import FooterList from "../FooterList/FooterList";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-white text-muted">
        <div
          className="d-flex flex-wrap "
          style={{ width: "92vw", margin: "0 auto" }}
        >
          <div
            style={{ minWidth: "400px", flexGrow: "1" }}
            className="d-flex flex-column justify-content-around footer-col-1"
          >
            <img
              style={{ minWidth: "300px", maxWidth: "426px" }}
              src={logo}
              alt="logo2x"
            />
            <p>
              Jobsmideast.com is the smartest job site in the middle east. Our
              amazing team consists of some of the most experiecned and talented
              developers, social media executives amd account managers on the
              market, with years of experience in different sectors to make your
              experience more efficient & effortless. <br />
              We are the only job site in the Middle East that offers our
              clients a job platform + CRM + inbox & live chat all in one
              package. To book a demo with one of our account managers click
              below.
            </p>

            <div className="btn p-0" style={{ width: "fit-content" }}>
              <img src={bookdemobtn} alt="bookdemobtn" />
            </div>
          </div>
          <div className="d-flex footer-col-2 flex-wrap">
            <div className="footer-link-col">
              <Link className="text-success font-weight-bold footer-header-links">
                Site Map
              </Link>
              <FooterList />
            </div>
            <div className="footer-link-col">
              <Link className="text-danger font-weight-bold footer-header-links">
                Job Seekers
              </Link>
              <FooterList />
            </div>
            <div className="footer-link-col">
              <Link className="text-primary font-weight-bold footer-header-links">
                Employers & Agencies
              </Link>
              <FooterList />
            </div>
            <div className="footer-link-col">
              <Link className="text-dark font-weight-bold footer-header-links">
                Head Office
              </Link>
              <ul>
                <li>Buckinghamshire</li>
                <li>United Kingdom</li>
                <br />
                <li>enquiries@jobsmideast.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
