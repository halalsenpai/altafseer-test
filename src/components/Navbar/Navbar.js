import React from "react";
import logo from "../../Assets/Logo Black Text.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="d-flex bg-white justify-content-around align-items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex navlinks">
          <Link className="navlink"></Link>
          <Link className="navlink">Post a free job</Link>
          <Link className="navlink">Employers & agencies</Link>
          <Link className="navlink">Job seekers</Link>
          <Link className="navlink">Jobs</Link>
          <Link className="navlink">Services</Link>
          <Link className="navlink">Pricing</Link>
        </div>
        <div>
          <div className="btn mr-3">Login</div>
          <div className="btn sign-up-btn">Sign up</div>
        </div>
      </nav>
      <div></div>
    </>
  );
};

export default Navbar;
