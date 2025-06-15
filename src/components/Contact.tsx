import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResultMessage("Sending...");

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: "6b70db7b-b7dc-4ad2-83d6-4224da71165f",
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      })
    });

    const result = await response.json();

    if (result.success) {
      setResultMessage("Form submitted successfully!");
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      console.error("Submission error:", result);
      setResultMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Let's Build Something <span className="text-[#905BA0]">Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss how we can help your business thrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We'd love to hear about your project and explore how we can work together to bring your vision to life.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#905BA0] text-white rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">support@makjuz.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#905BA0] text-white rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+919597430022</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#905BA0] text-white rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visit Us</h4>
                  <p className="text-gray-600">123 Innovation Drive<br />Kanchipuram, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-gray-200 focus:border-[#905BA0] focus:ring-[#905BA0]"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-gray-200 focus:border-[#905BA0] focus:ring-[#905BA0]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-gray-700">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 rounded-xl border-gray-200 focus:border-[#905BA0] focus:ring-[#905BA0]"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="rounded-xl border-gray-200 focus:border-[#905BA0] focus:ring-[#905BA0] resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  required
                />
              </div>

              {resultMessage && (
                <div className="text-sm font-medium text-center text-green-600">
                  {resultMessage}
                </div>
              )}
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;