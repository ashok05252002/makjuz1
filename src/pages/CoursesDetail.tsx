import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { motion } from 'framer-motion';

const courseData = [
  {
    id: 'azure-data-engineering',
    title: 'Azure Data Engineering',
    description: 'Master data pipelines, ETL, and analytics on Microsoft Azure. This course covers everything from data ingestion to advanced analytics, preparing you for real-world data engineering roles.',
    icon: <Database className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Data pipeline design and implementation',
      'ETL processes and best practices',
      'Azure Data Factory, Databricks, and Synapse',
      'Real-time and batch data processing',
      'Data security and compliance on Azure',
    ],
  },
  {
    id: 'cloud-computing-engineering',
    title: 'Cloud Computing & Engineering',
    description: 'Learn cloud infrastructure, deployment, and management across platforms. This course provides hands-on experience with leading cloud providers and modern DevOps practices.',
    icon: <Cloud className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Cloud architecture fundamentals',
      'Multi-cloud deployment strategies',
      'Infrastructure as Code (IaC)',
      'Monitoring and scaling cloud resources',
      'Security and cost optimization',
    ],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'Explore generative models, LLMs, and AI-driven content creation. This course dives into the latest advancements in AI and their practical applications.',
    icon: <Bot className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Introduction to generative models',
      'Working with LLMs (Large Language Models)',
      'Text, image, and audio generation',
      'Ethics and safety in generative AI',
      'Building generative AI applications',
    ],
  },
  {
    id: 'sql-database-management',
    title: 'SQL Database Management',
    description: 'Design, manage, and optimize SQL databases for real-world applications. Gain expertise in database administration, performance tuning, and security.',
    icon: <Table className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Database schema design',
      'Advanced SQL queries',
      'Performance optimization',
      'Backup and recovery strategies',
      'Database security best practices',
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Build, train, and deploy machine learning models for various domains. This course covers supervised, unsupervised, and deep learning techniques.',
    icon: <Brain className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Supervised and unsupervised learning',
      'Model evaluation and selection',
      'Deep learning fundamentals',
      'Deployment of ML models',
      'Real-world ML projects',
    ],
  },
  {
    id: 'data-sciences',
    title: 'Data Sciences',
    description: 'Analyze data, extract insights, and drive business decisions with data science. Learn the full data science workflow from data wrangling to visualization.',
    icon: <BarChart2 className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Data wrangling and cleaning',
      'Exploratory data analysis',
      'Statistical modeling',
      'Data visualization techniques',
      'Business case studies',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights using modern analytics tools. This course emphasizes practical skills for business and technical roles.',
    icon: <PieChart className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Data collection and integration',
      'Descriptive and predictive analytics',
      'Dashboarding and reporting',
      'Data-driven decision making',
      'Popular analytics tools',
    ],
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Engineering',
    description: 'Architect and maintain scalable, secure cloud solutions. This course prepares you for cloud engineering roles with hands-on labs and projects.',
    icon: <Server className="text-white w-12 h-12" />, 
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
    amount: '₹10,000',
    bullets: [
      'Cloud solution architecture',
      'Automation and scripting',
      'Security and compliance',
      'Monitoring and troubleshooting',
      'Capstone cloud project',
    ],
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <button onClick={() => window.open('/courses','_blank')} className="text-[#905BA0] underline">Back to Courses</button>
        </div>
      </div>
    );
  }

  // Add more details for each course
  const moreDetails = {
    'azure-data-engineering': `This course is designed for aspiring data engineers and professionals looking to master the Azure ecosystem. You'll work on real-world projects, learn to automate data workflows, and gain hands-on experience with Azure's most powerful data tools. By the end, you'll be ready to design, build, and manage scalable data solutions in the cloud.`,
    'cloud-computing-engineering': `Gain a deep understanding of cloud platforms like AWS, Azure, and Google Cloud. You'll learn to architect, deploy, and manage cloud infrastructure, automate deployments with DevOps tools, and ensure security and scalability for modern applications. Ideal for IT professionals and engineers transitioning to the cloud.`,
    'generative-ai': `Dive into the world of generative AI, including GPT, DALL-E, and other state-of-the-art models. You'll build your own generative applications, understand the ethical implications, and explore the future of AI-driven creativity. Perfect for developers, data scientists, and innovators.`,
    'sql-database-management': `From database design to advanced query optimization, this course covers everything you need to become a skilled SQL database administrator. You'll practice backup and recovery, security, and performance tuning on real datasets, preparing you for roles in database management and analytics.`,
    'machine-learning': `Master the foundations and advanced techniques of machine learning. You'll build models for classification, regression, clustering, and deep learning, and deploy them in real-world scenarios. This course is hands-on, with projects in Python and popular ML frameworks.`,
    'data-sciences': `This comprehensive course covers the entire data science pipeline: data collection, cleaning, analysis, modeling, and visualization. You'll use Python, R, and industry-standard tools to solve real business problems, and build a portfolio of projects to showcase your skills.`,
    'data-analytics': `Learn to turn raw data into actionable insights. This course covers descriptive, diagnostic, predictive, and prescriptive analytics, with a focus on business intelligence tools and dashboarding. You'll work on case studies and real datasets to develop practical analytics skills.`,
    'cloud-engineering': `Prepare for a career in cloud engineering with hands-on labs and projects. You'll automate cloud deployments, manage infrastructure as code, and ensure security and compliance in cloud environments. This course is ideal for engineers and IT professionals moving to the cloud.`,
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#905BA0]/10 to-purple-50/30 overflow-hidden">
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
      {/* Full-width Hero Image */}
      <div className="w-full h-72 md:h-[420px] lg:h-[480px] overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover object-center" />
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-12 pb-16 px-4 sm:px-8">
        {/* Title, Description */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 drop-shadow-sm">{course.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{course.description}</p>
        </div>
        {/* More Details */}
        <div className="mb-8">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            {moreDetails[course.id]}
          </p>
        </div>
        {/* Amount and Register */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <span className="text-3xl font-bold text-[#905BA0]">{course.amount}</span>
          <button className="px-10 py-4 rounded-xl bg-[#905BA0] hover:bg-[#7d4f8a] text-white font-semibold text-xl shadow-lg transition-all duration-200 mt-4 md:mt-0">
            Register Now
          </button>
        </div>
        {/* Key Topics / Benefits - open, not in card */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#905BA0] mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
            {course.bullets.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="flex mt-10">
          <button onClick={() => navigate('/courses')} className="text-[#905BA0] underline text-lg">Back to Courses</button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail; 