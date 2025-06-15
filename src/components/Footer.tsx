import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const serviceLinks = [
    { name: 'Custom Software Development', path: '/services' },
    { name: 'Mobile App Development', path: '/services' },
    { name: 'Cloud Solutions', path: '/services' },
    { name: 'Digital Transformation', path: '/services' },
    { name: 'Consulting Services', path: '/services' },
    { name: 'Support & Maintenance', path: '/services' },
  ];
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/about' },
    { name: 'Case Studies', path: '/about' },
    { name: 'Blog', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/e7727d2f-ea5c-4c64-89ba-ea909ea26600.png" 
                  alt="Makjuz Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building the future, one line of code at a time. We create software that grows with your business.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in India</span>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400 hover:text-[#905BA0] transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-400 hover:text-[#905BA0] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#905BA0] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:support@makjuz.com" className="text-white hover:text-[#905BA0] transition-colors">
                    support@makjuz.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#905BA0] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+919597430022" className="text-white hover:text-[#905BA0] transition-colors">
                    +919597430022
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#905BA0] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white">
                    123 Innovation Drive<br />
                    India Kanchipuram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Makjuz. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#905BA0] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-[#905BA0] transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-[#905BA0] transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
