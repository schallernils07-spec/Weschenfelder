import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Compass, Truck, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

interface ProcessSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <MessageSquare className="w-5 h-5 text-blue-600" />,
    '02': <Compass className="w-5 h-5 text-blue-600" />,
    '03': <Truck className="w-5 h-5 text-blue-600" />,
    '04': <ShieldCheck className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section id="ablauf" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Header Tile */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-zinc-200 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                Ganzheitlicher Ablauf
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              Alles aus einer Hand – Schritt für Schritt
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md leading-relaxed">
            Wir begleiten Gastronomie- und Großküchenprojekte von der ersten Bedarfsanalyse bis zur langfristigen Wartung.
          </p>
        </div>

        {/* 4 Bento Process Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-zinc-200 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all duration-200 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 shadow-2xs flex items-center justify-center group-hover:border-blue-500 transition-colors">
                    {iconMap[step.step]}
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-zinc-300 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-zinc-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-2">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bento CTA */}
        <div className="mt-8 text-center">
          <button
            id="process-start-consulting-btn"
            onClick={() => onOpenContact('Neues Projekt / Schritt 01 Beratung')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow transition-all group"
          >
            <span>Projekt anfragen &amp; mit Schritt 01 starten</span>
            <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
