import React from 'react';
import { ArrowRight, GraduationCap, Monitor, Users, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const services = [
  {
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Academy",
    description: "Empower your team with our specialized training and development programs designed to bridge the skill gap.",
    link: "/services/academy"
  },
  {
    icon: <Monitor className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "IT Solutions",
    description: "Innovative IT solutions tailored to your business needs, from infrastructure management to custom software development.",
    link: "/services/it-solutions"
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "Manpower Supply",
    description: "Connecting you with the right talent. We provide skilled professionals to meet your project demands and organizational goals.",
    link: "/services/manpower-supply"
  },
  {
    icon: <Headset className="h-10 w-10 text-white" />,
    iconBg: 'bg-[#9256a2]',
    title: "BPO services",
    description: "Streamline your business processes with our efficient BPO services, allowing you to focus on core business growth.",
    link: "/services/bpo-services"
  },
];

const Services = () => {
  return (
    <>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const isExternalLink = service.link.startsWith('http');
              const cardContent = (
                <>
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
                </>
              );

              const cardClassName = `group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-8 flex flex-col h-full border border-gray-100 hover:border-[#9256a2]/30 focus:outline-none focus:ring-2 focus:ring-[#9256a2] overflow-hidden`;

              return isExternalLink ? (
                <a
                  key={service.title}
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={service.title}
                  to={service.link}
                  className={cardClassName}
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services; 