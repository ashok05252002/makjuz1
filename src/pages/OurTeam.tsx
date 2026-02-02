import React from 'react';
import { Shield, Target, Users, Briefcase, GraduationCap, Award } from 'lucide-react';
import Footer from '../components/Footer';

const OurTeam = () => {
    const previewImages = [
        { src: "/our-team-images/Founder.jpeg", alt: "Founder" },
        { src: "/our-team-images/CEO.jpeg", alt: "CEO" },
        { src: "/our-team-images/MD.jpeg", alt: "Managing Director" },
    ];

    const leadership = [
        {
            name: "Jeevanantham",
            role: "Founder",
            image: "/our-team-images/Founder.jpeg",
            bio: "With years of experience in the tech industry, Jeevanantham founded MakJuz with a vision to revolutionize how businesses leverage technology.",
            responsibilities: [
                "Strategic Vision & Direction",
                "Business Partnerships",
                "Innovation Strategy"
            ]
        },
        {
            name: "Aravind",
            role: "CEO",
            image: "/our-team-images/CEO.jpeg",
            bio: "Aravind leads the operational excellence at MakJuz, ensuring we deliver top-tier solutions to our global clients.",
            responsibilities: [
                "Operational Management",
                "Growth & Expansion",
                "Client Success"
            ]
        },
        {
            name: "Mohan Kumar",
            role: "Managing Director",
            image: "/our-team-images/MD.jpeg",
            bio: "Mohan Kumar oversees the day-to-day management and execution of our core technology services and academy programs.",
            responsibilities: [
                "Team Leadership",
                "Service Delivery",
                "Quality Assurance"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        Meet the <span className="text-[#905BA0]">MakJuz Team</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A diverse group of innovators, problem-solvers, and tech enthusiasts dedicated to building the future, one line of code at a time.
                    </p>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
                        <div className="w-24 h-1.5 bg-[#905BA0] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {leadership.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                        <p className="text-white text-sm font-medium italic italic">"{member.bio}"</p>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow">
                                    <div className="mb-6 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-[#905BA0] font-semibold tracking-wider uppercase text-sm mt-1">{member.role}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-2">Key Focus Areas</h4>
                                        <ul className="space-y-3">
                                            {member.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-center text-gray-600 text-sm">
                                                    <Shield className="h-4 w-4 text-[#905BA0] mr-2 flex-shrink-0" />
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Overview Section */}
            <section className="py-24 px-6 lg:px-12 bg-[#905BA0]/5">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-4">
                        <Users className="h-10 w-10 text-[#905BA0]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">One Team, One Vision</h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed italic">
                        <p>
                            At MakJuz, we believe that the strength of our team lies in our unity and shared passion for technology. Our team is a blend of experienced industry veterans and young, dynamic professionals who bring fresh perspectives to every project.
                        </p>
                        <p>
                            From our software engineers and quality analysts to our trainers and HR specialists, every member of the MakJuz family plays a crucial role in our mission to empower businesses through innovative technology solutions. We foster a culture of continuous learning, collaboration, and excellence, ensuring that we stay at the forefront of the digital revolution.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                        {[
                            { icon: <Target />, label: "Goal Oriented" },
                            { icon: <Briefcase />, label: "Professional" },
                            { icon: <GraduationCap />, label: "Continuous Learning" },
                            { icon: <Award />, label: "Excellence" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center space-y-2">
                                <div className="text-[#905BA0]">{item.icon}</div>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-tighter">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default OurTeam;
