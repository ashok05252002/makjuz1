import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calculator, BarChart3, Receipt, Bell, ShieldCheck, Zap, CheckCircle, FileText, PieChart, CreditCard, X, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Footer from '../components/Footer';

const BillingSoftware = () => {
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
            icon: <Receipt className="h-8 w-8" />,
            title: "Automated Invoicing",
            description: "Generate professional invoices automatically based on orders, time logs, or recurring cycles with ease."
        },
        {
            icon: <Landmark className="h-8 w-8" />,
            title: "Tax Compliance",
            description: "Stay compliant with local tax laws using automated GST/VAT calculations and comprehensive tax reporting."
        },
        {
            icon: <CreditCard className="h-8 w-8" />,
            title: "Multi-Payment Modes",
            description: "Accept payments via UPI, Credit/Debit cards, Net Banking, and digital wallets for faster settlements."
        },
        {
            icon: <PieChart className="h-8 w-8" />,
            title: "Financial Insights",
            description: "Get real-time visibility into your revenue, outstanding payments, and profit margins with detailed dashbaords."
        },
        {
            icon: <FileText className="h-8 w-8" />,
            title: "Quotations & Estimates",
            description: "Create and send professional quotes to clients and convert them into invoices with a single click."
        },
        {
            icon: <Bell className="h-8 w-8" />,
            title: "Payment Reminders",
            description: "Reduce overdue payments by setting up automated SMS and email reminders for your customers."
        },
        {
            icon: <ShieldCheck className="h-8 w-8" />,
            title: "Secure & Reliable",
            description: "Bank-grade encryption ensures your financial data stays safe, secure, and accessible only to authorized users."
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Fast Checkout",
            description: "Streamline your billing counter with rapid entry systems and barcode scanning support for retail locations."
        },
        {
            icon: <BarChart3 className="h-8 w-8" />,
            title: "Expense Management",
            description: "Track your business expenses and vendor payments alongside your revenue for a complete financial picture."
        }
    ];

    const benefits = [
        "Reduce billing errors by 99% with automated calculations",
        "Get paid 3x faster with integrated online payment links",
        "Save up to 20 hours per month on manual bookkeeping",
        "Generate professional, branded invoices in seconds",
        "Real-time GST/VAT reporting and filing preparation",
        "Manage multiple business locations from a single dashboard",
        "Access financial data from anywhere with cloud sync",
        "Advanced security with role-based access controls"
    ];

    const pricingPlans = [
        {
            name: "Basic",
            price: "₹1,999",
            period: "/month",
            features: ["Up to 100 invoices/mo", "Single user access", "Standard templates", "Expense tracking", "Email support"]
        },
        {
            name: "Professional",
            price: "₹3,999",
            period: "/month",
            features: ["Unlimited invoices", "Up to 5 users", "Advanced tax reporting", "Payment reminders", "Inventory integration", "Priority support"]
        },
        {
            name: "Premium",
            price: "₹7,999",
            period: "/month",
            features: ["Multi-location support", "Unlimited users", "Custom API access", "Dedicated account manager", "White-label reports", "24/7 support"]
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
                        className="mt-10 mb-6 ml-9 text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Home
                    </Button>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                                Billing <span className="text-[#905BA0]">Software</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Streamline your business finances with our comprehensive billing solution. Automate invoicing, track payments, and gain deep financial insights to grow your business effortlessly.
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
                                <Calculator className="h-12 w-12 text-white" />
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
                            Empower Your <span className="text-[#905BA0]">Business</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to handle billing, taxes, and financial reporting in one powerful, easy-to-use platform.
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
                            Why Choose Our <span className="text-[#905BA0]">Billing Solution</span>?
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
                        Take Control of Your <span className="text-[#905BA0]">Finances</span> Today
                    </h2>
                    <p className="text-xl text-gray-300">
                        Join thousands of businesses that trust our billing software to manage their invoicing and financial growth.
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
                            size="lg"
                            onClick={() => setShowContactForm(true)}
                            className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl"
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
                            <p className="text-xl text-gray-600">Select the perfect plan for your billing needs</p>
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
            <Footer />
        </div>
    );
};

export default BillingSoftware;
