import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications',
    icon: '🌐',
  },
  {
    title: 'Mobile Apps',
    description: 'iOS and Android development',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces',
    icon: '🎨',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure',
    icon: '☁️',
  },
];

const ServiceBubbles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const bubbles = containerRef.current.getElementsByClassName('service-bubble');
      const { clientX, clientY } = e;
      
      Array.from(bubbles).forEach((bubble) => {
        const rect = bubble.getBoundingClientRect();
        const bubbleX = rect.left + rect.width / 2;
        const bubbleY = rect.top + rect.height / 2;
        
        const deltaX = (clientX - bubbleX) * 0.01;
        const deltaY = (clientY - bubbleY) * 0.01;
        
        (bubble as HTMLElement).style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-white to-gray-100"
    >
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          className="service-bubble absolute p-6 rounded-full bg-[#FF6B6B]/10 backdrop-blur-sm border border-[#FF6B6B]/20 shadow-lg"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: 1,
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: '#FF6B6B',
            color: 'white',
          }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="font-bold text-lg">{service.title}</h3>
            <p className="text-sm opacity-80">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceBubbles; 