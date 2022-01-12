import React from "react";
import "./Portfolio.scss";
import screenshot from "./assets/homepage-search.webp";
import downloadIcon from "./assets/external-link-alt-solid.svg";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation("common");
  return (
    <section className="portfolioContainer">
      <div>
        <h3>{t("project.title")}</h3>
        <h4>{t("project.description")}</h4>
      </div>
      <div className="portfolioScreenshot">
        <a
          href="https://bookcrossing-328121.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="downloadIcon">
            <img src={downloadIcon} alt="Download icon" />
          </div>
          <img src={screenshot} alt="Bookcrossing Web screenschot" />
          <div className="overlay">
            <div className="projectDescription">
              <div>{t("project.text")}</div>
            </div>
          </div>
        </a>
      </div>
      <div className="projectTechDescription">
        <h4>{t("project.frontendStack")}</h4>
        <h4>{t("project.backendStack")}</h4>
      </div>
      <div className="dropdown">
        <button className="dropdownIcon">{t("project.moreInfo")}</button>
        <div className="dropdown-content">
          <div>{t("project.text")}</div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
