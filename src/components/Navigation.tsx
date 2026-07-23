'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FaAnchor, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  const navItems = [
    { href: '/', label: 'nav.home', icon: '🏠' },
    { href: '/courses', label: 'nav.courses', icon: '📚' },
    { href: '/testimonials', label: 'nav.testimonials', icon: '⭐' },
    { href: '/faq', label: 'nav.faq', icon: '❓' },
    { href: '/contact', label: 'nav.contact', icon: '✉️' },
  ];

  const getPathWithoutLocale = (p: string) => {
    const parts = p.split('/').filter(Boolean);
    if (languages.some(l => l.code === parts[0])) {
      return '/' + parts.slice(1).join('/');
    }
    return p === '' ? '/' : p;
  };

  const currentPath = getPathWithoutLocale(pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Ship deck navigation */}
      <div className="relative">
        {/* Wooden plank background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b6914] via-[#a0782a] to-[#8b6914] opacity-95" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(0,0,0,0.1)_40px,rgba(0,0,0,0.1)_42px)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <FaAnchor className="text-2xl md:text-3xl text-[#f4d03f] animate-sail" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pirate-red rounded-full animate-pulse" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-[#f4d03f] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                I-Land
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const href = `/${locale}${item.href === '/' ? '' : item.href}`;
                const isActive = currentPath === item.href || 
                  (item.href !== '/' && currentPath.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={href}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      pixel-border
                      ${isActive 
                        ? 'bg-[#d4a017] text-[#0a1628] shadow-lg' 
                        : 'text-[#f0e6d3] hover:bg-[#a0782a] hover:text-white'
                      }
                    `}
                  >
                    <span className="mr-1">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}

              {/* Language Switcher */}
              <div className="relative ml-2">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium
                    bg-[#a0782a] text-[#f0e6d3] hover:bg-[#8b6914] transition-colors pixel-border"
                >
                  <FaGlobe className="text-xs" />
                  <span>{languages.find(l => l.code === locale)?.flag}</span>
                </button>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                    <div className="absolute right-0 mt-2 w-40 rounded-lg overflow-hidden z-20 shadow-xl pixel-border"
                      style={{ background: 'linear-gradient(135deg, #8b6914, #a0782a)' }}>
                      {languages.map((lang) => (
                        <a
                          key={lang.code}
                          href={`/${lang.code}${currentPath === '/' ? '' : currentPath}`}
                          className={`
                            flex items-center gap-2 px-4 py-3 text-sm transition-colors cursor-pointer
                            ${locale === lang.code 
                              ? 'bg-[#d4a017] text-[#0a1628]' 
                              : 'text-[#f0e6d3] hover:bg-[#8b6914]'
                            }
                          `}
                          onClick={() => setLangOpen(false)}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Calendly CTA Button */}
              <a
                href="https://calendly.com/iland-coding/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2 rounded-lg text-sm font-bold text-[#0a1628]
                  bg-gradient-to-r from-[#f4d03f] via-[#e6b800] to-[#d4a017]
                  hover:from-[#f9e79f] hover:via-[#f4d03f] hover:to-[#e6b800]
                  transition-all duration-200 animate-shimmer pixel-border"
              >
                🎯 nav.book
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="p-2 rounded-lg text-[#f4d03f] hover:bg-[#a0782a] transition-colors"
                >
                  <FaGlobe className="text-lg" />
                </button>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                    <div className="absolute right-0 mt-2 w-40 rounded-lg overflow-hidden z-20 shadow-xl pixel-border"
                      style={{ background: 'linear-gradient(135deg, #8b6914, #a0782a)' }}>
                      {languages.map((lang) => (
                        <a
                          key={lang.code}
                          href={`/${lang.code}${currentPath === '/' ? '' : currentPath}`}
                          className={`
                            flex items-center gap-2 px-4 py-3 text-sm transition-colors cursor-pointer
                            ${locale === lang.code 
                              ? 'bg-[#d4a017] text-[#0a1628]' 
                              : 'text-[#f0e6d3] hover:bg-[#8b6914]'
                            }
                          `}
                          onClick={() => setLangOpen(false)}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#f4d03f] hover:bg-[#a0782a] transition-colors"
              >
                {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
          <div className="relative z-50 bg-gradient-to-b from-[#8b6914] via-[#a0782a] to-[#8b6914] px-4 py-4 space-y-2 shadow-xl">
            {navItems.map((item) => {
              const href = `/${locale}${item.href === '/' ? '' : item.href}`;
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={href}
                  className={`
                    block px-4 py-3 rounded-lg text-sm font-medium transition-all
                    pixel-border
                    ${isActive 
                      ? 'bg-[#d4a017] text-[#0a1628]' 
                      : 'text-[#f0e6d3] hover:bg-[#a0782a]'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://calendly.com/iland-coding/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-bold text-[#0a1628]
                bg-gradient-to-r from-[#f4d03f] to-[#d4a017] pixel-border"
              onClick={() => setIsOpen(false)}
            >
              🎯 nav.book
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}