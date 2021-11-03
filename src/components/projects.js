import React from "react";
import mediterraneanFood from "../assets/images/mediterranean-food-two.png";
import leTourDeYumm from "../assets/images/le-tour-de-yumm.png";
import addcustomers from "../assets/images/add-customer.png";
import GitHub from "../assets/images/github-logo.png";
import homeIcon from "../assets/images/icons8-home-24.png";
import "./projects.scss";

export default function Projects() {
  return (
    <>
      <div className="menu-inner">
        <ul className="menu-nav">
          <li className="menu-nav-item">
            <a className="menu-nav-link" href="/home">
              <div>
                <img className="menu_nav-home" src={homeIcon} alt="home icon" />
              </div>
            </a>
          </li>
          <li className="menu-nav-item">
            <a
              className="menu-nav-link"
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="menu_cv-link">CV</div>
            </a>
          </li>
          <li className="menu-nav-item">
            <a className="menu-nav-link" href="/projects">
              <div className="menu_projects-link">Projects</div>
            </a>
          </li>
          <li className="menu-nav-item">
            <a className="menu-nav-link" href="/blog">
              <div className="menu_blog-link">Blog</div>
            </a>
          </li>
          <li className="menu-nav-item">
            <a className="menu-nav-link" href="/contact">
              <div className="menu_contact-link">Contact</div>
            </a>
          </li>
        </ul>
        <div className="menu_nav-title">My Projects</div>
        <div className="flip flip-vertical">
          <div className="front">
            <img
              className="card__image-one"
              src={mediterraneanFood}
              alt="mediterranean food"
            />
          </div>
          <div className="back">
            <h2>Mediterranean Food</h2>
            <p>
              This is my capstone project. It is a full stack app. The
              techologies used to build this app is React.js for the front-end
              and Node.js with Express.js for the back-end.
              <a
                href="https://github.com/andriol/Andriol-Jaupaj-Mediterranean-Food"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github__logo-image"
                  src={GitHub}
                  alt="github-logo"
                />
              </a>
            </p>
          </div>
        </div>
        <div className="flip flip-vertical">
          <div className="front">
            <img
              className="card__image-two"
              src={leTourDeYumm}
              alt="mediterranean food"
            />
          </div>
          <div className="back">
            <h2>Le Tour de Yumm</h2>
            <p>
              This is a project I made for a friend.It is a Node.js project
              using a mongoDB database. It also uses Passport.js for
              authentication.
              <a
                href="https://github.com/andriol/le-tour-de-yumm-mongoDB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github__logo-image"
                  src={GitHub}
                  alt="github-logo"
                />
              </a>
            </p>
          </div>
        </div>
        <div className="flip flip-vertical">
          <div className="front">
            <img
              className="card__image-three"
              src={addcustomers}
              alt="mediterranean food"
            />
          </div>
          <div className="back">
            <h2>Customer Management</h2>
            <p>
              This is another full stack project for Customer Management.It adds
              and removes customer from a SQL database.Technologies used are
              React.js, Node.js,Express.js,Bookshelf.js and Knex.js.
              <a
                href="https://github.com/andriol/CUSTOMERS-CRUD-LIST"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github__logo-image"
                  src={GitHub}
                  alt="github-logo"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
