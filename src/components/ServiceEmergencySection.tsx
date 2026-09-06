import React from 'react';
import { Wrench, Phone, CheckCircle2, Clock, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICE_HIGHLIGHTS } from '../data/companyData';

interface ServiceEmergencyProps {
  onOpenContact: (subject?: string) => void;
}

export const ServiceEmergencySection: React.FC<ServiceEmergencyProps> = ({ onOpenContact }) => {
  return (
    <section id="service" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Bento Tile 1: Main Dark Technical Card (col-span-8) */}
          <div className="lg:col-span-8 bg-[#1a1a1a] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-blue-400 text-xs font-semibold">
                <Wrench className="w-3.5 h-3.5" />
                <span>Werksschulungen &amp; Praxiserfahrung</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Regelmäßige Weiterbildung für höchste Reparaturqualität
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Durch stetige Weiterbildung und herstellerspezifische Schulungen verfügt{' '}
                <strong className="text-white font-semibold">Gastrotechnik Weschenfelder</strong> über fundierte
                Fachkompetenz bei Reparatur, Wartung und Überholung gewerblicher Elektro- und Gasgeräte.
              </p>

              {/* Service Highlights Grid */}
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3 block">
                  Kundendienst-Leistungen im Überblick
                </span>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {SERVICE_HIGHLIGHTS.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workshop Note */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-1 text-xs">
                <span className="text-blue-400 font-bold uppercase tracking-wider text-[10px] block">
                  Regionale Besonderheit:
                </span>
                <p className="text-zinc-200 font-medium">
                  Reparaturannahmestelle für Kaffeevollautomaten (privat &amp; gewerblich) in unserer Pößnecker Werkstatt.
                </p>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Kundendienst: {COMPANY_INFO.hours.service}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Malmsgelänge 13, 07381 Pößneck</span>
              </div>
            </div>
          </div>

          {/* Bento Tile 2: Electric Blue Emergency Action Tile (col-span-4) */}
          <div className="lg:col-span-4 bg-blue-600 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-bold uppercase tracking-wider mb-5">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>Notfall &amp; Instandsetzung</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                Schnelle Hilfe bei Ausfall
              </h3>

              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-6">
                Wenn Technik streikt, zählt jede Minute. Unser Kundendienst ist spezialisiert auf Reparatur, Wartung und Wiederinbetriebnahme Ihrer Gastronomiegeräte.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm font-medium mb-8">
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Vor-Ort Service in Thüringen</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Original-Ersatzteilservice</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Wartungsverträge &amp; Überholungen</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Kaffeevollautomaten-Annahme</span>
                </li>
              </ul>

              {/* Direct Telephone Banner inside tile */}
              <a
                id="emergency-bento-call-link"
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 mb-4 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="font-bold text-sm tracking-wide">{COMPANY_INFO.phone}</span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-100">
                  Sofortanruf
                </span>
              </a>
            </div>

            <button
              id="emergency-bento-request-btn"
              onClick={() => onOpenContact('Eilige Reparatur- & Kundendienstanfrage')}
              className="w-full py-3.5 bg-white text-zinc-900 hover:bg-zinc-100 font-bold rounded-2xl shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider"
            >
              Service anfordern
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
