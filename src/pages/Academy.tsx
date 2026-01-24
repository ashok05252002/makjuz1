import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GraduationCap, BookOpen, Users, Award, Target, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Academy = () => {
    const navigate = useNavigate();

    const programs = [
        {
            icon: <BookOpen className="h-8 w-8" />,
            title: "Technical Training",
            description: "Master modern technologies with our comprehensive courses in Web Development, AI, and Cloud Computing."
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Corporate Workshops",
            description: "Tailored training solutions for businesses looking to upskill their workforce and stay competitive."
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: "Certification Programs",
            description: "Industry-recognized certifications to validate your skills and boost your career prospects."
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: "Career Mentorship",
            description: "One-on-one guidance from industry veterans to help you navigate your career path and achieve your goals."
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Skill Assessment",
            description: "Comprehensive testing and evaluation to identify skill gaps and create personalized learning paths."
        },
        {
            icon: <GraduationCap className="h-8 w-8" />,
            title: "Internship Programs",
            description: "Real-world experience and hands-on projects to bridge the gap between education and employment."
        }
    ];

    const benefits = [
        "Curriculum Focused on Industry Needs",
        "Expert Mentorship from Seasoned Professionals",
        "Hands-on Project-Based Learning",
        "Comprehensive Career Support Services",
        "Access to a Global Network of Tech Leaders"
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
                                Makjuz <span className="text-[#905BA0]">Academy</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Empowering individuals and organizations with the skills of tomorrow. Join our community of learners and transform your career through world-class tech education.
                            </p>
                            <Button
                                size="lg"
                                onClick={() => navigate('/contact')}
                                className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                            >
                                Explore Programs
                            </Button>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-32 h-32 bg-[#905BA0] rounded-3xl flex items-center justify-center shadow-2xl">
                                <GraduationCap className="h-16 w-16 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Programs Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#905BA0]">Programs</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive learning solutions designed to help you excel in the fast-paced world of technology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#905BA0]/20">
                                <div className="w-16 h-16 bg-[#905BA0]/10 text-[#905BA0] rounded-2xl flex items-center justify-center mb-4">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                                <p className="text-gray-600">{program.description}</p>
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
                                Why Learn with <span className="text-[#905BA0]">Makjuz Academy</span>?
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
                            <h3 className="text-3xl font-bold mb-6">Ready to start your learning journey?</h3>
                            <p className="text-xl text-purple-100 mb-8">
                                Reach out to our admissions team to find the perfect program for your career goals.
                            </p>
                            <Button
                                onClick={() => navigate('/contact')}
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#905BA0] hover:bg-gray-100 rounded-xl w-fit"
                            >
                                Contact Admissions
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold">
                        Build Your <span className="text-[#905BA0]">Future Today</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Join hundreds of successful graduates who have transformed their careers with Makjuz Academy.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate('/contact')}
                        className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
                    >
                        Apply Now
                    </Button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Academy;
