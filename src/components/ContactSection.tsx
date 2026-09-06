import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Navigation,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Copy,
  Building,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialSubject?: string;
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSubject = '',
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: initialSubject || 'Beratungsanfrage Gastronomietechnik',
    message: '',
    consent: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [mapMode, setMapMode] = useState<'satellite' | 'interactive'>('satellite');

  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Bitte geben Sie Ihren Namen an.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse an.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Bitte geben Sie eine kurze Beschreibung Ihres Anliegens ein.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    const mailSubject = encodeURIComponent(`[Anfrage Website] ${formData.subject} - ${formData.company || formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Unternehmen: ${formData.company || '-'}\n` +
      `Telefon: ${formData.phone || '-'}\n` +
      `E-Mail: ${formData.email}\n` +
      `Anliegen: ${formData.subject}\n\n` +
      `Nachricht:\n${formData.message}\n`
    );

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
    setFormSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = 
      `Name: ${formData.name}\n` +
      `Unternehmen: ${formData.company || '-'}\n` +
      `Telefon: ${formData.phone || '-'}\n` +
      `E-Mail: ${formData.email}\n` +
      `Anliegen: ${formData.subject}\n\n` +
      `Nachricht:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="kontakt" className="py-14 sm:py-20 bg-[#f8f9fa] border-b border-zinc-200 scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Header Tile */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-zinc-200 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                Persönlicher Kundenservice &amp; Beratung
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
              Sie planen eine neue Küche oder benötigen Service?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md leading-relaxed">
            Wir beraten Sie gerne persönlich und finden gemeinsam die passende Lösung für Ihren Betrieb in Pößneck und Umgebung.
          </p>
        </div>

        {/* 3 Bento Quick Action Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <a
            id="quick-action-call"
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="p-6 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 group-hover:border-blue-500 text-blue-600 flex items-center justify-center shrink-0 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                Telefonisch
              </span>
              <span className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                Jetzt anrufen
              </span>
              <span className="text-xs text-zinc-500 block mt-0.5">{COMPANY_INFO.phone}</span>
            </div>
          </a>

          <a
            id="quick-action-mail"
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-6 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 group-hover:border-blue-500 text-blue-600 flex items-center justify-center shrink-0 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                E-Mail Service
              </span>
              <span className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                E-Mail schreiben
              </span>
              <span className="text-xs text-zinc-500 block mt-0.5 truncate">{COMPANY_INFO.email}</span>
            </div>
          </a>

          <a
            id="quick-action-maps"
            href={COMPANY_INFO.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 group-hover:border-blue-500 text-blue-600 flex items-center justify-center shrink-0 transition-colors">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                Standort Pößneck
              </span>
              <span className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                Route planen
              </span>
              <span className="text-xs text-zinc-500 block mt-0.5">{COMPANY_INFO.address.full}</span>
            </div>
          </a>
        </div>

        {/* 2-Column Bento Section */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Bento Column (col-span-5): Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Info Tile */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-xs space-y-6 flex-1">
              <h3 className="font-display text-lg font-bold text-zinc-900 border-b border-zinc-100 pb-4">
                Kontaktdaten &amp; Öffnungszeiten
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-50 border border-zinc-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-zinc-900 font-semibold">{COMPANY_INFO.name}</strong>
                    <span>Inhaber: {COMPANY_INFO.owner}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-50 border border-zinc-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-zinc-900 font-semibold">Adresse</strong>
                    <span>{COMPANY_INFO.address.street}</span><br />
                    <span>{COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-50 border border-zinc-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-zinc-900 font-semibold">Telefon</strong>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-blue-600 hover:text-blue-700 font-bold"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-zinc-50 border border-zinc-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-zinc-900 font-semibold">E-Mail</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-zinc-100">
                  <div className="w-8 h-8 rounded-xl bg-zinc-50 border border-zinc-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-zinc-900 font-semibold">Öffnungszeiten Büro</strong>
                    <span>{COMPANY_INFO.hours.office}</span>
                    <strong className="block text-zinc-900 font-semibold pt-1.5">Kundendienst</strong>
                    <span>{COMPANY_INFO.hours.service}</span>
                    <p className="text-[11px] text-zinc-400 italic pt-0.5">
                      {COMPANY_INFO.hours.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Tile with Google Maps Aerial Photo Switcher */}
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-zinc-100 p-0.5 rounded-lg border border-zinc-200">
                  <button
                    type="button"
                    onClick={() => setMapMode('satellite')}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                      mapMode === 'satellite'
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Satellit (Luftbild)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapMode('interactive')}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                      mapMode === 'interactive'
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Karte
                  </button>
                </div>

                <a
                  href={COMPANY_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 group">
                {mapMode === 'satellite' ? (
                  <div className="relative w-full h-full">
                    <img
                      src="/images/standort_satellit_hd.jpg"
                      alt="Google Maps Satellitenaufnahme: Malmsgelänge 13, 07381 Pößneck"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Location Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white shadow-md"></span>
                      </div>
                      <span className="mt-1 px-2 py-0.5 bg-black/80 backdrop-blur-xs text-[10px] font-bold text-white rounded border border-white/20 whitespace-nowrap shadow-md">
                        Malmsgelänge 13
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300">
                      <span className="truncate">Gastrotechnik Weschenfelder</span>
                      <a
                        href={COMPANY_INFO.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 font-semibold hover:underline flex items-center gap-0.5 shrink-0 ml-2"
                      >
                        <span>Route</span>
                        <Navigation className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <iframe
                    title="Standort Gastrotechnik Weschenfelder"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0 filter contrast-105"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.5800%2C50.6850%2C11.6100%2C50.6960&amp;layer=mapnik&amp;marker=50.6908%2C11.5947"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Bento Column: Form Card (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900">
                  Nachricht oder Terminanfrage senden
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                  Teilen Sie uns Ihr Anliegen mit. Wir melden uns während unserer Bürozeiten umgehend bei Ihnen zurück.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-4 animate-in fade-in">
                  <div className="flex items-start gap-3 text-blue-900">
                    <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-base text-zinc-900">
                        E-Mail-Übertragung vorbereitet!
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-700 mt-1 leading-relaxed">
                        Ihr Standard-Mailprogramm wurde geöffnet, um die Anfrage direkt an{' '}
                        <strong className="text-zinc-900">{COMPANY_INFO.email}</strong> zu senden.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-zinc-200 text-xs text-zinc-700 space-y-2">
                    <div className="font-semibold text-zinc-800">Ihre zusammengefassten Angaben:</div>
                    <div className="text-zinc-600 whitespace-pre-line bg-zinc-50 p-3 rounded-lg border border-zinc-100 font-mono text-[11px]">
                      {`Name: ${formData.name}\nUnternehmen: ${formData.company || '-'}\nTelefon: ${formData.phone || '-'}\nAnliegen: ${formData.subject}\nNachricht: ${formData.message}`}
                    </div>
                    <button
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 pt-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'In Zwischenablage kopiert!' : 'Text in Zwischenablage kopieren'}</span>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 underline"
                    >
                      Weitere Anfrage stellen oder Eingaben anpassen
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Ihr Name / Ansprechpartner *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="z. B. Max Mustermann"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-zinc-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Unternehmen / Betrieb
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="z. B. Gasthof Zur Linde"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-zinc-900"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@betrieb.de"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-zinc-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Telefonnummer (für Rückfragen)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03647 ..."
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-zinc-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Ihr Anliegen *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-zinc-900"
                    >
                      <option value="Beratung Neugeräte & Küchenplanung">Beratung Neugeräte &amp; Küchenplanung</option>
                      <option value="Reparatur / Kundendienst (dringend)">Reparatur / Kundendienst (dringend)</option>
                      <option value="Wartung & Prüfung gewerblicher Geräte">Wartung &amp; Prüfung gewerblicher Geräte</option>
                      <option value="Reparaturannahme Kaffeevollautomat">Reparaturannahme Kaffeevollautomat</option>
                      <option value="Ersatzteile & Zubehör anfragen">Ersatzteile &amp; Zubehör anfragen</option>
                      <option value="Leasing & Finanzierung anfragen">Leasing &amp; Finanzierung anfragen</option>
                      <option value="Sonstiges Anliegen">Sonstiges Anliegen</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie kurz Ihr Projekt, das benötigte Gerät oder das Problem..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-zinc-900"
                    />
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-[11px] text-zinc-500 leading-normal">
                        Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Beantwortung meiner Anfrage verarbeitet werden. Weitere Hinweise in der{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacy}
                          className="text-blue-600 underline font-medium hover:text-blue-800"
                        >
                          Datenschutzerklärung
                        </button>
                        . *
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Anfrage senden</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
