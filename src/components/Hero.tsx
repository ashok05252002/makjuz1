
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-12 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/40">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="public/lovable-uploads/image-removebg-preview-6.png" 
                  alt="Makjuz Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Software that
                <span className="text-[#905BA0] block">grows with you</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                We build innovative digital solutions that transform businesses and create meaningful connections between technology and people.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {/* <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-[#905BA0] text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button> */}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                alt="Modern software development" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#905BA0]/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#905BA0] rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
