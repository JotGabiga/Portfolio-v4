import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Portfolio from "../Portfolio/Portfolio";
import SkillSection from "../SkillSection/SkillSection";
import ContactForm from "../ContactForm/ContactForm";
import cv from "./assets/CV_JustynaGabiga.pdf";
import ScrollButton from "../ScrollButton/ScrollButton";
import { useTranslation } from "react-i18next";

const Home = () => {
  // eslint-disable-next-line
  const { t , i18n } = useTranslation("common");
  const [state, setState] = useState("skillsActive");
  const setActive = (active) => {
    setState(active);
  };
  return ( 
    <section className="mainContainer" state>
      <section className="home">
        <section className="mainSection">
          <div className="up">
            <h1>
              {t("welcome.title1")}
              <br></br>
              {t("welcome.title2")}
            </h1>
            <div className="description">
              {t("description.part1")}&nbsp;{t("description.part8")}
              {t("description.part2")}
              <strong>
                {t("description.part3")}
                <a
                  href="https://www.coderscamp.edu.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodersCrew
                </a>
                {t("description.part4")}
                {t("description.part5")}
                <a
                  href="https://sfi.pl/pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("description.title")}
                </a>
                .
              </strong>
              <br></br>
              {t("description.part6")}
              <strong>{t("description.part7")} </strong>
            </div>
            <div>
              <ul className="buttonSection">
                <Link
                  style={{ textDecoration: "none" }}
                  activeclass="active"
                  to="skills"
                  onClick={() => setActive("skillsActive")}
                >
                  <div className="navButton">
                    <div
                      className={
                        state === "skillsActive"
                          ? "clickedOrangeSquare square"
                          : "square"
                      }
                    ></div>
                    <li>{t("navigation.skills")}</li>
                  </div>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  activeclass="active"
                  to="portfolio"
                  onClick={() => setActive("portfolioActive")}
                >
                  <div className="navButton">
                    <div
                      className={
                        state === "portfolioActive"
                          ? "clickedGreenSquare square"
                          : "square"
                      }
                    ></div>
                    <li>{t("navigation.portfolio")}</li>
                  </div>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  activeclass="active"
                  to="contact"
                  onClick={() => setActive("contactActive")}
                >
                  <div className="navButton">
                    <div
                      className={
                        state === "contactActive"
                          ? "clickedPinkSquare square"
                          : "square"
                      }
                    ></div>
                    <li>{t("navigation.contact")}</li>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
          <div className="down">
            <Link to={cv} target="_blank" download>
              <button className={state === "contactActive" ? "pink" : "button"}>
                {t("button.cv")}
              </button>
            </Link>
          </div>
        </section>
        <section className="activeSectionContainer">
          <section className="activeSection">
            <div className="desktopView">
              {state === "skillsActive" && <SkillSection />}
              {state === "portfolioActive" && <Portfolio />}
              {state === "contactActive" && <ContactForm />}
            </div>
            <div className="mobileView">
              <h2>{t("navigation.skills")}</h2>
              <SkillSection />
              <h2>{t("navigation.portfolio")}</h2>
              <Portfolio />
              <h2>{t("navigation.contact")}</h2>
              <ContactForm />
              <ScrollButton />
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Home;
