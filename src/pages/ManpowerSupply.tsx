import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Briefcase, GraduationCap, Building, Target, UserCheck, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManpowerSupply = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Briefcase className="h-8 w-8" />,
            title: "Permanent Staffing",
            description: "Find the right talent for long-term positions with our comprehensive recruitment solutions."
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Contract Staffing",
            description: "Flexible staffing solutions for project-based or temporary workforce requirements."
        },
        {
            icon: <GraduationCap className="h-8 w-8" />,
            title: "Skilled Professionals",
            description: "Access to a pool of highly skilled professionals across various industries and domains."
        },
        {
            icon: <Building className="h-8 w-8" />,
            title: "Executive Search",
            description: "Specialized recruitment services for senior management and C-level positions."
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: "Industry-Specific Hiring",
            description: "Tailored recruitment solutions for IT, healthcare, manufacturing, and other sectors."
        },
        {
            icon: <UserCheck className="h-8 w-8" />,
            title: "Screening & Onboarding",
            description: "Comprehensive candidate screening, verification, and seamless onboarding processes."
        }
    ];

    const benefits = [
        "Access to Pre-Vetted Talent Pool",
        "Reduce Time-to-Hire by 50%",
        "Cost-Effective Recruitment Solutions",
        "Flexible Staffing Models to Match Your Needs",
        "End-to-End Recruitment Support"
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
                                Manpower <span className="text-[#905BA0]">Supply</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Connecting businesses with exceptional talent. We provide skilled professionals who drive growth, innovation, and success for your organization.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                            >
                                Find Talent Now
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-32 h-32 bg-[#905BA0] rounded-3xl flex items-center justify-center shadow-2xl">
                                <Users className="h-16 w-16 text-white" />
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
                            Our <span className="text-[#905BA0]">Recruitment Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive manpower solutions designed to meet your unique business requirements.
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
                                Why Choose <span className="text-[#905BA0]">MakJuz</span> for Staffing?
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
                            <h3 className="text-3xl font-bold mb-6">Looking for the perfect hire?</h3>
                            <p className="text-xl text-purple-100 mb-8">
                                Our recruitment experts are ready to connect you with top-tier talent that matches your organizational culture and goals.
                            </p>
                            <Button
                                onClick={() => navigate('/contact')}
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#905BA0] hover:bg-gray-100 rounded-xl w-fit"
                            >
                                Discuss Your Needs
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold">
                        Build Your <span className="text-[#905BA0]">Dream Team</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Partner with us to access a diverse pool of talented professionals ready to contribute to your success.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate('/contact')}
                        className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                    >
                        Get Started
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ManpowerSupply;
