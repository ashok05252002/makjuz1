import React from 'react';
import { Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We're passionate about creating software that makes a real difference in people's lives and businesses."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centered",
      description: "Every line of code we write is crafted with the end user in mind, ensuring delightful experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that future-proof your business."
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            About <span className="text-[#905BA0]">Makjuz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that technology should empower, not complicate, Makjuz has been helping businesses thrive in the digital age since 2020. We're more than just developers – we're your partners in growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#905BA0] text-white rounded-2xl mb-6 shadow-lg">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 