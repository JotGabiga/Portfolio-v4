import React, { useState } from "react";
import "./SocialMediaBar.scss";
import linkedIn from "./assets/icons8-linkedin.svg";
import github from "./assets/icons8-github.svg";
import { useTranslation } from "react-i18next";
import globe from "./assets/globe-europe-solid(1).svg";

const SocialMediaBar = () => {
  const [lang, setLang] = useState("pl");
  // eslint-disable-next-line
  let [ t , i18n ] = useTranslation("common");
  let changeLang = (lng) => {
    lang === "en" ? setLang("pl") : setLang("en");
    i18n.changeLanguage(lng);
  };
  return (
    <section className="socialMediaBar">
      <section className="socialLinks">
        <a
          href="https://www.linkedin.com/in/justyna-gabiga-187388172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="linkedin icon"></img>
        </a>
        <a href="https://github.com/JotGabiga" target="_blank" rel="noreferrer">
          <img src={github} alt="github  icon"></img>
        </a>
        <div>
          <div className="changeLanguage" onClick={() => changeLang(lang)}>
            <img src={globe} alt="changeLanguage"></img>
            <h4>{lang}</h4>
          </div>
          <div
            className="changeLanguageMobile"
            onClick={() => changeLang(lang)}
          >
            <h4>{lang}</h4>
          </div>
        </div>
      </section>
    </section>
  );
};
export default SocialMediaBar;
