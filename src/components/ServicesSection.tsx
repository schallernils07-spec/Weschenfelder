import React, { useState } from 'react';
import {
  Flame,
  UtensilsCrossed,
  Sparkles,
  Snowflake,
  ShieldCheck,
  Coffee,
  Truck,
  Droplets,
  Cog,
  PackageCheck,
  Wrench,
  ArrowRight,
  Info,
  Search,
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/companyData';
import { ServiceCategory } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cooking' | 'wash-cool' | 'equipment' | 'service'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<ServiceCategory | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Flame: <Flame className="w-5 h-5 text-blue-600" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-blue-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-blue-600" />,
    Snowflake: <Snowflake className="w-5 h-5 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    Coffee: <Coffee className="w-5 h-5 text-blue-600" />,
    Truck: <Truck className="w-5 h-5 text-blue-600" />,
    Droplets: <Droplets className="w-5 h-5 text-blue-600" />,
    Cog: <Cog className="w-5 h-5 text-blue-600" />,
    PackageCheck: <PackageCheck className="w-5 h-5 text-blue-600" />,
    Wrench: <Wrench className="w-5 h-5 text-blue-600" />,
  };

  const filteredServices = SERVICE_CATEGORIES.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.features && item.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="leistungen" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Header Tile */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-zinc-200 mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                  Umfassendes Leistungsspektrum
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                Unsere Fachbereiche
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-500 max-w-xl">
                Wir decken das gesamte Spektrum professioneller Küchentechnik ab – modern, effizient und langlebig.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Gerät oder Leistung suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 placeholder-zinc-400"
              />
            </div>
          </div>

          {/* Filter Pills in Bento style */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
            <button
              id="filter-all"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Alle 11 Fachbereiche
            </button>
            <button
              id="filter-cooking"
              onClick={() => setSelectedFilter('cooking')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'cooking'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Kochtechnik &amp; Kombidämpfer
            </button>
            <button
              id="filter-wash-cool"
              onClick={() => setSelectedFilter('wash-cool')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'wash-cool'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Spül-, Kühl- &amp; Wassertechnik
            </button>
            <button
              id="filter-equipment"
              onClick={() => setSelectedFilter('equipment')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'equipment'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Edelstahl &amp; Transport
            </button>
            <button
              id="filter-service"
              onClick={() => setSelectedFilter('service')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'service'
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Ersatzteile &amp; Kaffeevollautomaten
            </button>
          </div>
        </div>

        {/* 11 Service Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with Uncropped Equipment Stage */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-950 flex items-center justify-center p-4">
                  {/* Ambient Backdrop */}
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-110 pointer-events-none"
                  />

                  {/* Fully Visible Uncropped Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-10 max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Bento Number Tag */}
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="w-8 h-8 rounded-lg bg-zinc-900/90 backdrop-blur-xs text-white border border-white/20 text-xs font-mono font-bold flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors shadow-xs">
                      {service.number}
                    </span>
                  </div>

                  {/* Image Source / Model Tag */}
                  {service.imageLabel && (
                    <div className="absolute bottom-3 right-3 max-w-[75%] z-20">
                      <span className="px-2.5 py-1 rounded-md bg-zinc-900/90 backdrop-blur-xs text-white border border-white/20 text-[10px] font-medium flex items-center gap-1.5 truncate shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                        <span className="truncate">{service.imageLabel}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block mb-1">
                      Bereich {service.number}
                    </span>
                    <h3 className="font-display text-xl font-bold text-zinc-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 text-blue-600">
                      {iconMap[service.icon]}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 pt-3 border-t border-zinc-100">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="text-xs text-zinc-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-zinc-100 flex items-center justify-between gap-3">
                <button
                  id={`btn-details-${service.id}`}
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Details</span>
                </button>

                <button
                  id={`btn-inquire-${service.id}`}
                  onClick={() => onOpenContact(`Anfrage zu: ${service.title}`)}
                  className="px-4 py-2 text-xs font-bold rounded-full bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-800 transition-colors flex items-center gap-1.5 border border-zinc-200"
                >
                  <span>Anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bento Banner */}
        <div className="mt-10 p-7 rounded-3xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Sondergeräte &amp; Zubehör
              </span>
            </div>
            <h4 className="font-display text-base sm:text-lg font-bold text-zinc-900">
              Sie suchen ein spezielles Gerät oder Zubehörteil?
            </h4>
            <p className="text-xs text-zinc-500 mt-0.5">
              Wir beschaffen und montieren Sonderausstattungen und führen herstellerübergreifende Ersatzteile.
            </p>
          </div>
          <button
            id="btn-custom-inquiry"
            onClick={() => onOpenContact('Spezifische Geräteanfrage / Zubehör')}
            className="shrink-0 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            Sonderanfrage stellen
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <ServiceDetailModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onInquire={onOpenContact}
        />
      )}
    </section>
  );
};
