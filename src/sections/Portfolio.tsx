import React, { useState } from 'react';
import { X } from 'lucide-react'; // For close icon

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Personal Finance Management System',
      category: 'development',
      description: 'Built a Python-based desktop application to manage income, expenses, budgets, and financial insights with interactive tracking and visualization. Link: ',
      image: '/images/pf.png'
    },
    {
      id: 2,
      title: 'Student Marks Analyzer',
      category: 'data analytics',
      description: 'Developed an interactive Streamlit dashboard to analyze student performance, compare academic results, and present insights through clear visualizations.',
      image: '/images/sma.png'
    },
    {
      id: 3,
      title: 'Vitamin D Analysis',
      category: 'data analytics',
      description: 'Analyzed Vitamin D deficiency patterns across six Indian states using Python, creating visualizations to compare regional trends and identify key insights. Link: ',
      image: '/images/vda1.png'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];

  return (
    <section id="portfolio" className="section bg-black relative">
      <div className="absolute inset-0 scale-y-[-1] bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <h3 className="section-subtitle text-blue-600">My Work</h3>
        <h2 className="section-title text-white">Recent Projects</h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-medium capitalize transition-all ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-white">
          <p><i>Note: Click to Expand</i></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="portfolio-item group relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 portfolio-content">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs uppercase tracking-wider rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl text-white font-bold">{item.title}</h3>
                  <p className="text-purple-200 mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-black max-w-3xl w-full p-4 rounded-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-white hover:text-red-500"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-blue-600">{selectedItem.title}</h3>
              <p className="text-white">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
