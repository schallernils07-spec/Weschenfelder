import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onOpenContact: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-zinc-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-zinc-700 flex items-center justify-center p-1 overflow-hidden shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="Gastrotechnik Weschenfelder"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-white uppercase tracking-tight">
                  Weschenfelder
                </span>
                <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-semibold mt-0.5">
                  Gastrotechnik • Pößneck
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm italic">
              „{COMPANY_INFO.tagline}.“
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
              Inhaber Kay Weschenfelder. Fachbetrieb für Beratung, Planung, Verkauf, Montage,
              Reparatur und Wartung gewerblicher Gastronomie- und Großkücheneinrichtungen seit 1997.
            </p>

            <div className="pt-2 text-xs text-blue-400 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{COMPANY_INFO.coreValues}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-blue-400 transition-colors">
                  Leistungen (11 Bereiche)
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-blue-400 transition-colors">
                  Kundendienst &amp; Reparatur
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="hover:text-blue-400 transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#leasing" className="hover:text-blue-400 transition-colors">
                  Leasing &amp; Finanzierung
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-blue-400 transition-colors">
                  Kontakt &amp; Anfahrt
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Kontakt &amp; Standort
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-white hover:text-blue-400 font-bold text-sm"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-zinc-300 hover:text-blue-400"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-zinc-800 text-xs text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-300">Büro: {COMPANY_INFO.hours.office}</span>
                  <span className="block text-zinc-300">Kundendienst: {COMPANY_INFO.hours.service}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name} Pößneck
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-blue-400 transition-colors"
            >
              Impressum
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-blue-400 transition-colors"
            >
              Datenschutz
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors flex items-center gap-1.5"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold">Nach oben</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
