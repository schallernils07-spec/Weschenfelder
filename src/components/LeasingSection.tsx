import React from 'react';
import { Landmark, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface LeasingSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const LeasingSection: React.FC<LeasingSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="leasing" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Dark Bento Tile (col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#1a1a1a] text-white p-8 sm:p-12 border border-zinc-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-blue-400 text-xs font-semibold">
                <Landmark className="w-3.5 h-3.5" />
                <span>Liquidität &amp; Planungssicherheit für Betriebe</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Professionelle Ausstattung – flexibel finanzieren
              </h2>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Ob Neuanschaffung einer kompletten Herdanlage, Austausch von Spülmaschinen oder Modernisierung
                Ihrer Kühltechnik: Professionelle Gastronomietechnik kann auch über bedarfsgerechte
                Leasing- und Finanzierungslösungen realisiert werden.
              </p>

              {/* Exact requested key quote in Bento pill card */}
              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs sm:text-sm font-medium">
                „Sie möchten Ihre Investition flexibel gestalten? Sprechen Sie uns auf mögliche Leasinglösungen an.“
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Schonung der Eigenliquidität &amp; Kreditlinien</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Feste, planbare Monatsraten für Ihren Betrieb</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Moderne, energieeffiziente Technik sofort im Einsatz</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Möglichkeit von Service- &amp; Wartungsoptionen</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                id="leasing-inquiry-btn"
                onClick={() => onOpenContact('Anfrage zu Leasing & Finanzierung')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs uppercase tracking-wider shadow-lg transition-all group"
              >
                <span>Leasing anfragen</span>
                <ArrowRight className="w-4 h-4 text-zinc-900 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Bento Tile: Advantages (col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 border-b border-zinc-100 pb-5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-blue-600 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-zinc-900 font-display">Vorteile auf einen Blick</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">B2B Gastronomie-Finanzierung</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-zinc-600">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <strong className="text-zinc-900 block mb-1 font-bold">Herstellerunabhängig</strong>
                  Für nahezu alle Geräte aus unserem Sortiment (Kombidämpfer, Spüler, Kühlung etc.) prüfbar.
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <strong className="text-zinc-900 block mb-1 font-bold">Bilanz- &amp; Steueroptimiert</strong>
                  Leasingraten können betriebswirtschaftlich in der Regel direkt als Betriebsausgaben geltend gemacht werden.
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <strong className="text-zinc-900 block mb-1 font-bold">Persönliche Beratung</strong>
                  Wir stimmen die technische Ausstattung direkt mit Ihnen ab und vermitteln auf Wunsch den passenden Finanzierungskontakt.
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 text-center text-xs text-zinc-400">
              Gastrotechnik Weschenfelder • Ihr Partner in Pößneck
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
