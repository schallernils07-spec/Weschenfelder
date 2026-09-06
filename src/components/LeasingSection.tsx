import React, { useState } from 'react';
import {
  Landmark,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Layers,
  Calculator,
  ShieldCheck,
  Check,
  Percent,
  Calendar,
  FileCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LeasingSectionProps {
  onOpenContact: (subject?: string, message?: string) => void;
}

const AVAILABLE_LEASING_ITEMS = [
  { id: 'combi', label: 'Kombidämpfer & Backöfen', desc: 'z. B. Retigo Blue Vision, Unox Cheftop' },
  { id: 'dish', label: 'Gewerbliche Spülmaschinen', desc: 'z. B. Smeg HTY615DS, Hauben- & Untertischspüler' },
  { id: 'cook', label: 'Thermische Kochtechnik & Herdanlagen', desc: 'z. B. Lotus L900 Kochblock, MKN, Gas & Elektro' },
  { id: 'cool', label: 'Kühltechnik & Kühltische', desc: 'Kühlschränke, Kühltische, Schockfroster & Kühltheken' },
  { id: 'coffee', label: 'Gewerbl. Kaffeemaschinen & Brühanlagen', desc: 'z. B. Bonamat, Animo & Vollautomaten' },
  { id: 'serving', label: 'Speiseausgabe- & Transportsysteme', desc: 'Warmhalte-, Ausgabe- & Bankettwagen (B.PRO, Rieber)' },
  { id: 'steel', label: 'Edelstahlmöbel & Sonderanfertigungen', desc: 'Arbeitstische, Spültische, Hängeschränke' },
  { id: 'water', label: 'Wasseraufbereitung & Enthärter', desc: 'Brita, Everpure Entkalkungs- & Filtersysteme' },
];

export const LeasingSection: React.FC<LeasingSectionProps> = ({ onOpenContact }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Kombidämpfer & Backöfen',
    'Gewerbliche Spülmaschinen',
  ]);
  const [duration, setDuration] = useState<number>(36);
  const [projectNote, setProjectNote] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const toggleItem = (label: string) => {
    if (selectedItems.includes(label)) {
      setSelectedItems(selectedItems.filter((i) => i !== label));
    } else {
      setSelectedItems([...selectedItems, label]);
    }
  };

  const handleApplyWishlist = () => {
    const subject = `Leasingangebot für ${selectedItems.length} Gerät(e) (${duration} Monate)`;
    const message = [
      'Guten Tag Herr Weschenfelder,',
      '',
      'ich interessiere mich für ein kostenloses Leasingangebot zu folgenden Gastrogeräten:',
      ...selectedItems.map((item) => ` • ${item}`),
      '',
      `Gewünschte Leasing-Laufzeit: ca. ${duration} Monate`,
      projectNote ? `Projekt-Notiz / Details: ${projectNote}` : '',
      '',
      'Bitte prüfen Sie die Möglichkeiten mit Ihrem Leasing-Partner und unterbreiten Sie mir ein unverbindliches Angebot.',
    ]
      .filter(Boolean)
      .join('\n');

    onOpenContact(subject, message);
  };

  const handleCopyOfferRequest = () => {
    const text = `Leasing-Anfrage Gastrotechnik Weschenfelder:\nGeräte:\n${selectedItems
      .map((i) => ` - ${i}`)
      .join('\n')}\nLaufzeit: ${duration} Monate\nDetails: ${projectNote || 'Nicht näher spezifiziert'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // The 7 authentic advantages from gastro-weschenfelder.de/Leasing/
  const officialBenefits = [
    {
      num: '01',
      title: 'Neugeräte-Anschaffung ohne Kapitaleinsatz',
      sub: 'Kein Eigenkapital nötig – Ihre Liquidität bleibt für das operative Gastronomie-Tagesgeschäft voll erhalten.',
      icon: <Landmark className="w-5 h-5 text-blue-400" />,
    },
    {
      num: '02',
      title: 'Feste, planbare Leasing-Rate',
      sub: 'Völlig unabhängig von Zinssteigerungen und verlässlich kalkulierbar über den gesamten Leasingzeitraum.',
      icon: <Percent className="w-5 h-5 text-emerald-400" />,
    },
    {
      num: '03',
      title: 'Laufzeit entspricht Nutzungsdauer',
      sub: 'Die vertragliche Leasing-Dauer entspricht im Regelfall der tatsächlichen wirtschaftlichen Einsatzzeit des Geräts.',
      icon: <Calendar className="w-5 h-5 text-indigo-400" />,
    },
    {
      num: '04',
      title: 'Voll steuerlich als Betriebsaufwand absetzbar',
      sub: 'Leasing-Zahlungen mindern als laufender Betriebsaufwand direkt und in voller Höhe das zu versteuernde Ergebnis.',
      icon: <FileCheck className="w-5 h-5 text-amber-400" />,
    },
    {
      num: '05',
      title: 'Bilanzneutral & keine Abschreibungsprobleme',
      sub: 'Das Leasinggut taucht nicht in Ihrer Bilanz auf – schont Eigenkapitalquote und Kreditlinien bei der Hausbank.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    },
    {
      num: '06',
      title: 'Keine Gewerbesteuern auf das Leasing-Objekt',
      sub: 'Auf das geleaste Gastronomie-Equipment fallen keine gesonderten gewerbesteuerlichen Belastungen an.',
      icon: <CheckCircle2 className="w-5 h-5 text-teal-400" />,
    },
    {
      num: '07',
      title: 'Kurzfristige Reaktion auf Marktverhältnisse',
      sub: 'Sie können zügig auf Gästezuwachs, neue Speisekarten oder Energieeffizienzstandards mit modernster Technik reagieren.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section id="leasing" className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Authentic Official Announcement Header Banner */}
        <div className="bg-[#18181b] rounded-3xl p-8 sm:p-12 text-white border border-zinc-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 bottom-0 opacity-10 pointer-events-none hidden lg:block">
            <Calculator className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NEU im Angebot • Gastrotechnik Weschenfelder</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Gastroküchengeräte und Einrichtungen – Erwerb auch über Leasing möglich!
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Sprechen Sie uns an! Wir klären alle technischen und finanziellen Details mit unserem Leasing-Partner für Sie ab.
              Stellen Sie einfach Ihre persönliche Wunschliste zusammen – wir erstellen Ihnen gern ein individuelles und kostenloses Angebot!
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Büro &amp; Kundendienst: {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#leasing-wunschliste"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 transition-colors"
              >
                <span>Wunschliste zusammenstellen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 7 Official Advantages Section (Warum Leasing eine clevere Alternative ist) */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 text-blue-600 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Ihre wirtschaftlichen Vorteile</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                Warum Leasing eine clevere Alternative ist
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
              Direkt aus der Praxis von Gastrotechnik Weschenfelder: Schonen Sie Ihr Eigenkapital und nutzen Sie modernste Großküchentechnik ab dem ersten Tag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {officialBenefits.slice(0, 6).map((benefit) => (
              <div
                key={benefit.num}
                className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-xs hover:border-zinc-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-md">
                    {benefit.num}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-zinc-900 mb-1 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {benefit.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* 7th Benefit (Wide Card) */}
            <div className="md:col-span-2 lg:col-span-3 bg-zinc-900 text-white rounded-2xl p-6 sm:p-7 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0 text-purple-300 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-purple-300 bg-purple-900/50 px-2 py-0.5 rounded border border-purple-500/30">
                      07
                    </span>
                    <h4 className="font-display text-base sm:text-lg font-bold text-white">
                      Kurzfristige Reaktionen auf veränderte Marktverhältnisse
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-2xl leading-relaxed">
                    Gastronomie-Konzepte entwickeln sich rasant. Mit flexiblen Leasing-Verträgen modernisieren Sie Ihren Gerätepark nach Bedarf, ohne Altgeräte mühsam abbezahlen oder abschreiben zu müssen.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyWishlist}
                className="shrink-0 px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Angebot anfragen
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Wunschliste & Kostenloses Angebot Generator */}
        <div id="leasing-wunschliste" className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-sm space-y-8 scroll-mt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Interaktiver Assistent</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
              Stellen Sie Ihre Wunschliste zusammen
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              Wählen Sie die gewünschten Gastrogeräte aus unserem Leistungsportfolio. Wir berechnen für Sie unverbindlich die optimalen Leasing-Konditionen mit unserem Partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {AVAILABLE_LEASING_ITEMS.map((item) => {
              const isSelected = selectedItems.includes(item.label);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleItem(item.label)}
                  className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between h-full ${
                    isSelected
                      ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
                      : 'bg-zinc-50/70 border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-bold text-xs sm:text-sm text-zinc-900 leading-tight">
                      {item.label}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-blue-600 text-white' : 'border border-zinc-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-500 line-clamp-2">
                    {item.desc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Configuration Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-zinc-100">
            {/* Preferred Duration */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>Gewünschte Leasing-Laufzeit</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[24, 36, 48, 60].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDuration(m)}
                    className={`py-2.5 text-xs font-bold rounded-xl border transition-all text-center ${
                      duration === m
                        ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    {m} Mon.
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400">
                Regellaufzeit für Gewerbegeräte: 36 bis 48 Monate.
              </p>
            </div>

            {/* Note / Specific Machine Details */}
            <div className="md:col-span-7 space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                <span>Notizen zu Geräten, Herstellerwünschen oder Betriebsgröße</span>
              </label>
              <input
                type="text"
                value={projectNote}
                onChange={(e) => setProjectNote(e.target.value)}
                placeholder="z. B. Neueröffnung Restaurant, ca. 80 Plätze, Kombidämpfer 10x GN 1/1"
                className="w-full px-4 py-2.5 text-xs bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-zinc-900"
              />
            </div>
          </div>

          {/* Summary and Direct Action */}
          <div className="p-6 rounded-2xl bg-zinc-900 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  Ihre Wunschliste ist bereit ({selectedItems.length} Gerätekategorie{selectedItems.length === 1 ? '' : 'n'} ausgewählt)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                Laufzeit: <strong className="text-white">{duration} Monate</strong> • Herstellerunabhängige Prüfung für Kombidämpfer, Spüler, Kühlung &amp; Herdanlagen.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <button
                type="button"
                onClick={handleCopyOfferRequest}
                className="px-4 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium border border-zinc-700 transition-colors"
              >
                {copied ? 'Wunschliste kopiert!' : 'Wunschliste kopieren'}
              </button>

              <button
                type="button"
                id="apply-wishlist-btn"
                onClick={handleApplyWishlist}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Kostenloses Angebot anfordern</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trust and Regional Note */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 pt-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Persönliche Betreuung &amp; Abwicklung durch Kay Weschenfelder in Pößneck</span>
            </div>
            <div>
              <span>Fragen vorab? Anruf genügt: </span>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-bold text-zinc-900 hover:text-blue-600 underline ml-1">
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
