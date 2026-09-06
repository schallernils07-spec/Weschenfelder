import React, { useState } from 'react';
import {
  Utensils,
  Coffee,
  Flame,
  ShoppingBag,
  Truck,
  GraduationCap,
  HeartPulse,
  Building2,
  ArrowUpRight,
} from 'lucide-react';
import { TARGET_GROUPS } from '../data/companyData';

interface TargetGroupsProps {
  onOpenContact: (subject?: string) => void;
}

export const TargetGroupsSection: React.FC<TargetGroupsProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    Utensils: <Utensils className="w-5 h-5 text-blue-600" />,
    Coffee: <Coffee className="w-5 h-5 text-blue-600" />,
    Flame: <Flame className="w-5 h-5 text-blue-600" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-blue-600" />,
    Truck: <Truck className="w-5 h-5 text-blue-600" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-blue-600" />,
    Building2: <Building2 className="w-5 h-5 text-blue-600" />,
  };

  const categories = [
    { key: 'all', label: 'Alle Branchen' },
    { key: 'Gastronomie', label: 'Gastronomie & Bar' },
    { key: 'Handwerk', label: 'Bäckerei & Fleischerei' },
    { key: 'Gemeinschaftsverpflegung', label: 'Kantinen & Schulen' },
    { key: 'Care & Pflege', label: 'Klinik & Pflege' },
    { key: 'Gewerbe', label: 'Gewerbebetriebe' },
  ];

  const filteredGroups = activeCategory === 'all'
    ? TARGET_GROUPS
    : TARGET_GROUPS.filter((g) => g.category === activeCategory || (activeCategory === 'Gastronomie' && (g.category === 'Gastronomie' || g.category === 'Events & Außer-Haus')));

  return (
    <section id="zielgruppen" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Header Tile */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-zinc-200 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                Branchenübergreifende Kompetenz
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              Lösungen für viele Bereiche
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md leading-relaxed">
            Ganz gleich ob Restaurant, Schulkantine oder Seniorenresidenz – wir kennen die
            spezifischen Arbeitsabläufe, Hygieneauflagen und Gerätestandards Ihrer Branche.
          </p>
        </div>

        {/* Filter Pills in Bento style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.key
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => onOpenContact(`Anfrage für Branche: ${group.name}`)}
              className="group cursor-pointer p-6 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 group-hover:border-blue-400 flex items-center justify-center transition-colors">
                    {iconMap[group.icon]}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full">
                    {group.category}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mb-2">
                  {group.name}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-blue-600">
                <span>Beratung für diesen Bereich</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
