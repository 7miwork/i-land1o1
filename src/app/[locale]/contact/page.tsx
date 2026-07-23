'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaMapPin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate form submission - in production, send to your API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#f4d03f] mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-[#f0e6d3]/80 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 pixel-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#f4d03f] mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#a0782a] 
                    text-[#f0e6d3] placeholder-[#f0e6d3]/30
                    focus:outline-none focus:border-[#f4d03f] focus:ring-1 focus:ring-[#f4d03f]
                    transition-colors pixel-border"
                  placeholder="Captain Jack"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#f4d03f] mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#a0782a]
                    text-[#f0e6d3] placeholder-[#f0e6d3]/30
                    focus:outline-none focus:border-[#f4d03f] focus:ring-1 focus:ring-[#f4d03f]
                    transition-colors pixel-border"
                  placeholder="jack@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#f4d03f] mb-2">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#a0782a]
                    text-[#f0e6d3] placeholder-[#f0e6d3]/30
                    focus:outline-none focus:border-[#f4d03f] focus:ring-1 focus:ring-[#f4d03f]
                    transition-colors pixel-border resize-none"
                  placeholder="Ahoy! I'd like to learn more about..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 rounded-lg text-lg font-bold text-[#0a1628]
                  bg-gradient-to-r from-[#f4d03f] via-[#e6b800] to-[#d4a017]
                  hover:from-[#f9e79f] hover:via-[#f4d03f] hover:to-[#e6b800]
                  transition-all duration-300 pixel-border
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaShip />
                    {t('submit')}
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center font-medium"
                >
                  ✅ {t('success')}
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium"
                >
                  ❌ {t('error')}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <FaEnvelope />, label: 'Email', value: 'hello@iland-coding.com' },
                { icon: <FaPhone />, label: 'Phone', value: '+49 30 1234 5678' },
                { icon: <FaMapPin />, label: 'Location', value: 'Berlin, Germany' },
                { icon: '⏰', label: 'Hours', value: 'Mon-Fri 9AM-6PM CET' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 pixel-border
                    hover:bg-white/10 transition-colors"
                >
                  <div className="text-[#f4d03f] text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm font-bold text-[#f4d03f] mb-1">{item.label}</div>
                  <div className="text-sm text-[#f0e6d3]/70">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 pixel-border text-center"
            >
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-[#f4d03f] mb-2">
                Book a Free Trial
              </h3>
              <p className="text-sm text-[#f0e6d3]/70 mb-6">
                Schedule a 30-minute session to see if we're a good fit!
              </p>
              <a
                href="https://calendly.com/iland-coding/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-[#0a1628]
                  bg-gradient-to-r from-[#f4d03f] to-[#d4a017]
                  hover:from-[#f9e79f] hover:to-[#f4d03f]
                  transition-all duration-300 pixel-border"
              >
                <FaShip /> Schedule Now
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 pixel-border text-center"
            >
              <p className="text-sm text-[#f0e6d3]/60">
                ⚡ We typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}