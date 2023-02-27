import React from "react";
import "./UnderConstructionPage.css";
import gif from "./image/108347-designer.gif"
const UnderConstructionPage = () => {
  return (
    <div className="UnderConsMainConatiner">
      <div className="UnderConstructioContainer">
        <img src={gif} alt="" />
      </div>
      <div className="UnderConstHeading">
        <h1>We are working on it</h1>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
