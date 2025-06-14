import React, { useEffect, useState } from 'react';
import { Award, Clock, Users, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    {
      icon: <Award className="h-12 w-12" />,
      number: 500,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      number: 98,
      suffix: "%",
      label: "On-Time Delivery",
      description: "We value your time and consistently meet deadlines"
    },
    {
      icon: <Users className="h-12 w-12" />,
      number: 50,
      suffix: "+",
      label: "Expert Developers",
      description: "Skilled professionals with cutting-edge expertise"
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      number: 200,
      suffix: "%",
      label: "ROI Average",
      description: "Our solutions typically double client investment returns"
    }
  ];

  // Animated count up
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 1200;
      const step = Math.max(1, Math.floor(end / (duration / 16)));
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[i] < end) {
            next[i] = Math.min(next[i] + step, end);
          }
          return next;
        });
      }, 16);
    });
    const timeout = setTimeout(() => intervals.forEach(clearInterval), 1300);
    return () => {
      intervals.forEach(clearInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 px-6 lg:px-12 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[400px] bg-gradient-to-br from-[#905BA0]/30 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[400px] bg-gradient-to-tr from-[#c084fc]/30 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#905BA0] rounded-full"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-[#905BA0] rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-60 w-20 h-20 border-2 border-[#905BA0] rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-[#905BA0] rounded-full opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Why Choose <span className="text-[#905BA0]">Makjuz</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just build software – we build relationships, trust, and solutions that stand the test of time.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-xl relative overflow-hidden group"
            >
              {/* Icon Glow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-16 bg-gradient-to-br from-[#905BA0]/30 to-transparent rounded-full blur-2xl z-0 group-hover:scale-110 transition-transform duration-300" />
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#905BA0] text-white rounded-2xl mb-6 shadow-2xl relative z-10 group-hover:shadow-[0_0_32px_8px_#905BA0] transition-shadow duration-300">
                {stat.icon}
              </div>
              <div className="space-y-3 relative z-10">
                <div className="text-4xl lg:text-5xl font-bold text-[#905BA0]">
                  {counts[index]}{stat.suffix}
                </div>
                <h3 className="text-xl font-semibold text-white">{stat.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
