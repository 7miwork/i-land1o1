'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { FaShip, FaStar, FaCode, FaGamepad, FaRocket, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Stars overlay */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl md:text-8xl"
          >
            ⛵
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f4d03f] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            {t('title')}
          </h1>

          <p className="text-xl md:text-2xl text-[#f0e6d3] max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={`/${locale}/courses`}
              className="group px-8 py-4 rounded-lg text-lg font-bold text-[#0a1628]
                bg-gradient-to-r from-[#f4d03f] via-[#e6b800] to-[#d4a017]
                hover:from-[#f9e79f] hover:via-[#f4d03f] hover:to-[#e6b800]
                transition-all duration-300 pixel-border
                flex items-center justify-center gap-2"
            >
              <FaRocket className="group-hover:animate-bounce" />
              {t('cta')}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://calendly.com/iland-coding/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg text-lg font-bold text-[#f4d03f]
                border-2 border-[#f4d03f] hover:bg-[#f4d03f] hover:text-[#0a1628]
                transition-all duration-300 pixel-border
                flex items-center justify-center gap-2"
            >
              <FaShip />
              {t('cta2')}
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            {[
              { icon: "🏆", label: "500+ Students", sub: "Since 2020" },
              { icon: "👨‍🏫", label: "Expert Teachers", sub: "Certified coders" },
              { icon: "🎮", label: "Minecraft Edu", sub: "Official partners" },
              { icon: "🇩🇪", label: "Germany Based", sub: "Berlin & Online" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm pixel-border"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-sm font-bold text-[#f4d03f]">{stat.label}</div>
                <div className="text-xs text-[#f0e6d3]/60">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1440 100" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,100 L0,100 Z"
            fill="rgba(15, 43, 92, 0.5)"
          />
          <path
            d="M0,60 C180,90 360,30 540,60 C720,90 900,30 1080,60 C1260,90 1350,30 1440,60 L1440,100 L0,100 Z"
            fill="rgba(26, 74, 138, 0.4)"
          />
        </svg>
      </div>
    </section>
  );
}

function CoursesPreview() {
  const t = useTranslations('courses');
  const locale = useLocale();

  const courses = [
    { key: 'beginner', icon: '🧩', color: 'from-emerald-600 to-emerald-800' },
    { key: 'intermediate', icon: '⚔️', color: 'from-amber-600 to-amber-800' },
    { key: 'advanced', icon: '👑', color: 'from-red-600 to-red-800' },
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#f4d03f] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[#f0e6d3]/80 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`
                relative group rounded-2xl overflow-hidden
                bg-gradient-to-b ${course.color}
                pixel-border
                transform hover:scale-105 transition-all duration-300
                cursor-pointer
              `}
            >
              <div className="relative z-10 p-8">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t(`${course.key}.title`)}
                </h3>
                <p className="text-[#f4d03f] font-medium mb-3">
                  {t(`${course.key}.age`)}
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {t(`${course.key}.description`)}
                </p>

                <ul className="space-y-2 mb-8">
                  {(t.raw(`${course.key}.features`) as string[]).map((feature: string, fi: number) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-[#f4d03f]">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#f4d03f]">
                    {t(`${course.key}.price`)}
                  </span>
                  <Link
                    href={`/${locale}/courses`}
                    className="px-4 py-2 rounded-lg text-sm font-bold text-[#0a1628]
                      bg-[#f4d03f] hover:bg-white transition-colors pixel-border"
                  >
                    {t('cta')}
                  </Link>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  const t = useTranslations('testimonials');

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#f4d03f] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[#f0e6d3]/80 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(t.raw('items') as any[]).map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 pixel-border
                hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <FaStar key={si} className="text-[#f4d03f] text-sm" />
                ))}
              </div>
              <p className="text-[#f0e6d3]/80 text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f4d03f] to-[#d4a017] 
                  flex items-center justify-center text-sm font-bold text-[#0a1628]">
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
      </div>
    </section>
  );
}

function FAQPreview() {
  const t = useTranslations('faq');
  const locale = useLocale();

  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#f4d03f] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[#f0e6d3]/80 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {(t.raw('items') as any[]).slice(0, 3).map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 pixel-border
                hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-bold text-[#f4d03f] mb-2">
                {item.question}
              </h3>
              <p className="text-[#f0e6d3]/70 text-sm leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href={`/${locale}/faq`}
            className="inline-flex items-center gap-2 text-[#f4d03f] hover:text-white transition-colors
              font-medium"
          >
            View all FAQs <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const locale = useLocale();

  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#8b6914] to-[#6b4f0e] rounded-3xl p-12 pixel-border
            relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#f4d03f]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#f4d03f]/5 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 space-y-6">
            <div className="text-6xl">🏴‍☠️</div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#f4d03f]">
              Ready to Set Sail?
            </h2>
            <p className="text-lg text-[#f0e6d3]/80 max-w-xl mx-auto">
              Join 500+ young pirates on an epic coding adventure. 
              Your first session is on us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href={`/${locale}/courses`}
                className="px-8 py-4 rounded-lg text-lg font-bold text-[#0a1628]
                  bg-gradient-to-r from-[#f4d03f] to-[#d4a017]
                  hover:from-[#f9e79f] hover:to-[#f4d03f]
                  transition-all duration-300 pixel-border"
              >
                🚀 Explore Courses
              </Link>
              <a
                href="https://calendly.com/iland-coding/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-lg font-bold text-[#f4d03f]
                  border-2 border-[#f4d03f] hover:bg-[#f4d03f] hover:text-[#0a1628]
                  transition-all duration-300 pixel-border"
              >
                📅 Book Free Trial
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CoursesPreview />
      <TestimonialsPreview />
      <FAQPreview />
      <CTASection />
    </div>
  );
}