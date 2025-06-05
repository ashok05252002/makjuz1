
import React from 'react';
import { Code, Smartphone, Cloud, Settings, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your specific business needs and goals.",
      features: ["Web Applications", "Enterprise Software", "API Development", "Database Design"]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on any device.",
      features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"]
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to power your business growth.",
      features: ["Cloud Migration", "DevOps", "Microservices", "Serverless Architecture"]
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "BPO Services",
      description: "Comprehensive business process outsourcing solutions to streamline your operations and reduce costs.",
      features: ["Customer Support", "Data Entry", "Virtual Assistance", "Back Office Operations"]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Digital Transformation",
      description: "Complete digital makeovers that modernize your processes and boost efficiency.",
      features: ["Process Automation", "System Integration", "Legacy Modernization", "Consulting"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-[#905BA0]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we offer comprehensive software development services that drive innovation and deliver results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#905BA0]/30 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#905BA0]/10 text-[#905BA0] rounded-2xl flex items-center justify-center group-hover:bg-[#905BA0] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#905BA0] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
