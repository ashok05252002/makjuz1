import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Database,
  Cloud,
  Bot,
  Table,
  Brain,
  BarChart2,
  PieChart,
  Server,
} from 'lucide-react';

const courses = [
  {
    id: 'azure-data-engineering',
    title: 'Azure Data Engineering',
    description: 'Master data pipelines, ETL, and analytics on Microsoft Azure.',
    icon: <Database className="text-white w-8 h-8" />,
    bg: 'from-[#905BA0] to-[#9256a2]'
  },
  {
    id: 'cloud-computing-engineering',
    title: 'Cloud Computing & Engineering',
    description: 'Learn cloud infrastructure, deployment, and management across platforms.',
    icon: <Cloud className="text-white w-8 h-8" />,
    bg: 'from-[#9256a2] to-[#905BA0]'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'Explore generative models, LLMs, and AI-driven content creation.',
    icon: <Bot className="text-white w-8 h-8" />,
    bg: 'from-[#905BA0] to-[#7d4f8a]'
  },
  {
    id: 'sql-database-management',
    title: 'SQL Database Management',
    description: 'Design, manage, and optimize SQL databases for real-world applications.',
    icon: <Table className="text-white w-8 h-8" />,
    bg: 'from-[#7d4f8a] to-[#905BA0]'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Build, train, and deploy machine learning models for various domains.',
    icon: <Brain className="text-white w-8 h-8" />,
    bg: 'from-[#9256a2] to-[#7d4f8a]'
  },
  {
    id: 'data-sciences',
    title: 'Data Sciences',
    description: 'Analyze data, extract insights, and drive business decisions with data science.',
    icon: <BarChart2 className="text-white w-8 h-8" />,
    bg: 'from-[#905BA0] to-[#e9d7f7]'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights using modern analytics tools.',
    icon: <PieChart className="text-white w-8 h-8" />,
    bg: 'from-[#e9d7f7] to-[#905BA0]'
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Engineering',
    description: 'Architect and maintain scalable, secure cloud solutions.',
    icon: <Server className="text-white w-8 h-8" />,
    bg: 'from-[#7d4f8a] to-[#9256a2]'
  },
];

const Courses = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#905BA0]/10 to-purple-50/30 overflow-hidden">
      {/* Animated Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#905BA0]/30 rounded-full blur-3xl z-0 animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#9256a2]/20 rounded-full blur-2xl z-0 animate-pulse"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Our <span className="text-[#9256a2]">Courses</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <motion.div
              key={course.title}
              className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col justify-between border border-[#e9d7f7] group overflow-hidden transition-all duration-300"
              whileHover={{ y: -10, scale: 1.04 }}
              initial={{ y: 0 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              style={{ boxShadow: '0 8px 32px 0 rgba(146,86,162,0.18)' }}
            >
              {/* Animated border/glow on hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-[0_0_32px_8px_rgba(146,86,162,0.25)] group-hover:border-2 group-hover:border-[#9256a2] transition-all duration-300 z-10" />
              {/* Top-left blob */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#905BA0]/20 rounded-full blur-2xl z-0" />
              {/* Bottom-right blob */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#9256a2]/20 rounded-full blur-xl z-0" />
              <div className="relative z-20">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${course.bg} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    {course.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center drop-shadow-sm">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-center mb-8 min-h-[60px]">
                  {course.description}
                </p>
              </div>
              <div className="relative z-20 flex justify-center">
                <button className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold text-base shadow-lg transition-all duration-200" onClick={() => navigate(`/courses/${course.id}`)}>
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses; 