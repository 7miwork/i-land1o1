'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

export default function TestimonialsPage() {
  const t = useTranslations('testimonials');

  const items = t.raw('items') as { name: string; role: string; text: string }[];

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 pixel-border
                hover:bg-white/10 transition-colors group"
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-6">
                <FaQuoteLeft className="text-3xl text-[#f4d03f]/30" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, si) => (
                    <FaStar key={si} className="text-[#f4d03f] text-sm" />
                  ))}
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-[#f0e6d3]/80 text-sm leading-relaxed mb-8 italic min-h-[120px]">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4a017] 
                  flex items-center justify-center text-lg font-bold text-[#0a1628]
                  group-hover:scale-110 transition-transform">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#f4d03f]">{item.name}</div>
                  <div className="text-xs text-[#f0e6d3]/60">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-b from-[#8b6914] to-[#6b4f0e] rounded-3xl p-8 md:p-12 pixel-border">
            <h2 className="text-2xl md:text-4xl font-bold text-[#f4d03f] mb-12 text-center">
              Our Journey So Far 🗺️
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Students', icon: '👨‍🎓' },
                { number: '1000+', label: 'Classes Taught', icon: '📚' },
                { number: '50+', label: 'Minecraft Mods', icon: '🎮' },
                { number: '4.9⭐', label: 'Parent Rating', icon: '⭐' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-[#f4d03f]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#f0e6d3]/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#f4d03f] mb-4">
            Ready to Join the Crew?
          </h2>
          <p className="text-[#f0e6d3]/80 mb-8 max-w-lg mx-auto">
            Start your child's coding adventure today with a free trial session!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/iland-coding/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-bold text-[#0a1628]
                bg-gradient-to-r from-[#f4d03f] to-[#d4a017]
                hover:from-[#f9e79f] hover:to-[#f4d03f]
                transition-all duration-300 pixel-border"
            >
              📅 Book Free Trial <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}