import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Award, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: <Award className="h-6 w-6 text-[#905BA0]" />, label: '2+ Years Experience' },
  { icon: <Users className="h-6 w-6 text-[#905BA0]" />, label: '486+ Projects Delivered' },
  { icon: <Star className="h-6 w-6 text-[#905BA0]" />, label: '5-Star Client Rating' },
];

const blobVariants = {
  animate: {
    y: [0, 20, 0],
    x: [0, -20, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: 'easeInOut' as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 bg-gradient-to-br from-white via-purple-50/30 to-purple-100/40 overflow-hidden">
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-[#905BA0]/20 rounded-full blur-2xl z-0"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#c084fc]/20 rounded-full blur-3xl z-0"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="block"
                >
                  Software that
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-[#905BA0] block"
                >
                  grows with you
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg"
              >
                We build innovative digital solutions that transform businesses and create meaningful connections between technology and people.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button 
                size="lg" 
                className="bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Call Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-[#905BA0] text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Ask Demo
              </Button>
            </motion.div>
          </div>
          {/* Right Image */}
          <motion.div
            className="relative animate-fade-in"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                alt="Modern software development" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#905BA0]/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-[#905BA0] rounded-full opacity-80 animate-pulse"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: '1s' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>
        </div>
        {/* Key Stats Row */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/80 rounded-xl px-6 py-4 shadow border border-gray-100">
              {stat.icon}
              <span className="font-semibold text-gray-700 text-lg">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
