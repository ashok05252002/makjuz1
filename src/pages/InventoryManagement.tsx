import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package, BarChart3, MapPin, Bell, Truck, Zap, CheckCircle, Receipt, Warehouse, CreditCard, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const InventoryManagement = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowContactForm(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Tracking",
      description: "Monitor inventory levels across all locations in real-time with live updates and instant notifications."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Automated Alerts",
      description: "Receive notifications for low stock, expiring items, reorder points, and critical inventory movements."
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Multi-Warehouse Management",
      description: "Manage inventory across unlimited warehouses, distribution centers, and retail locations with centralized control."
    },
    {
      icon: <Receipt className="h-8 w-8" />,
      title: "Integrated Billing System",
      description: "Generate invoices, process payments, and manage billing cycles directly from your inventory system."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Supply Chain Optimization",
      description: "Streamline vendor management, purchase orders, and delivery tracking for maximum efficiency."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Financial Integration",
      description: "Connect with accounting systems, track costs, margins, and profitability per product and location."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Get deep insights into inventory turnover, demand forecasting, seasonal trends, and performance metrics."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Barcode & RFID Support",
      description: "Streamline operations with barcode scanning, RFID integration, and mobile inventory apps."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location Tracking",
      description: "Track exact product locations within warehouses with bin management and zone organization."
    }
  ];

  const benefits = [
    "Reduce inventory costs by up to 35% with smart optimization",
    "Eliminate stockouts and overstock situations completely",
    "Improve order fulfillment accuracy to 99.8%",
    "Automate 85% of routine inventory and billing tasks",
    "Gain complete visibility across all warehouses and locations",
    "Process invoices 60% faster with integrated billing",
    "Reduce warehouse operating costs by 25%",
    "Support unlimited warehouse locations and products"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "/month",
      features: ["Up to 5 warehouses", "Basic inventory tracking", "Standard reports", "Email support", "Up to 1000 products"]
    },
    {
      name: "Business",
      price: "₹9,999",
      period: "/month",
      features: ["Up to 20 warehouses", "Advanced analytics", "Billing integration", "Priority support", "Up to 15,000 products", "Multi-currency support"]
    },
    {
      name: "Enterprise",
      price: "₹19,999",
      period: "/month",
      features: ["Unlimited warehouses", "All features", "24/7 dedicated support", "Custom integrations", "Unlimited products", "Advanced API access"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#905BA0]/10 to-purple-50/30 py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          
          <div className="flex items-center space-x-4 mb-4">
            <img 
              src="/lovable-uploads/e7727d2f-ea5c-4c64-89ba-ea909ea26600.png" 
              alt="Makjuz Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Inventory <span className="text-[#905BA0]">Management</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Complete inventory control with real-time tracking, multi-warehouse management, integrated billing, and advanced analytics to transform your supply chain operations.
              </p>
              <Button 
                size="lg"
                onClick={() => setShowContactForm(true)}
                className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
              >
                Start Free Trial
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-[#905BA0] rounded-3xl flex items-center justify-center shadow-2xl">
                <Package className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-[#905BA0]">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage inventory, billing, and multi-warehouse operations efficiently and profitably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#905BA0]/10 text-[#905BA0] rounded-2xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your <span className="text-[#905BA0]">Operations</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm">
                  <CheckCircle className="h-6 w-6 text-[#905BA0] flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Optimize Your <span className="text-[#905BA0]">Inventory</span>?
          </h2>
          <p className="text-xl text-gray-300">
            Join businesses worldwide who have transformed their inventory management and billing operations with our comprehensive solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setShowPopup(true)}
              className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
            >
              View Pricing
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 hover:border-[#905BA0] text-white font-semibold px-8 py-4 rounded-xl"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Start Your <span className="text-[#905BA0]">Free Trial</span>
              </h2>
              <p className="text-gray-600">Get in touch with us to begin your journey</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="mt-1"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#905BA0] hover:bg-[#7d4f8a] text-white mt-6"
              >
                Submit Request
              </Button>
            </form>
            
            <div className="text-center mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">Need immediate assistance?</p>
              <p className="text-lg font-semibold text-gray-900">Contact us at <a href="mailto:founder@makjuz.com" className="text-[#905BA0] hover:underline">founder@makjuz.com</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your <span className="text-[#905BA0]">Plan</span>
              </h2>
              <p className="text-xl text-gray-600">Select the perfect plan for your inventory management needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`p-8 rounded-2xl border-2 ${index === 1 ? 'border-[#905BA0] bg-[#905BA0]/5' : 'border-gray-200'}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-[#905BA0] mb-1">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#905BA0] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${index === 1 ? 'bg-[#905BA0] hover:bg-[#7d4f8a]' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 mb-2">Need help choosing the right plan?</p>
              <p className="text-lg font-semibold text-gray-900">Contact us at <a href="mailto:founder@makjuz.com" className="text-[#905BA0] hover:underline">founder@makjuz.com</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryManagement;
