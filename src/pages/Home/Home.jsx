import React from 'react'
import Hero from './home_page_sections/Hero.jsx'
import Categories from './home_page_sections/Categories.jsx'
import TrackOrder from './home_page_sections/TrackOrder.jsx'
import Services from './home_page_sections/Services.jsx'
import ShopBy from './home_page_sections/ShopBy.jsx'
import Offers from './home_page_sections/Offers.jsx'
import StoreLocator from './home_page_sections/StoreLocator.jsx'  
import PopularBrands from './home_page_sections/PopularBrands.jsx'
import RewardsProgram from './home_page_sections/RewardsProgram.jsx'
import BestSellers from './home_page_sections/BestSellers.jsx'
import Footer from '../../components/layout/Footer.jsx'
const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Categories />
      <TrackOrder />
      <Services />
      <ShopBy />
      <Offers />
      <StoreLocator />
      <PopularBrands />
      <RewardsProgram />
      <BestSellers />
      <Footer />
    </div>
  )
}
export default Home
