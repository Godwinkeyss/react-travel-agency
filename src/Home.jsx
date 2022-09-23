import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel'
import Destination from './components/destinations/Destination'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'
import Selects from './components/selects/Selects'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Destination />
        <Search />
        <Selects />
        <ImgCarousel />
        <Footer />
    </div>
  )
}

export default Home