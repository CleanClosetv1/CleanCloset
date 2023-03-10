import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = () => {
  return (
    <div className="SectionMainContainer">
      <div className="SectionContainer container">
        <div className="ServiceContent">
          <div className="SectionCards">
            <div className="ServiceCardBoday" data-aos="flip-left">
              <div className="serviceIcon">
                <i class="fi fi-sr-truck-loading"></i>
              </div>
              <h3>Collection and pickup</h3>
              <p>
                The website can arrange for the collection of clothing donations
                from individuals or organizations, either through a pickup
                service or a drop-off location.
              </p>
            </div>
            <div className="ServiceCardBoday" data-aos="flip-right">
              <div className="serviceIcon" id="service1">
                <i class="fi fi-sr-user-add"></i>
              </div>
              <h3>Community outreach</h3>
              <p>
                The website can use its platform to raise awareness about
                clothing waste and promote environmentally responsible
                practices.
              </p>
            </div>
            <div className="ServiceCardBoday" data-aos="flip-left">
              <div className="serviceIcon" id="service1">
              <i class="fi fi-sr-envelope"></i>
              </div>
              <h3>Select & Donate</h3>
              <p>
                The website also provides you to connect with NGO and then
                donate.
              </p>
            </div>
            <div className="ServiceCardBoday" data-aos="flip-right">
              <div className="serviceIcon">
                <i class="fi fi-sr-phone-call"></i>
              </div>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat dolor cum,
              </p>
            </div>
          </div>
          <div className="ServiceSectionImage">
            <h6>Services</h6>
            <h1>Several donation program that can make it easier for you</h1>
            <p>
            By donating clothes, you can help individuals who cannot afford to purchase new clothing, especially in low-income communities. Clothing is a basic necessity that everyone needs, and donating gently used or new clothes can provide warmth and protection to those in need. 
            </p>
            <div className="ServiceButton">
            <Link to="/DonorLandingPage">
              <button className="button-18" >
                Donate Now
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
