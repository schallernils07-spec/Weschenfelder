import React from 'react';
import { ArrowRight, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenContact: (subject?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  return (
    <section id="hero" className="bg-[#f8f9fa] pt-6 pb-4 sm:pt-8 sm:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          
          {/* Bento Tile 1: Large Main Hero Card (col-span-8) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-950 flex flex-col justify-center min-h-[460px] sm:min-h-[520px]">
            {/* Real commercial kitchen visual from gastro-weschenfelder.de */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/85 to-zinc-900/50 z-10" />
            <img
              src="/images/kueche_l900.jpg"
              alt="Großküchen-Kochblock Lotus L900 von Gastrotechnik Weschenfelder"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-102 transition-transform duration-700"
            />

            <div className="relative z-20 p-8 sm:p-12 text-white flex flex-col justify-center h-full">
              {/* Pill badge with blue indicator dot and source label */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xs">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-100">
                    Seit {COMPANY_INFO.experienceSince} Erfahrung
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/15 text-[11px] text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Echtes Großküchen-Originalfoto</span>
                </div>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] mb-5 max-w-2xl text-white tracking-tight">
                Professionelle Gastronomie- &amp; Großküchentechnik
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-xl leading-relaxed">
                {COMPANY_INFO.subtitle}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  id="hero-bento-consulting"
                  onClick={() => onOpenContact('Beratungsanfrage Großküchentechnik')}
                  className="px-7 py-3.5 bg-white text-zinc-900 font-bold rounded-2xl shadow-xl hover:bg-zinc-100 transition-colors text-sm flex items-center gap-2"
                >
                  <span>Beratung anfragen</span>
                  <ArrowRight className="w-4 h-4 text-zinc-900" />
                </button>

                <button
                  id="hero-bento-services"
                  onClick={onExploreServices}
                  className="px-7 py-3.5 bg-zinc-800/60 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-zinc-800/80 transition-colors text-sm flex items-center gap-1.5"
                >
                  <span>Leistungen entdecken</span>
                  <ChevronRight className="w-4 h-4 text-zinc-300" />
                </button>
              </div>

              {/* Quick checklist bar */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>Verkauf &amp; Montage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>Vor-Ort Reparatur</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>Wartungsverträge</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>Planung &amp; Leasing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Bento Column (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Bento Tile 2: Dark Direct Contact Card */}
            <div className="bg-[#1a1a1a] rounded-3xl p-7 text-white flex flex-col justify-between shadow-xl border border-zinc-800 flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-display tracking-tight">Direkt-Kontakt</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 py-0.5 bg-zinc-800 rounded">
                    Pößneck
                  </span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  Wir sind persönlich für Sie da – kompetent, regional und direkt.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Telefon Kundendienst</span>
                      <a
                        id="hero-bento-phone-link"
                        href={`tel:${COMPANY_INFO.phoneClean}`}
                        className="text-base font-bold text-white hover:text-blue-400 transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">E-Mail Service</span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-blue-400 transition-colors truncate block"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-zinc-800 flex justify-between items-center text-xs">
                <span className="uppercase tracking-widest text-zinc-400 font-semibold text-[11px]">
                  Büro: 07:30–14:00
                </span>
                <span className="text-blue-400 font-semibold text-[11px]">
                  Kundendienst: 08:00–17:00
                </span>
              </div>
            </div>

            {/* Bento Tile 3: Crisp White Leasing Quick Tile */}
            <div
              onClick={() => onOpenContact('Anfrage zu Leasinglösungen')}
              className="bg-white rounded-3xl p-6 shadow-xs border border-zinc-200 flex items-center justify-between cursor-pointer hover:border-zinc-400 transition-colors group"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Finanzierung &amp; Investition
                </span>
                <span className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  Leasinglösungen
                </span>
                <span className="text-xs text-zinc-500 mt-0.5">
                  Flexibel &amp; liquiditätsschonend
                </span>
              </div>
              <button
                aria-label="Leasing anfragen"
                className="bg-zinc-900 text-white p-3 rounded-2xl group-hover:bg-blue-600 transition-colors shrink-0 ml-3"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
