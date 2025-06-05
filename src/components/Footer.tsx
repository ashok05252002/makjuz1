
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/03c427bf-d26a-4e34-81c3-e92c2dadd62f.png" 
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
              <span>in San Francisco</span>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {[
                'Custom Software Development',
                'Mobile App Development',
                'Cloud Solutions',
                'Digital Transformation',
                'Consulting Services',
                'Support & Maintenance'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#BCE268] transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'Case Studies',
                'Blog',
                'Contact'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#BCE268] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#BCE268] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:hello@makjuz.com" className="text-white hover:text-[#BCE268] transition-colors">
                    hello@makjuz.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#BCE268] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+15551234567" className="text-white hover:text-[#BCE268] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#BCE268] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105
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
              © 2024 Makjuz. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#BCE268] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#BCE268] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#BCE268] transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
