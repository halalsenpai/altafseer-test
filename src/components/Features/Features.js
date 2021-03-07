import React from "react";

const Features = ({ title, description, imgSrc }) => {
  return (
    <>
      <div className="d-flex mb-4 align-items-center">
        <img src={imgSrc} alt="" style={{ objectFit: "contain" }} />
        <div className="text-white ml-2">
          <p className="mb-0 medium-txt">{title}</p>
          <p className="small-txt">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Features;
