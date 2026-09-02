import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';

type TimelineItem = {
  icon: React.ReactNode;
  period: string;
  title: string;
  company: string;
  description: string;
};

export const Resume: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      icon: <GraduationCap size={20} />,
      title: 'B.Tech in Computer Science Specialization in Data Science with ML',
      company: 'Lovely Professional University',
      period: '2025 - Present',
      description: 'Currently pursuing a B.Tech in Computer Science and Engineering, developing a strong foundation in programming, software development, data analysis, and problem solving.'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Higher Secondary Education (Class 12)',
      company: 'Sacred Heart Convent Sr. Sec. School',
      period: '2022 - 2023',
      description: 'Completed Higher Secondary Education with a strong academic record, achieving 89.4%'
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Higher Secondary Education (Class 10)',
      company: 'Sacred Heart Convent Sr. Sec. School',
      period: '2022 - 2023',
      description: 'Completed Secondary Education with an excellent academic record, achieving 91%.'
    }
  ];

  return (
    <section id="resume" className="section bg-black relative">
      {/* Background Gradient and Floating Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-5 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container-custom">
        <h3 className="section-subtitle text-blue-600">My Resume</h3>
        <h2 className="section-title text-white">Education</h2>

        <div className="mt-12 mb-12 max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 pl-8 ml-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6, ease: 'easeOut' }}
              >
                <div className="absolute -left-12 bg-blue-600 text-white p-2 rounded-full">
                  {item.icon}
                </div>
                <div className="flex items-center text-sm text-blue-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{item.company}</p>
                <p className="text-white">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};
