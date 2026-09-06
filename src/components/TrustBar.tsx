import React from 'react';
import { Award, Users, Wrench, Layers } from 'lucide-react';
import { TRUST_POINTS } from '../data/companyData';

export const TrustBar: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-5 h-5 text-blue-600" />,
    Users: <Users className="w-5 h-5 text-blue-600" />,
    Wrench: <Wrench className="w-5 h-5 text-blue-600" />,
    Layers: <Layers className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section className="bg-[#f8f9fa] py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xs border border-zinc-200 p-6 sm:p-8 lg:p-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-100 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                  Kompetenz • Service • Lösungen
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                Zuverlässige Küchentechnik für anspruchsvolle Profis
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md leading-relaxed">
              Gastrotechnik Weschenfelder unterstützt Gastronomie- und Gewerbebetriebe bei Planung,
              Ausstattung, Wartung und Reparatur professioneller Großküchen.
            </p>
          </div>

          {/* 4 Bento Advantage Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_POINTS.map((point, idx) => (
              <div
                key={point.title}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-center">
                      {iconMap[point.icon]}
                    </div>
                    <span className="text-xs font-bold text-zinc-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-zinc-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
