import React from "react";
import "./landingPage.scss";
import myPicture from "../assets/images/me.png";
import mediterraneanFood from "../assets/images/mediterranean-food.png";
import leTourDeYumm from "../assets/images/le-tour-de-yumm.png";
import addcustomers from "../assets/images/add-customer.png";
import myCV from "../assets/images/Andriol-Jaupaj-Resume.png";
import myContact from "../assets/images/contact-form.png";

export default function landingPage() {
  return (
    <>
      <div className="profile_card">
        <img className="profile_picture" src={myPicture} />
        <h1>Andriol Jaupaj</h1>
        <div className="profile_text">
          Hi. My name is Andriol. I am a passionate full stack web developer.I
          have an economics and management background. I started with udemy
          videos and enrolled at an intense but exciting bootcamp course. My
          passion for web dev just grew stronger day by day, project by project.
          My main technologies skills consist of HTML, CSS/SASS, Javascript,
          Reacts.js,Node.js to name a few of them.Typrescipt and GraphQL are on
          the list to be explored next.
        </div>
      </div>
      <input type="checkbox" id="burger-toggle" />
      <label htmlFor="burger-toggle" className="burger-menu">
        <div className="line"></div>

        <div className="line"></div>
        <div className="line"></div>
      </label>

      <div className="menu">
        <div className="menu-inner">
          <ul className="menu-nav">
            <li className="menu-nav-item">
              <a
                className="menu-nav-link"
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <div>CV</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="/projects">
                <span>
                  <div>Projects</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="/blog">
                <span>
                  <div>Blog</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="/contact">
                <span>
                  <div>Contact</div>
                </span>
              </a>
            </li>
          </ul>
          <div className="gallery">
            <div className="title">
              <p>Gallery</p>
            </div>
            <div className="images">
              <a
                className="image-link"
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image" data-label="My CV">
                  <img className="image_link-cv" src={myCV} alt="" />
                </div>
              </a>
              <a className="image-link" href="/projects">
                <div className="image" data-label="My Projects">
                  <img
                    className="image_link-one"
                    src={mediterraneanFood}
                    alt="mediterranean-food"
                  />
                  <img
                    className="image_link-two"
                    src={leTourDeYumm}
                    alt="le-tour-de-yumm"
                  />
                  <img
                    className="image_link-three"
                    src={addcustomers}
                    alt="add-customers"
                  />
                </div>
              </a>
              <a className="image-link" href="/blog">
                <div className="image" data-label="Blog-deploy soon">
                  <img
                    src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
                    alt=""
                  />
                </div>
              </a>
              <a className="image-link" href="/contact">
                <div className="image" data-label="Contact">
                  <img src={myContact} alt="contact form" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
