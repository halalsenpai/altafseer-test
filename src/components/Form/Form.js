import React from "react";
import "../FormCard/FormCard.scss";
import submitBtn from "../../Assets/Submit@2x.png";
import addpfp from "../../Assets/Plus Btn.png";

const Form = () => {
  return (
    <div>
      <form className="p-5">
        <h4 className="text-primary mb-3" style={{ fontWeight: "700" }}>
          Employer Details
        </h4>
        <div className="text-right">
          <label for="file-upload" class="custom-file-upload">
            <img src={addpfp} alt="" />
          </label>
          <input id="file-upload" type="file" />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="company-name">Company Name</label>
            <input type="email" class="form-control" id="company-name" />
          </div>
          <div class="form-group col-md-6">
            <label for="job-title">Job Title</label>
            <select name="" id="">
              <option value="1">select</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="first-name">First Name</label>
            <input type="email" class="form-control" id="first-name" />
          </div>
          <div class="form-group col-md-6">
            <label for="last-name">Last Name</label>
            <input type="text" class="form-control" id="last-name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6 position-relative">
            <label for="mobile-number">Mobile number</label>
            <span
              className="position-absolute"
              style={{ top: "48px", left: "20px" }}
            >
              +92
            </span>
            <input
              type="phone"
              class="form-control custom-number-input"
              id="mobile-number"
              style={{ paddingLeft: "60px" }}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="work-phone">Direct work phone</label>
            <input type="text" class="form-control" id="work-phone" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="mobile-number">Work email address</label>
            <input type="phone" class="form-control" id="mobile-number" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="">How did you find us</label>
            <select name="" id="">
              <option value="1">select</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label
              class="form-check-label text-muted small-txt"
              for="gridCheck"
            >
              I agree with Jobsmideast.com{" "}
              <span className="text-primary">
                terms & conditions, privacy policy,
              </span>{" "}
              and I agree to recive future emails, texts and communications.
            </label>
          </div>
        </div>
        <div className="position-relative">
          <button
            className="btn p-0 position-absolute"
            style={{ width: "fit-content", right: "0px" }}
          >
            <img src={submitBtn} alt="SubmitBtn" style={{ height: "46px" }} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

// Could have refactored the input fields and made them reusable as
// components but that would make further complications downn the line
// when we are validating data and holding states in them so i kept it simple
