import React from 'react';
import { ArrowRight, Users, Cloud, Database, Code, Settings, Shield, TrendingUp, UserCheck, Layers } from 'lucide-react';

const services = [
  {
    icon: <Users className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Agile Scaling",
    description: "Working agile will make your work and your business more efficient and fun. Learn how your organization can benefit and how to scale agile.",
    link: "#"
  },
  {
    icon: <Cloud className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Cloud",
    description: "Become cloud-native by migrating and modernizing workloads with our cloud solutions for AWS, Azure, and Google Cloud.",
    link: "#"
  },
  {
    icon: <Database className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Data and AI",
    description: "The data and AI field is dynamic like no other. Develop your data and AI skills to stay ahead and become a data-driven frontrunner.",
    link: "#"
  },
  {
    icon: <Code className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Kotlin",
    description: "We help you and your organization unleash Kotlin's true potential with training, coaching, and consultancy.",
    link: "#"
  },
  {
    icon: <UserCheck className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Product Management",
    description: "Make the most of your product as a Product Owner, Product Manager, or Product Leader. Move your product career forward with new skills.",
    link: "#"
  },
  {
    icon: <Settings className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Software Delivery",
    description: "Start taking a holistic approach to software development. Learn about security, quality, compliance, and flexibility from A to Z.",
    link: "#"
  },
  {
    icon: <Shield className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Security",
    description: "Protect your business and data with our security solutions and training programs.",
    link: "#"
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "SRE",
    description: "Distribute the right Site Reliability Engineering knowledge and skills across your teams.",
    link: "#"
  },
  {
    icon: <Layers className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "The Road to Mastery",
    description: "Advance your skills and career with our mastery programs and expert guidance.",
    link: "#"
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 lg:px-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-[#9256a2]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our expertise and discover how we can help you grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={service.link}
              className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-8 flex flex-col h-full border border-gray-100 hover:border-[#9256a2]/30 focus:outline-none focus:ring-2 focus:ring-[#9256a2] overflow-hidden`}
            >
              {/* Top-left gradient blob */}
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-br from-[#905BA0]/30 to-transparent rounded-full blur-2xl z-0 pointer-events-none" />
              {/* Bottom-right gradient blob */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-[#c084fc]/30 to-transparent rounded-full blur-2xl z-0 pointer-events-none" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <span className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.iconBg} shadow-lg`}>{service.icon}</span>
                <span className="text-2xl font-bold text-gray-900 group-hover:text-[#9256a2] transition-colors duration-200">
                  {service.title}
                </span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowRight className="h-6 w-6 text-[#9256a2]" />
                </span>
              </div>
              <div className="text-gray-600 text-base leading-relaxed relative z-10">
                {service.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 