import React from 'react';
import { Instagram, Linkedin, Mail, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Arshjot Kaur Gahir</h3>
            <p className="text-slate-400">Designs that connect, code that speaks.</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/arshjot-kaur-gahir-933925334/" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            
            <a href="mailto:samanvaygupta49@gmail.com" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://github.com/kaurarshjot472-a11y" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors" aria-label="Github">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-slate-400">© {new Date().getFullYear()} Arshjot Kaur Gahir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};