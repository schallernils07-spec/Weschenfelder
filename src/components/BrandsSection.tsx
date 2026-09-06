import React, { useState } from 'react';
import { Shield, Search, CheckCircle } from 'lucide-react';
import { BRANDS } from '../data/companyData';

interface BrandsSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onOpenContact }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Alle Hersteller' },
    { key: 'thermal', label: 'Thermische Technik & Öfen' },
    { key: 'wash', label: 'Spültechnik & Armaturen' },
    { key: 'cool', label: 'Kühl- & Tiefkühltechnik' },
    { key: 'coffee-water', label: 'Kaffee & Wassertechnik' },
    { key: 'furniture-prep', label: 'Edelstahlmöbel & Vorbereitung' },
  ];

  const filteredBrands = BRANDS.filter((b) => {
    const matchesCategory = activeCategory === 'all' || b.category === activeCategory;
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="marken" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Header Tile */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-zinc-200 mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                  Herstellerübergreifend
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                Starke Marken für professionelle Lösungen
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-500 max-w-xl leading-relaxed">
                Wir führen, montieren und servicieren Originalgeräte und Ersatzteile aller führenden
                Hersteller der Großküchen- und Gastronomietechnik.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Hersteller suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 placeholder-zinc-400"
              />
            </div>
          </div>

          {/* Filter Pills in Bento style */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                  activeCategory === cat.key
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Bento Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredBrands.map((brand) => (
            <button
              key={brand.name}
              onClick={() => onOpenContact(`Anfrage zu Geräten/Ersatzteilen von ${brand.name}`)}
              className="p-4 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all text-center group flex flex-col items-center justify-center min-h-[84px]"
            >
              <span className="font-display font-bold text-sm text-zinc-800 group-hover:text-blue-600 transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider font-medium group-hover:text-zinc-600">
                Verkauf &amp; Service
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Bento Note Tile */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-zinc-200 text-center text-xs text-zinc-600 flex flex-col sm:flex-row items-center justify-center gap-2 shadow-2xs">
          <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            Ihr gewünschter Hersteller ist nicht aufgeführt? Sprechen Sie uns an – wir beschaffen und reparieren Geräte weiterer Fabrikate.
          </span>
        </div>

      </div>
    </section>
  );
};
