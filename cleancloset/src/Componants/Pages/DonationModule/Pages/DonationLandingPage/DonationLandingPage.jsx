import React from 'react'
import Faq from '../../../LandingPage/LandingPageComponents/FaQ/Faq'
import LandingPageStats from '../../../LandingPage/LandingPageComponents/Stats/LandingPageStats'
import DonationHeader from './DonationLandingPageComponants/DonationHeader/DonationHeader'
import DonationHow from './DonationLandingPageComponants/DonationHow/DonationHow'
import DonationTagLine from './DonationLandingPageComponants/DonationTagLine/DonationTagLine'
import DonationVision from './DonationLandingPageComponants/DonationVision/DonationVision'


const DonationLandingPage = () => {
  return (
    <div>
        <DonationHeader/>
        <DonationTagLine/>
        <LandingPageStats/>
        <DonationHow/>
        <Faq/>
        <DonationVision/>
    </div>
  )
}

export default DonationLandingPage