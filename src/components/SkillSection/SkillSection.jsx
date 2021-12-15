import React from "react";
import "./SkillSection.scss";
import htmlGraphic from "./assets/html5-brands.svg";
import cssGraphic from "./assets/css3-alt-brands.svg";
import javaScriptGraphic from "./assets/js-square-brands.svg";
import reactGraphic from "./assets/react-brands.svg";
import gitHubGraphic from "./assets/github-brands.svg";
import figmaGraphic from "./assets/figma-brands.svg";
import nodejsGraphic from "./assets/node-js-brands.svg";
import sassGraphic from "./assets/sass-brands.svg";
import firebaseGraphic from "./assets/firebase-svgrepo-com.svg";
import herokuGraphic from "./assets/heroku-svgrepo-com.svg";
import mongodbGraphic from "./assets/mongodb-svgrepo-com.svg";
import ux from "./assets/design-thinking.svg";

const SkillSection = (props) => {
  return (
    <section className="wrapper">
      <div className="skillIcon">
        <img src={htmlGraphic} alt="html icon" />
        <h3>Html 5</h3>
      </div>

      <div className="skillIcon">
        <img src={cssGraphic} alt="css icon" />
        <h3>Css 3</h3>
      </div>

      <div className="skillIcon">
        <img src={sassGraphic} alt="sass icon" />
        <h3>Sass</h3>
      </div>

      <div className="skillIcon">
        <img src={javaScriptGraphic} alt="javascript  icon" />
        <h3>Java Script</h3>
      </div>

      <div className="skillIcon">
        <img src={reactGraphic} alt="react icon" />
        <h3>React</h3>
      </div>

      <div className="skillIcon">
        <img src={nodejsGraphic} alt="react icon" />
        <h3>Node.js</h3>
      </div>

      <div className="skillIcon">
        <img src={gitHubGraphic} alt="github icon" />
        <h3>Github</h3>
      </div>

      <div className="skillIcon">
        <img src={figmaGraphic} alt="figma icon" />
        <h3>Figma</h3>
      </div>

      <div className="skillIcon">
        <img src={mongodbGraphic} alt="figma icon" />
        <h3>MongoDb</h3>
      </div>

      <div className="skillIcon">
        <img src={herokuGraphic} alt="figma icon" />
        <h3>Heroku</h3>
      </div>

      <div className="skillIcon">
        <img src={firebaseGraphic} alt="figma icon" />
        <h3>Firebase</h3>
      </div>

      <div className="skillIcon">
        <img src={ux} alt="figma icon" />
        <h3>UI/UX</h3>
      </div>
    </section>
  );
};
export default SkillSection;
