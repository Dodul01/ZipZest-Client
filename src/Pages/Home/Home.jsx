import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router-dom'
import BrandSection from '../../Components/BrandSection/BrandSection';

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className='max-w-7xl mx-auto'>
      <Banner></Banner>
      <BrandSection categories={categories}></BrandSection>
    </div>
  )
}

export default Home
