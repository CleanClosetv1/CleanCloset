import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ReactDOM from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// from donationModule

// Footer Header
// import AddNgoForm from "./Componants/Pages/NgoModuleForm/AddNgoForm";
import Footer from "./Componants/Pages/Footer/Footer";
import Navbar from "./Componants/Pages/Navbar/Navbar";
import "./Componants/GlobalCss/ButtonScss.css";
// Differenet Componants
import LazyLoad from "./Componants/Pages/LazyLoad/LazyLoad";
import DonorTimeline from "./Componants/Pages/DonationModule/Pages/DonationClientForm/DonorTimeline/DonorTimeline";
import DonorFormTimeline from "./Componants/Pages/DonationModule/Pages/DonorFormTimeline/DonorFormTimeline";
// import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Componants/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import ErrorPage from "./Componants/Pages/404page/404ErrorPage";
import UnderConstructionPage from "./Componants/Pages/underConstructionPage/UnderConstructionPage";
// import AddNgoForm from "./Componants/Pages/NgoModuleForm/AddNgoForm";

// import { Auth0Provider } from "@auth0/auth0-react";

// from DonationModule

const Addngoform = lazy(()=>{
  import("./Componants/Pages/AddNgoForm/AddNgoForm")
})
const DonationRegistration = lazy(()=>import("./Componants/Pages/DonationModule/Pages/DonationRegistrationForm/DonationRegistration"))
const DonationFormContext = lazy(()=>import("./Componants/Pages/DonationModule/Pages/DonationRegistrationForm/DonationFormContext/DonationFormContext"))
const DonationDashboardContext = lazy(()=>import("./Componants/Pages/DonationModule/Pages/DonationDashboard/DonatationDshboardContext/DonationDashboardContext"))
const DonationDashbaord = lazy(()=>import("./Componants/Pages/DonationModule/Pages/DonationDashboard/DonationDashbaord"))
const DonationSignUp = lazy(() =>
  import(
    "./Componants/Pages/DonationModule/Pages/DonationClientForm/DonationSignUp/DonationSignUp"
  )
);

// const DonorTimeline = lazy(() => {
//   import(
//     "./Componants/Pages/DonationModule/Pages/DonationClientForm/DonorTimeline/DonorTimeline.jsx"
//   );
// });
//AOS

const DonationLandingPage = lazy(() =>
  import(
    "./Componants/Pages/DonationModule/Pages/DonationLandingPage/DonationLandingPage"
  )
);
const LandingPage = lazy(() =>
  import("./Componants/Pages/LandingPage/LandingPage")
);
const ContactUs = lazy(() => import("./Componants/Pages/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("./Componants/Pages/AboutUs/AboutUs.jsx"));

const App = () => {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
 
  const { isLoading, error , isAuthenticated } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  
if (isLoading) {
  return <Loading/>;
}
  return(
  <div className="">
    <Suspense
      fallback={
        <div>
          <LazyLoad />
        </div>
      }
    >
      <Router>
        <Navbar />
        <Routes>
        <Route path="underconstruction" exact element={<UnderConstructionPage/>}/>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/DonorLandingPage/timeline/signup" exact element={<DonationSignUp />} />

         <Route path="/DonorLandingPage/timeline" element={ <DonorFormTimeline/>}/>
          <Route
            exact
            path="/DonorLandingPage"
            element={<DonationLandingPage />}
          />
          <Route
            path="/DonorLandingPage/timeline/signup/reg"
            exact
            element={
              <DonationFormContext>
                <DonationRegistration />
              </DonationFormContext>
            }
          />
          <Route
            path="/dash"
            exact
            element={
              <DonationDashboardContext>
                <DonationDashbaord />
              </DonationDashboardContext>
            }
          />
          <Route path="*" element={<ErrorPage/>}/>
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route path="/NgoForm" exact element={<Addngoform/>}/>
        </Routes>
                {window.location.pathname !== ("/DonorLandingPage/timeline/signup/reg") && window.location.pathname !== ("/NgoForm")  ? <Footer />: null} 
        
                
        
      </Router>
    </Suspense>
    {/* <Navbar/> */}
    {/* <LandingPage/> */}
    {/* <AboutUs/> */}
    {/* <ContactUs/> */}
    {/* <Footer/> */}
    {/* <LazyLoad/> */}
  </div>
  )
        };

export default App;
