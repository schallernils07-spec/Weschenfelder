import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceDetailModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header with Uncropped Equipment Stage */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-zinc-950 flex items-center justify-center p-6 shrink-0 border-b border-zinc-800">
          {/* Ambient Backdrop */}
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110 pointer-events-none"
          />

          {/* Full Uncropped Equipment Image */}
          <img
            src={service.image}
            alt={service.title}
            className="relative z-10 max-h-full max-w-full object-contain drop-shadow-xl"
          />

          <button
            id="close-service-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors focus:outline-none border border-white/20"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Number & Model Label floating at bottom */}
          <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-20 pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-white/20 text-[11px] font-bold text-blue-400 uppercase tracking-wider">
              Leistungsbereich {service.number}
            </span>
            {service.imageLabel && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-white/20 text-[11px] font-medium text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{service.imageLabel}</span>
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight">
              {service.title}
            </h3>
          </div>

          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
            {service.fullDesc}
          </p>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Leistungsumfang &amp; Produktspektrum
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {service.brands && service.brands.length > 0 && (
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Partner &amp; Fabrikate (Auszug)</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {service.brands.map((brand, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold bg-white text-zinc-700 border border-zinc-200 rounded-full shadow-2xs"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-zinc-50 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Zurück zur Übersicht
          </button>
          
          <button
            id={`modal-inquire-${service.id}`}
            onClick={() => {
              onClose();
              onInquire(`Anfrage zu: ${service.title}`);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider shadow transition-all"
          >
            <span>Beratung zu {service.title} anfragen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
