import React from "react";
import CV from "../assets/images/Andriol-Jaupaj-Resume.png";
import "./cv.scss";

export default function cv() {
  return (
    <div>
      <img className="resume_page" src={CV} alt="resume" />
    </div>
  );
}
