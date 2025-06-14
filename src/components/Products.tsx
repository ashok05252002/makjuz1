import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Package, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Payroll Software",
      description: "Streamline your HR processes with our comprehensive payroll management system. Handle employee payments, tax calculations, and compliance effortlessly.",
      features: ["Automated Payroll Processing", "Tax Compliance", "Employee Self-Service", "Detailed Reporting"],
      route: "/products/payroll-software"
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Inventory Management",
      description: "Take control of your inventory with real-time tracking, automated reordering, and comprehensive analytics to optimize your supply chain.",
      features: ["Real-time Tracking", "Automated Reordering", "Multi-location Support", "Advanced Analytics"],
      route: "/products/inventory-management"
    }
  ];

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-[#905BA0]">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our flagship software solutions designed to streamline your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#905BA0]/30 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top-left gradient blob */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#905BA0]/20 to-transparent rounded-full blur-2xl z-0 pointer-events-none" />
              {/* Bottom-right gradient blob */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tr from-[#c084fc]/20 to-transparent rounded-full blur-2xl z-0 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="w-20 h-20 bg-[#905BA0]/10 text-[#905BA0] rounded-2xl flex items-center justify-center group-hover:bg-[#905BA0] group-hover:text-white transition-all duration-300">
                  {product.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#905BA0] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => navigate(product.route)}
                    className="w-full mt-6 bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
