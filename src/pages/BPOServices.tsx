import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Headset, Phone, MessageSquare, Users, BarChart, Globe, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BPOServices = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Phone className="h-8 w-8" />,
            title: "Customer Support",
            description: "24/7 customer service solutions with multilingual support to enhance customer satisfaction."
        },
        {
            icon: <MessageSquare className="h-8 w-8" />,
            title: "Technical Support",
            description: "Expert technical assistance for your products and services, ensuring seamless customer experience."
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Back Office Operations",
            description: "Efficient handling of data entry, processing, and administrative tasks to streamline operations."
        },
        {
            icon: <BarChart className="h-8 w-8" />,
            title: "Data Analytics",
            description: "Transform raw data into actionable insights with our advanced analytics and reporting services."
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Telemarketing",
            description: "Professional outbound and inbound telemarketing services to boost your sales and lead generation."
        },
        {
            icon: <Headset className="h-8 w-8" />,
            title: "Help Desk Services",
            description: "Comprehensive IT help desk support to resolve technical issues and maintain productivity."
        }
    ];

    const benefits = [
        "Reduce Operational Costs by up to 60%",
        "Access to Skilled Multilingual Workforce",
        "Scalable Solutions to Match Business Growth",
        "Focus on Core Business Activities",
        "24/7 Service Availability Across Time Zones"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#905BA0]/10 to-purple-50/30 py-8 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/services')}
                        className="mt-10 mb-6 text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Services
                    </Button>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                                BPO <span className="text-[#905BA0]">Services</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Streamline your business processes with our efficient BPO services. From customer support to back-office operations, we help you focus on what matters most - growing your business.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                            >
                                Request a Quote
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-32 h-32 bg-[#905BA0] rounded-3xl flex items-center justify-center shadow-2xl">
                                <Headset className="h-16 w-16 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#905BA0]">BPO Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive business process outsourcing services designed to optimize your operations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#905BA0]/20">
                                <div className="w-16 h-16 bg-[#905BA0]/10 text-[#905BA0] rounded-2xl flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                Why Choose <span className="text-[#905BA0]">MakJuz BPO</span>?
                            </h2>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm">
                                        <CheckCircle className="h-6 w-6 text-[#905BA0] flex-shrink-0" />
                                        <span className="text-lg text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#905BA0] rounded-3xl p-12 text-white h-full flex flex-col justify-center">
                            <h3 className="text-3xl font-bold mb-6">Ready to optimize your business processes?</h3>
                            <p className="text-xl text-purple-100 mb-8">
                                Our experienced team is ready to handle your business operations with precision and care.
                            </p>
                            <Button
                                onClick={() => navigate('/contact')}
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#905BA0] hover:bg-gray-100 rounded-xl w-fit"
                            >
                                Get Started Today
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold">
                        Transform Your <span className="text-[#905BA0]">Operations</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Partner with us to reduce costs, improve efficiency, and scale your business operations seamlessly.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate('/contact')}
                        className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                    >
                        Contact Us Now
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default BPOServices;
