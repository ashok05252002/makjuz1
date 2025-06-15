import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import BubbleBackground from '../components/BubbleBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <BubbleBackground />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
