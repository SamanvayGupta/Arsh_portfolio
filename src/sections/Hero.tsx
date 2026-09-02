import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 scale-y-[-1] bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float hidden sm:block"></div>
        <div
          className="absolute bottom-5 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float hidden sm:block"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      

      <div className="relative z-10 w-full px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 max-w-lg mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="inline-block text-white">Hi, I'm </span>
              <span className="inline-block text-blue-600">Arshjot Kaur Gahir</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 h-10">
              <Typewriter
                words={[
                  'Python Developer',
                  'Data Enthusiast 📊',
                  'Creative Problem Solver 💡',
                  'UX & Design Explorer 🎨',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
              Code that solves, designs that inspire.
            </h2>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#portfolio" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-3xl transform transition-transform hover:scale-[1.03] shadow-[0_0_30px_#5271FF] md:-translate-y-2 md:-translate-x-8">
              <img
                src="/images/me2.png"
                alt="Samanvay Gupta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="w-full flex justify-center mt-10 md:mt-16">
          <a href="#about" className="animate-bounce text-slate-700 hover:text-blue-600 transition-colors">
            <ChevronDown size={52} />
          </a>
        </div>
      </div>
    </section>
  );
};
