'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../components/supabaseClient';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [alert, setAlert] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    const { error } = await supabase
      .from('contacts')
      .insert([{ name, email, phone, subject, message }]);

    if (error) {
      console.error('Supabase error:', error.message);
      setAlert({ type: 'error', message: 'Something went wrong. Please try again.' });
    } else {
      setAlert({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }

    // Auto-dismiss alert after 4 seconds
    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <section id="contact" className="section bg-black relative">
      <div className="absolute inset-0 scale-y-[-1] bg-gradient-to-br from-blue-500/10 to-blue-600/10 z-[1] pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <h3 className="section-subtitle text-blue-600">Get In Touch</h3>
        <h2 className="section-title text-white">Contact Me</h2>

        


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Let's Talk</h3>
            <p className="text-white mb-8">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach
              out through the form or directly via email or social media.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <a
                    href="mailto:samanvaypgupta@gmail.com"
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                  >
                  kaurarshjot472@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-slate-400">+91 9592001713</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-slate-400">Punjab, India</p>
                </div>
              </div>
            </div>
          </div>
          {/* Alert Box */}
        {alert && (
          <div
          className={`top-10 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-xl transition-all duration-10000 animate-bounce ${
            alert.type === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          {alert.message}
        </div>

        )}

          <div className="shadow-[0_0_30px_#5271FF]">
            <form onSubmit={handleSubmit} className="bg-blue-100 p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-slate-500 mt-1">Include your country code (e.g. +91 for India)</p>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
