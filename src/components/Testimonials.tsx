
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Mr. Silambarasan",
      role: "Project Manager, Payroll Project",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Makjuz delivered an exceptional payroll management system that exceeded all our expectations. Their expertise and dedication transformed our entire HR process. The ROI was visible within the first quarter!",
      rating: 5
    },
    {
      name: "Mrs. Sandhiya S",
      role: "Operations Manager, Sparks India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Working with Makjuz on our SAP product for manufacturing unit was a game-changer. They delivered a scalable solution that perfectly fits our manufacturing needs. The communication and support throughout the project was exceptional.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "CTO, TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=150&h=150&fit=crop&crop=face",
      content: "The inventory management system Makjuz built for us has streamlined our entire supply chain. Their attention to detail and performance optimization is unmatched in the industry.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            What Our <span className="text-[#905BA0]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it – hear from the amazing companies we've had the privilege to work with.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-[#905BA0] opacity-50" />
            
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-[#905BA0] rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#905BA0]/20"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button 
                variant="outline" 
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-[#905BA0] hover:bg-[#905BA0] hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-[#905BA0]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-[#905BA0] hover:bg-[#905BA0] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
