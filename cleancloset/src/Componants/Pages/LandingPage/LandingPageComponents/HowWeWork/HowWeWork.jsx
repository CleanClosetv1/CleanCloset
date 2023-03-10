import React from "react";
import { Link } from "react-router-dom";
import "./HowWeWork.css";
const HowWeWork = () => {
  return (
    <div className="HowWeMainContainer ">
      <div className="howweworkcontainer container">
        <h6>Work</h6>
        <h1>How does it work?</h1>
        <p>
          By offering these services, CleanCloset can provide a valuable service
          to the community, help reduce waste, and support those in need.
        </p>
        <div className="HowWeWorkCardContainer">
          <div className="HowWeWOrkCardBody" data-aos="flip-left">
            <div className="HowWeWorkCardicon">
              <i class="fi fi-sr-truck-loading"></i>
            </div>
            <div className="HwwCardHeading">
              <h3>Schedule a pickup</h3>
            </div>
            <div className="HwwCardPara">
              The website can arrange for the collection of clothing donations
              from individuals or organizations
            </div>
            <div className="HwwCardButton">
              <Link to="/DonorLandingPage">
                <button class="button-18">Donate Now</button>
              </Link>
            </div>
          </div>
          <div
            className="HowWeWOrkCardBody "
            id="donateatyour"
            data-aos="flip-left"
          >
            <div className="HowWeWorkCardicon">
              <i class="fi fi-sr-door-open"></i>
            </div>
            <div className="HwwCardHeading">
              <h3>Donate at Doorstep</h3>
            </div>
            <div className="HwwCardPara">
              The website can provide delivery partner to pick up from door and
              donors with the ability to track the status.
            </div>
            <div className="HwwCardButton">
              <Link to="/DonorLandingPage">
                <button class="button-18">Donate Now</button>
              </Link>
            </div>
          </div>
          <div className="HowWeWOrkCardBody" data-aos="flip-left">
            <div className="HowWeWorkCardicon">
              <i class="fi fi-sr-badge"></i>
            </div>
            <div className="HwwCardHeading">
              <h3>Get Certeified</h3>
            </div>
            <div className="HwwCardPara">
              CleanCloset will provide you certificate and reward every time
              when you donate, which you can use
            </div>
            <div className="HwwCardButton">
              <Link to="/DonorLandingPage">
                <button class="button-18">Donate Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
