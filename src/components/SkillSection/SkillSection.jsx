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
      <div className="skillIcon strong">
        <img src={htmlGraphic} alt="html icon" />
        <h3 className="skillName">Html 5</h3>
      </div>

      <div className="skillIcon strong">
        <img src={cssGraphic} alt="css icon" />
        <h3 className="skillName">Css 3</h3>
      </div>

      <div className="skillIcon medium">
        <img src={sassGraphic} alt="sass icon" />
        <h3 className="skillName">Sass</h3>
      </div>

      <div className="skillIcon medium">
        <img src={javaScriptGraphic} alt="javascript  icon" />
        <h3 className="skillName">Java Script</h3>
      </div>

      <div className="skillIcon medium">
        <img src={reactGraphic} alt="react icon" />
        <h3 className="skillName">React</h3>
      </div>

      <div className="skillIcon weak">
        <img src={nodejsGraphic} alt="react icon" />
        <h3 className="skillName">Node.js</h3>
      </div>

      <div className="skillIcon medium">
        <img src={gitHubGraphic} alt="github icon" />
        <h3 className="skillName">Github</h3>
      </div>

      <div className="skillIcon medium">
        <img src={figmaGraphic} alt="figma icon" />
        <h3 className="skillName">Figma</h3>
      </div>

      <div className="skillIcon weak">
        <img src={mongodbGraphic} alt="figma icon" />
        <h3 className="skillName">MongoDb</h3>
      </div>

      <div className="skillIcon weak">
        <img src={herokuGraphic} alt="figma icon" />
        <h3 className="skillName">Heroku</h3>
      </div>

      <div className="skillIcon weak">
        <img src={firebaseGraphic} alt="figma icon" />
        <h3 className="skillName">Firebase</h3>
      </div>

      <div className="skillIcon strong">
        <img src={ux} alt="figma icon" />
        <h3 className="skillName">UI/UX</h3>
      </div>
    </section>
  );
};
export default SkillSection;
