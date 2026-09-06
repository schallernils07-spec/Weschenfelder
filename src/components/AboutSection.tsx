import React from 'react';
import { HeartHandshake, Award, CheckCircle2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="ueber-uns" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Bento Tile 1: Visual & Founder Tile with Real Google Maps Aerial (col-span-5) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xs border border-zinc-200 bg-zinc-950 min-h-[460px] flex flex-col justify-between p-6">
            <img
              src="/images/standort_satellit_hd.jpg"
              alt="Google Maps Luftbild: Standort Gastrotechnik Weschenfelder, Malmsgelänge 13, 07381 Pößneck"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30 pointer-events-none" />

            {/* Top Pills on Image */}
            <div className="relative z-10 flex flex-col gap-2 items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Erfahrung seit {COMPANY_INFO.experienceSince}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-[11px] text-zinc-200 font-medium">
                <MapPin className="w-3 h-3 text-red-400" />
                <span>Google Maps Luftbild: Malmsgelänge 13</span>
              </div>
            </div>

            {/* Center interactive marker / pin pointing to location */}
            <div className="relative z-10 self-center my-auto flex flex-col items-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600 border-2 border-white shadow-lg items-center justify-center"></span>
              </div>
              <span className="mt-1 px-2.5 py-1 bg-zinc-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white rounded-md shadow-md">
                Werkstatt &amp; Standort Pößneck
              </span>
            </div>
            
            {/* Bottom Founder Card */}
            <div className="relative z-10 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-zinc-200 text-zinc-900">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    KW
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-900 leading-tight">
                      {COMPANY_INFO.owner}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Inhaber Gastrotechnik Weschenfelder
                    </p>
                  </div>
                </div>

                <a
                  href={COMPANY_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
                  title="In Google Maps öffnen"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bento Tile 2: Content & Story Card (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-zinc-200 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>Inhabergeführter Fachbetrieb</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Erfahrung, auf die Sie sich verlassen können.
              </h2>

              <div className="space-y-3.5 text-zinc-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  <strong className="text-zinc-900 font-semibold">Gastrotechnik Weschenfelder</strong> wurde am <strong>01.01.2015</strong> gegründet
                  bzw. übernommen. Die Berufserfahrung unseres Inhabers Kay Weschenfelder in der
                  Gastronomie- und Großküchentechnik reicht bereits bis <strong>1997</strong> zurück.
                </p>
                <p>
                  Das Unternehmen führt herstellerunabhängige Beratung, Planung, Verkauf, Montage sowie
                  den verlässlichen Reparatur- und Wartungsdienst für Gastronomie-, Gewerbe- und
                  Großkücheneinrichtungen durch.
                </p>
                <p>
                  Unterstützt wird Kay Weschenfelder durch ein erfahrenes Büro- und Innendienstteam,
                  das für eine reibungslose Auftragsabwicklung und schnelle Ersatzteilbeschaffung sorgt.
                </p>
              </div>

              {/* Guiding Principle Sub-Tile */}
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-zinc-900">
                      Unser Unternehmensgrundsatz
                    </h4>
                    <p className="text-xs text-zinc-700 mt-1 italic leading-relaxed">
                      „{COMPANY_INFO.coreValues}“
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-6 mt-6 border-t border-zinc-100">
              <div className="flex items-center gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Langjährige Praxis seit 1997</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Direkter Inhaber-Kontakt</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Eigene Werkstatt in Pößneck</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Regelmäßige Werksschulungen</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
