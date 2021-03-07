import React from "react";
import "./FormCard.scss";
import FormBgImg from "../../Assets/Side Background@2x.png";
import logo from "../../Assets/Logo@2x.png";
import ic01 from "..//../Assets/Icon 01.png";
import ic02 from "..//../Assets/Icon 02.png";
import ic03 from "..//../Assets/Icon 03.png";
import ic04 from "..//../Assets/Icon 04.png";
import Features from "../Features/Features";
import Form from "../Form/Form";
import backBtn from "../../Assets/Back.png";

const features = [
  {
    name: "Free CRM",
    description: " Builtin CRM with drag and Drop function",
    imgSrc: ic01,
  },
  {
    name: "Save up to 75%",
    description: "Save up to 75% of to your annual recruitment budget",
    imgSrc: ic02,
  },
  {
    name: "Direct chat + Inbox",
    description: "Connect with candidates direct, no more emails!",
    imgSrc: ic03,
  },
  {
    name: "Candidate Match",
    description:
      " Set accurate filters and let the system find you job seekers",
    imgSrc: ic04,
  },
];

const FormCard = () => {
  return (
    <>
      <div
        className="position-absolute btn"
        style={{ top: "50%", left: "6rem" }}
      >
        <img src={backBtn} alt="" />
      </div>
      <div className="container" style={{ minHeight: "800px" }}>
        <div className="custom-card bg-white">
          <div className="Form">
            <Form />
          </div>
          <div className="position-relative">
            <img
              src={FormBgImg}
              alt="#"
              style={{ width: "100%", height: "700px" }}
            />
            <div
              className="d-flex flex-column position-absolute align-items-center "
              style={{ top: "120px" }}
            >
              <img src={logo} alt="" style={{ width: "80%" }} />
              <div className="pl-4 pt-3 pr-5">
                {features.map((feature) => (
                  <Features
                    title={feature.name}
                    description={feature.description}
                    imgSrc={feature.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCard;
