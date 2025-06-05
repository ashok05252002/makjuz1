
import React from 'react';
import { Award, Clock, Users, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    {
      icon: <Award className="h-12 w-12" />,
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      number: "98%",
      label: "On-Time Delivery",
      description: "We value your time and consistently meet deadlines"
    },
    {
      icon: <Users className="h-12 w-12" />,
      number: "50+",
      label: "Expert Developers",
      description: "Skilled professionals with cutting-edge expertise"
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      number: "200%",
      label: "ROI Average",
      description: "Our solutions typically double client investment returns"
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-[#905BA0] rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#905BA0] rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-40 w-12 h-12 border border-[#905BA0] rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#905BA0] rounded-full opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Why Choose <span className="text-[#905BA0]">Makjuz</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just build software – we build relationships, trust, and solutions that stand the test of time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#905BA0] text-white rounded-2xl mb-6 shadow-xl">
                {stat.icon}
              </div>
              
              <div className="space-y-3">
                <div className="text-4xl lg:text-5xl font-bold text-[#905BA0]">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white">{stat.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
