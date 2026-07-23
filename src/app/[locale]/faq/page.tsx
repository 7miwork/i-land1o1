'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden pixel-border
        hover:bg-white/10 transition-colors"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-start gap-3">
          <FaQuestionCircle className="text-[#f4d03f] mt-1 flex-shrink-0" />
          <span className="text-lg font-bold text-[#f4d03f]">{question}</span>
        </div>
        <FaChevronDown
          className={`text-[#f4d03f] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#f0e6d3]/80 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = t.raw('items') as { question: string; answer: string }[];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-b from-[#8b6914] to-[#6b4f0e] rounded-3xl p-8 md:p-12 pixel-border">
            <div className="text-5xl mb-4">📬</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f4d03f] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-[#f0e6d3]/80 mb-8 max-w-lg mx-auto">
              We're here to help! Send us a message or book a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${t('_locale')}/contact`}
                className="px-8 py-3 rounded-lg font-bold text-[#0a1628]
                  bg-gradient-to-r from-[#f4d03f] to-[#d4a017]
                  hover:from-[#f9e79f] hover:to-[#f4d03f]
                  transition-all duration-300 pixel-border"
              >
                ✉️ Contact Us
              </a>
              <a
                href="https://calendly.com/iland-coding/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg font-bold text-[#f4d03f]
                  border-2 border-[#f4d03f] hover:bg-[#f4d03f] hover:text-[#0a1628]
                  transition-all duration-300 pixel-border"
              >
                📅 Book Free Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}