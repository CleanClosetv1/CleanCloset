import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// import "../Globalcss/Button.css";
import "./AddNgoForm.css";
import register from "./Image/write.png";
import verify from "./Image/pin.png";
import "swiper/css";
import "swiper/css/pagination";

const Addngoform= () => {
  let name, value;

  const [ngoData, setngoData] = useState();
  const [errors, seterror] = useState();
  // const PostData = async (e) => {
  //   e.preventDefault();
  //   const {name,
  //     email,
  //     phone,
  //     gender,
  //     infection,
  //     infectionName,
  //     pickupService,
  //     NumberOfCloths,
  //     weightOfCloths,
  //     durationOfCloths,
  //     conditionOfCloths,
  //     AddressLine1,
  //     AddressLine2,
  //     state,
  //     city,
  //     country,
  //     pinCode,
  //     dateOfPickup} = ngoData;

  //   const res = await fetch("/donorRegister", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       phone,
  //       gender,
  //       infection,
  //       infectionName,
  //       pickupService,
  //       NumberOfCloths,
  //       weightOfCloths,
  //       durationOfCloths,
  //       conditionOfCloths,
  //       AddressLine1,
  //       AddressLine2,
  //       state,
  //       city,
  //       country,
  //       pinCode,
  //       dateOfPickup,
  //     }),
  //   });
  //   const data = await res.json();
  //   if (data.status === 422 || !data) {
  //     window.alert("invalid");
  //     console.log("invalid");
  //   } else {
  //     window.alert("valid");
  //     console.log("valid");
  //   }
  // };
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setngoData({ ...ngoData, [name]: value });
  };
  return (
    <div className="DoationBasicDetailFormMContainer">
      <div className="DoationBasicDetailFormContainer">
        <div className="DoationBasicDetailFormLSide">
          <div className="DoationBasicDetailFormLSideC">
            <div className="DoationBasicDetailFormLogo">
              <img src={register} alt="" />
            </div>
            <div className="DoationBasicDetailFormIntroContent">
              <h1>Come ahead and take part in saving lives.</h1>
            </div>
            <div className="DoationBasicDetailFormCourosel">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                }}
                pagination={{
                  clickable: true,
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="DoationBasicDetailFormCouroselBody">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      loren10 Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Soluta, earum. Iure,sit?
                    </p>
                    <div className="DBDFProfileinfo">
                      <div className="profilePic">
                        <img src={verify} alt="" />
                      </div>
                      <div className="NameAndNgoName">
                        <div className="profielName">
                          <h6>Varidh Srivastav</h6>
                          <p>CleanCloset</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="DoationBasicDetailFormCouroselBody">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      loren10 Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Soluta, earum. Iure,sit?
                    </p>
                    <div className="DBDFProfileinfo">
                      <div className="profilePic">
                        <img src={verify} alt="" />
                      </div>
                      <div className="NameAndNgoName">
                        <div className="profielName">
                          <h6> Mineh H Patel</h6>
                          <p>CleanCloset</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="DoationBasicDetailFormRSide">
          <form method="POST">
            <div className="DoationBasicDetailFormRSideBody">
              <h1>Tell us a little bit more about yourself</h1>
              <div className="DoationBasicDetailFormRSideForm">
                {JSON.stringify(ngoData, undefined, 2)}
                <div className="DBDFinputFields">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="on"
                    required
                    value={ngoData["name"]}
                    onChange={(e) => {
                      setngoData({ ...ngoData, name: e.target.value });
                    }}
                  />
                </div>
                <p className="Error">{errors.name}</p>
                <div className="DBDFinputFields">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="on"
                    value={ngoData["email"]}
                    onChange={(e) => {
                      setngoData({ ...ngoData, email: e.target.value });
                    }}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="DBDFinputFields">
                  <label htmlFor="">Phone number</label>
                  <div className="MobileOtpVerifyButton">
                    <input
                      type="number"
                      placeholder="+91 909 090 9090"
                      value={ngoData["phone"]}
                      onChange={(e) => {
                        setngoData({ ...ngoData, phone: e.target.value });
                      }}
                    />
                    <div className="VrifyButton">
                      <a class="button-48">
                        <span class="text">Send Otp</span>
                      </a>
                    </div>
                  </div>
                  <p className="Error">{errors.phone}</p>
                </div>
                <div className="DBDFinputFields">
                  <label htmlFor="">Gender</label>
                  <div className="DBDFGender">
                    <input
                      type="radio"
                      name="gender"
                      id="Male"
                      //  checked={ngoData==="male"}
                      value="male"
                      onChange={(e) => {
                        setngoData({ ...ngoData, gender: e.target.value });
                        handleInputs();
                      }}
                    />
                    <label htmlFor="Male" className="Male">
                      Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      id="Female"
                      value="Female"
                      onChange={(e) => {
                        setngoData({ ...ngoData, gender: e.target.value });
                        handleInputs();
                      }}
                    />
                    <label htmlFor="Female" className="Female">
                      Female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      id="Bisexual"
                      value="Bisexual"
                      onChange={(e) => {
                        setngoData({ ...ngoData, gender: e.target.value });
                        handleInputs();
                      }}
                    />
                    <label htmlFor="Bisexual" className="Bisexual">
                      Bisexual
                    </label>
                  </div>
                </div>

                <div className="DBDFSubmitbuttons">
                  <button>submt</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Addngoform;
