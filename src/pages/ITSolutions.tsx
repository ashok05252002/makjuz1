import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Monitor, Cloud, Shield, Database, Code, Cpu, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ITSolutions = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Monitor className="h-8 w-8" />,
            title: "Managed IT Services",
            description: "Comprehensive management of your IT infrastructure, ensuring uptime and peak performance."
        },
        {
            icon: <Cloud className="h-8 w-8" />,
            title: "Cloud Solutions",
            description: "Migration, optimization, and management of cloud workloads on AWS, Azure, and Google Cloud."
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Cybersecurity",
            description: "Advanced protection against threats with continuous monitoring, audits, and security protocols."
        },
        {
            icon: <Code className="h-8 w-8" />,
            title: "Custom Software",
            description: "Tailored software development to solve your unique business challenges and drive efficiency."
        },
        {
            icon: <Database className="h-8 w-8" />,
            title: "Data Management",
            description: "Robust data warehousing, backup solutions, and analytics to make informed business decisions."
        },
        {
            icon: <Cpu className="h-8 w-8" />,
            title: "Infrastructure Setup",
            description: "Designing and implementing scalable hardware and network infrastructure for growing businesses."
        }
    ];

    const benefits = [
        "24/7 Proactive Monitoring & Support",
        "Tailored Solutions for Your Specific Industry",
        "Scalable Architecture to Support Growth",
        "Cost-Effective IT Resource Management",
        "Expert Consultation from Industry Veterans"
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
                                IT <span className="text-[#905BA0]">Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Empower your business with cutting-edge technology. From infrastructure to custom software, we provide ends-to-end IT solutions that drive innovation and growth.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                            >
                                Get a Free Quote
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-32 h-32 bg-[#905BA0] rounded-3xl flex items-center justify-center shadow-2xl">
                                <Monitor className="h-16 w-16 text-white" />
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
                            Our <span className="text-[#905BA0]">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We deliver high-quality IT services that help you stay ahead in the digital landscape.
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
                                Why Choose <span className="text-[#905BA0]">MakJuz IT</span>?
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
                            <h3 className="text-3xl font-bold mb-6">Ready to upgrade your technology stack?</h3>
                            <p className="text-xl text-purple-100 mb-8">
                                Our experts are ready to help you navigate your digital transformation journey.
                            </p>
                            <Button
                                onClick={() => navigate('/contact')}
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#905BA0] hover:bg-gray-100 rounded-xl w-fit"
                            >
                                Schedule a Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold">
                        Future-Proof Your <span className="text-[#905BA0]">Business</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Get the technological edge you need to scale and succeed in today's market.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate('/contact')}
                        className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                    >
                        Contact Our Experts
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ITSolutions;
