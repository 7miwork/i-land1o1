'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { FaAnchor, FaShip, FaSkullCrossbones, FaCompass, FaMapMarkedAlt } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="relative mt-auto">
      {/* Treasure map styled footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8b6914] to-[#6b4f0e]" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaAnchor className="text-2xl text-[#f4d03f]" />
              <span className="text-xl font-bold text-[#f4d03f] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                I-Land Coding Academy
              </span>
            </div>
            <p className="text-[#f0e6d3]/80 text-sm leading-relaxed">
              {t('follow')}
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#a0782a] flex items-center justify-center
                    text-[#f4d03f] hover:bg-[#d4a017] hover:text-[#0a1628] transition-all pixel-border"
                >
                  <span className="text-lg">{social === 'facebook' ? '📘' : social === 'twitter' ? '🐦' : social === 'instagram' ? '📸' : '🎥'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#f4d03f] mb-4 flex items-center gap-2">
              <FaCompass className="text-sm" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/courses', label: 'courses' },
                { href: '/testimonials', label: 'testimonials' },
                { href: '/faq', label: 'faq' },
                { href: '/contact', label: 'contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-[#f0e6d3]/70 hover:text-[#f4d03f] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-xs">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-bold text-[#f4d03f] mb-4 flex items-center gap-2">
              <FaShip className="text-sm" />
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[#f0e6d3]/70">
              <li>📧 hello@iland-coding.com</li>
              <li>📞 +49 30 1234 5678</li>
              <li>📍 Berlin, Germany</li>
            </ul>
            <div className="mt-6 space-y-2">
              <Link href={`/${locale}/privacy`} className="block text-[#f0e6d3]/50 hover:text-[#f4d03f] text-xs transition-colors">
                {t('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="block text-[#f0e6d3]/50 hover:text-[#f4d03f] text-xs transition-colors">
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-[#a0782a]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#f0e6d3]/50">
            &copy; {new Date().getFullYear()} {t('rights')}
          </p>
          <div className="flex items-center gap-4 text-xs text-[#f0e6d3]/30">
            <span className="flex items-center gap-1">
              <FaSkullCrossbones /> Made with 🧊
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkedAlt /> Set Sail Today!
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}