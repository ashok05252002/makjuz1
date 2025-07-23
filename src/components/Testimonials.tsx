import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Mr. Silambarasan",
      role: "Project Manager, Payroll Project",
      image: "https://ui-avatars.com/api/?name=Silambarasan&length=1&background=905BA0&color=fff&rounded=true",
      content: "Makjuz delivered an exceptional payroll management system that exceeded all our expectations. Their expertise and dedication transformed our entire HR process. The ROI was visible within the first quarter!",
      rating: 5
    },
    {
      name: "Mrs. Sandhiya S",
      role: "Operations Manager, Sparks India",
      image: "https://ui-avatars.com/api/?name=Sandhiya&length=1&background=905BA0&color=fff&rounded=true",
      content: "Working with Makjuz on our SAP product for manufacturing unit was a game-changer. They delivered a scalable solution that perfectly fits our manufacturing needs. The communication and support throughout the project was exceptional.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "CTO, TechFlow Solutions",
      image: "https://ui-avatars.com/api/?name=Rajesh&length=1&background=905BA0&color=fff&rounded=true",
      content: "The inventory management system Makjuz built for us has streamlined our entire supply chain. Their attention to detail and performance optimization is unmatched in the industry.",
      rating: 5
    }
  ];

  // Auto-advance every 2 seconds
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setAnimating(false);
      }, 350);
    }, 4000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [currentIndex]);

  // Manual navigation resets timer
  const manualNav = (fn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    fn();
  };

  const nextTestimonial = () => manualNav(() => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 350);
  });

  const prevTestimonial = () => manualNav(() => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 350);
  });

  const goToTestimonial = (idx: number) => manualNav(() => setCurrentIndex(idx));

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 lg:px-12 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            What Our <span className="text-[#905BA0]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it – hear from the amazing companies we've had the privilege to work with.
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          {/* Top-left gradient blob */}
          <div className="absolute -top-12 -left-12 w-56 h-56 bg-gradient-to-br from-[#905BA0]/30 to-transparent rounded-full blur-2xl z-0 pointer-events-none" />
          {/* Bottom-right gradient blob */}
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-tr from-[#c084fc]/30 to-transparent rounded-full blur-2xl z-0 pointer-events-none" />
          <div className="relative z-10">
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 overflow-hidden">
              <div className="flex flex-col items-center">
                <Quote className="h-16 w-16 text-[#905BA0] opacity-40 mb-2 animate-bounce-slow" />
              </div>
              <div className={`text-center space-y-8 transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}> 
                <div className="space-y-6">
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic animate-fade-in">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#905BA0] fill-[#905BA0]" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-[#905BA0]/40 shadow-lg ring-4 ring-[#905BA0]/20 animate-avatar-glow bg-white"
                    />
                  </div>
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
                  className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-[#905BA0] hover:bg-[#905BA0] hover:text-white shadow-md transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${index === currentIndex ? 'bg-[#905BA0] border-[#905BA0] scale-125 shadow-lg' : 'bg-gray-300 border-gray-300'}`}
                    />
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 p-0 border-2 border-gray-300 hover:border-[#905BA0] hover:bg-[#905BA0] hover:text-white shadow-md transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-avatar-glow {
          box-shadow: 0 0 0 0 #905BA033, 0 0 16px 4px #905BA044;
          animation: avatarGlow 2.5s infinite alternate;
        }
        @keyframes avatarGlow {
          from { box-shadow: 0 0 0 0 #905BA033, 0 0 16px 4px #905BA044; }
          to { box-shadow: 0 0 0 8px #905BA022, 0 0 32px 8px #905BA044; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
