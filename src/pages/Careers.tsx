import React from 'react';
import { Briefcase, GraduationCap, Laptop, Megaphone, Send, CheckCircle2, Mail } from 'lucide-react';
import Footer from '../components/Footer';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const Careers = () => {
    const jobs = [
        {
            title: "Digital Marketing Intern",
            department: "Marketing",
            type: "Internship",
            location: "Remote / On-site",
            icon: <Megaphone className="h-8 w-8 text-[#905BA0]" />,
            description: "We're looking for a creative and data-driven Digital Marketing Intern to help us grow our online presence and engage with our community.",
            requirements: [
                "Basic understanding of SEO and SEM",
                "Experience with social media platforms",
                "Strong writing and communication skills",
                "Familiarity with marketing tools is a plus"
            ],
            responsibilities: [
                "Create engaging social media content",
                "Assist in email marketing campaigns",
                "Monitor and report on web analytics",
                "Help with content strategy and execution"
            ]
        },
        {
            title: "Web Development Intern",
            department: "Technology",
            type: "Internship",
            location: "Remote / On-site",
            icon: <Laptop className="h-8 w-8 text-[#905BA0]" />,
            description: "Join our tech team to build and maintain cutting-edge web applications. You'll work closely with experienced developers and gain hands-on experience.",
            requirements: [
                "Proficiency in HTML, CSS, and JavaScript",
                "Basic knowledge of React or similar frameworks",
                "Understanding of responsive design",
                "Eagerness to learn new technologies"
            ],
            responsibilities: [
                "Develop and style UI components",
                "Fix bugs and improve site performance",
                "Collaborate on new feature development",
                "Participate in code reviews"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                        Grow Your Career with <span className="text-[#905BA0]">MakJuz</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join a team of visionaries and builders. We're looking for passionate individuals to help us shape the future of technology.
                    </p>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
                        <div className="w-24 h-1.5 bg-[#905BA0] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-4 bg-white rounded-2xl group-hover:bg-[#905BA0]/10 group-hover:text-[#905BA0] transition-colors duration-300">
                                        {job.icon}
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-2">
                                            {job.type}
                                        </span>
                                        <p className="text-gray-500 text-sm">{job.location}</p>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {job.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle2 className="h-5 w-5 text-[#905BA0] mr-2" />
                                            Requirements
                                        </h4>
                                        <ul className="space-y-3">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="text-gray-600 text-sm flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-[#905BA0] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                            <GraduationCap className="h-5 w-5 text-[#905BA0] mr-2" />
                                            Responsibilities
                                        </h4>
                                        <ul className="space-y-3">
                                            {job.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="text-gray-600 text-sm flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-[#905BA0] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="w-full py-4 bg-[#905BA0] text-white font-bold rounded-2xl hover:bg-[#7a4d8a] transition-colors duration-300 flex items-center justify-center space-x-2">
                                            <span>Apply Now</span>
                                            <Send className="h-5 w-5" />
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md bg-white rounded-3xl p-8 border-none ring-1 ring-gray-100 shadow-2xl">
                                        <DialogHeader className="text-center space-y-4">
                                            <div className="mx-auto w-20 h-20 bg-[#905BA0]/10 rounded-2xl flex items-center justify-center mb-2">
                                                <Mail className="h-10 w-10 text-[#905BA0]" />
                                            </div>
                                            <DialogTitle className="text-3xl font-extrabold text-gray-900">
                                                How to Apply
                                            </DialogTitle>
                                            <DialogDescription className="text-gray-600 text-lg leading-relaxed">
                                                We're excited that you want to join our team! Please send your updated Resume/CV to our recruitment team.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center space-y-4">
                                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email your resume to</p>
                                            <a
                                                href={`mailto:support@makjuz.com?subject=Application for ${job.title}`}
                                                className="text-2xl font-bold text-[#905BA0] hover:text-[#7a4d8a] transition-colors break-all text-center"
                                            >
                                                support@makjuz.com
                                            </a>
                                            <div className="text-xs text-gray-400 text-center">
                                                Please mention "<span className="font-semibold">{job.title}</span>" in the subject line.
                                            </div>
                                        </div>
                                        <div className="mt-8 flex justify-center">
                                            <p className="text-sm text-gray-500 italic">
                                                We'll review your application and get back to you soon!
                                            </p>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-24 px-6 lg:px-12 bg-gray-900 text-white rounded-[2rem] mx-6 lg:mx-12 mb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#905BA0]/20 to-transparent pointer-none" />
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-12">How to Apply</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { step: "01", title: "Submit Application", desc: "Send your Resume/CV to support@makjuz.com with the job title in the subject line." },
                            { step: "02", title: "Review Process", desc: "Our team will review your application and portfolio within 3-5 business days." },
                            { step: "03", title: "Interview", desc: "Shortlisted candidates will be invited for a technical or marketing assessment interview." }
                        ].map((process, i) => (
                            <div key={i} className="space-y-4">
                                <span className="text-5xl font-extrabold text-[#905BA0]/30">{process.step}</span>
                                <h3 className="text-xl font-bold">{process.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 p-8 border border-white/10 rounded-3xl bg-white/5">
                        <p className="text-lg">
                            Questions about our process? Reach out to us at <a href="mailto:support@makjuz.com" className="text-[#905BA0] font-bold">support@makjuz.com</a>
                        </p>
                    </div>
                </div>
            </section>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Careers;
