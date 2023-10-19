import React from 'react'
import Banner from '../../Components/Banner/Banner'
import BrandSection from '../../Components/BrandSection/BrandSection';
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre';
import HowItWork from '../../Components/HowItWork/HowItWork';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner></Banner>
      <BrandSection></BrandSection>
      <WhoWeAre></WhoWeAre>
      <HowItWork></HowItWork>
    </div>
  )
}

export default Home
