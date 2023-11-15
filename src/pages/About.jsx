import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

const About = () => {
  return (
    <div className="d-flex justify-content-center m-4 ">
      <div className="card my-5" style={{ width: "20rem" }}>
        <div className="card-body text-center">
          <p className="card-text  fs-3">
            This blog has been developed by <br />{" "}
            <span className="fw-bolder">Hasan Turkel</span> <br /> who is a
            front-end developer.
          </p>
          <hr />
          <h4 >For Contact</h4>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://www.linkedin.com/in/hasan-turkel/" target="blank">
              <BiLogoLinkedin className="fs-2 text-primary" />
            </a>

            <a href="https://github.com/Hasan-Turkel" target="blank">
              <AiFillGithub className="fs-2 text-dark" />
            </a>

            <a href="mailto:mhturkel@gmail.com" target="blank">
              <BiLogoGmail className="fs-2 text-danger" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
