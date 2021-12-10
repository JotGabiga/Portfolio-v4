import React from "react";
import "./Portfolio.scss";
import screenshot from "./assets/homepage-search.png";
import { useTranslation } from "react-i18next";

const Portfolio = (props) => {
  const { t,i18n } = useTranslation("common");
  return (
    <section className="portfolioContainer">
      <div>
        <h3>{t("project.title")}</h3>
        <h4>{t("project.description")}</h4>
      </div>
      <div className="portfolioScreenshot">
        <a href="https://bookcrossing-328121.web.app/">
          <img src={screenshot} alt="Bookcrossing Web screenschot" />
        </a>
      </div>
      <div>
        <h4>{t("project.frontendStack")}</h4>
        <h4>{t("project.backendStack")}</h4>
      </div>
    </section>
  );
};
export default Portfolio;


