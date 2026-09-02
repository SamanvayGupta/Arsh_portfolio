import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react'; // Replaced Download with FileText

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-1 z-50 transition-all duration-300 transform ${
        isScrolled
          ? 'top-2 left-1/2 -translate-x-1/2 bg-black py-2 w-3/4 shadow-[0_0_30px_#5271FF] rounded-full'
          : 'bg-transparent py-4 w-full left-1/2 -translate-x-1/2'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl md:text-2xl font-bold text-blue-600">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#resume" 
              className="btn btn-primary flex items-center space-x-2"
            >
              <FileText size={16} /> {/* Changed icon */}
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black p-4 shadow-md absolute top-full left-0  rounded-xl right-0">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-white hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#resume" 
              className="btn btn-primary flex items-center justify-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
