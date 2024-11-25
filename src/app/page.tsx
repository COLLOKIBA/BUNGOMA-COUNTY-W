'use client';

import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";


const Tenders: React.FC = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <HeroSection imageUrl="/Nabuyole-Falls.jpg" altText="Nabuyole Falls" />
      <Footer/>
    </div>
  );
};

export default Tenders;
