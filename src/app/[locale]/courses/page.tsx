'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { FaStar, FaCheck, FaRocket, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const courseIcons: Record<string, string> = {
  beginner: '🧩',
  intermediate: '⚔️',
  advanced: '👑',
};

const courseColors: Record<string, string> = {
  beginner: 'from-emerald-600 to-emerald-800 border-emerald-500',
  intermediate: 'from-amber-600 to-amber-800 border-amber-500',
  advanced: 'from-red-600 to-red-800 border-red-500',
};

export default function CoursesPage() {
  const t = useTranslations('courses');
  const courses = ['beginner', 'intermediate', 'advanced'];

  return (
    <div className="min-h-screen py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#f4d03f] mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-[#f0e6d3]/80 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Course Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`
                relative group rounded-2xl overflow-hidden
                bg-gradient-to-b ${courseColors[course]}
                border-2 ${courseColors[course].split(' ').pop()}
                pixel-border
                transform hover:scale-105 transition-all duration-300
              `}
            >
              {/* Ribbon */}
              {i === 1 && (
                <div className="absolute top-6 -right-12 bg-[#f4d03f] text-[#0a1628] px-12 py-1 
                  text-sm font-bold transform rotate-45 shadow-lg z-10">
                  POPULAR
                </div>
              )}

              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="text-5xl mb-6">{courseIcons[course]}</div>

                {/* Title & Age */}
                <h2 className="text-2xl font-bold text-white mb-2">
                  {t(`${course}.title`)}
                </h2>
                <p className="text-[#f4d03f] font-semibold mb-6 text-lg">
                  {t(`${course}.age`)}
                </p>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  {t(`${course}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {(t.raw(`${course}.features`) as string[]).map((feature: string, fi: number) => (
                    <motion.li
                      key={fi}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 + fi * 0.1 }}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <FaCheck className="text-[#f4d03f] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-[#f4d03f]">
                    {t(`${course}.price`)}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 px-6 py-3 rounded-lg text-sm font-bold text-[#0a1628]
                        bg-[#f4d03f] hover:bg-white transition-colors pixel-border text-center"
                    >
                      {t('cta')}
                    </Link>
                    <a
                      href="https://calendly.com/iland-coding/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-lg text-sm font-bold text-[#f4d03f]
                        border-2 border-[#f4d03f] hover:bg-[#f4d03f] hover:text-[#0a1628]
                        transition-all pixel-border"
                    >
                      🎯
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Curriculum Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 pixel-border">
          <h2 className="text-2xl md:text-4xl font-bold text-[#f4d03f] mb-8 text-center">
            Your Learning Journey 🗺️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1️⃣', title: 'Block Coding', desc: 'Drag & drop basics' },
              { step: '2️⃣', title: 'Python', desc: 'Real programming' },
              { step: '3️⃣', title: 'JavaScript', desc: 'Web & games' },
              { step: '4️⃣', title: 'Full-Stack', desc: 'Build anything!' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center p-6 rounded-xl bg-white/5 pixel-border"
              >
                <div className="text-4xl mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-[#f4d03f] mb-1">{item.title}</h3>
                <p className="text-sm text-[#f0e6d3]/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
      >
        <div className="bg-gradient-to-b from-[#8b6914] to-[#6b4f0e] rounded-3xl p-12 pixel-border">
          <div className="text-5xl mb-4">🏴‍☠️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f4d03f] mb-4">
            Still Not Sure Which Course?
          </h2>
          <p className="text-[#f0e6d3]/80 mb-8 max-w-xl mx-auto">
            Book a free consultation and we'll help you find the perfect coding adventure!
          </p>
          <a
            href="https://calendly.com/iland-coding/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-bold text-[#0a1628]
              bg-gradient-to-r from-[#f4d03f] to-[#d4a017]
              hover:from-[#f9e79f] hover:to-[#f4d03f]
              transition-all duration-300 pixel-border"
          >
            <FaRocket /> Book Free Consultation <FaArrowRight />
          </a>
        </div>
      </motion.section>
    </div>
  );
}