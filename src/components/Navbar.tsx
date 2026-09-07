import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenContact: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Startseite', href: '#hero' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Kundendienst', href: '#service' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Leasing', href: '#leasing' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bento Micro Bar */}
      <div className="bg-[#1a1a1a] text-zinc-300 text-xs py-2.5 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-medium text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block animate-pulse"></span>
              Großküchen- &amp; Gastronomietechnik seit 1997
            </span>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Kundendienst: Mo.–Fr. 08:00–17:00 Uhr
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              id="topbar-tel-link"
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-zinc-200 hover:text-blue-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <span className="hidden sm:inline text-zinc-400">07381 Pößneck</span>
          </div>
        </div>
      </div>

      {/* Main Bento Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200 py-3.5'
            : 'bg-white border-b border-zinc-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="brand-logo-link"
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center group text-left py-0.5"
              title="Gastrotechnik Weschenfelder Pößneck"
            >
              <img
                src="./images/logo.jpg"
                alt="Gastrotechnik Weschenfelder"
                className="h-12 sm:h-14 w-auto max-w-[220px] sm:max-w-[280px] object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-zinc-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                id="navbar-direct-call-btn"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="hidden xl:flex items-center gap-2 px-4 py-2 text-xs font-bold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors border border-zinc-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                id="navbar-cta-btn"
                onClick={() => onOpenContact('Allgemeine Beratung & Anfrage')}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xs hover:shadow transition-all group"
              >
                <span>Beratung anfragen</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 text-zinc-400 group-hover:translate-x-0.5 group-hover:text-white transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-4 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2.5 text-base font-medium text-zinc-800 hover:text-blue-600 hover:bg-zinc-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <a
                id="mobile-nav-call"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-100 text-zinc-900 font-semibold text-sm border border-zinc-200"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Jetzt anrufen: {COMPANY_INFO.phone}</span>
              </a>

              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('Allgemeine Beratung & Anfrage');
                }}
                className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm shadow text-center"
              >
                Beratung anfragen
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
