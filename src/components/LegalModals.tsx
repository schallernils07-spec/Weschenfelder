import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LegalModalsProps {
  activeModal: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden max-h-[88vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 bg-[#1a1a1a] text-white flex items-center justify-between shrink-0 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            {activeModal === 'impressum' ? (
              <FileText className="w-5 h-5 text-blue-400" />
            ) : (
              <Shield className="w-5 h-5 text-blue-400" />
            )}
            <h3 className="font-display text-lg font-bold">
              {activeModal === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-zinc-600 text-xs sm:text-sm leading-relaxed space-y-6">
          {activeModal === 'impressum' ? (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">Angaben gemäß § 5 TMG</h4>
                <p>
                  <strong>{COMPANY_INFO.name}</strong><br />
                  Inhaber: {COMPANY_INFO.owner}<br />
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">Kontakt</h4>
                <p>
                  Telefon: {COMPANY_INFO.phone}<br />
                  E-Mail: {COMPANY_INFO.email}<br />
                  Website: {COMPANY_INFO.website}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">Berufsbezeichnung &amp; Tätigkeitsfeld</h4>
                <p>
                  Gastronomie- und Großküchentechnik (Beratung, Planung, Verkauf, Montage, Reparatur und Wartung gewerblicher Küchentechnik).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">Haftung für Inhalte</h4>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">Haftung für Links</h4>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">Urheberrecht</h4>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">1. Datenschutz auf einen Blick</h4>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung und Verarbeitung personenbezogener Daten bei Nutzung dieser Website.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">2. Verantwortliche Stelle</h4>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):<br />
                  <strong>{COMPANY_INFO.name}</strong><br />
                  Inhaber: {COMPANY_INFO.owner}<br />
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}<br />
                  Telefon: {COMPANY_INFO.phone}<br />
                  E-Mail: {COMPANY_INFO.email}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">3. Datenerfassung bei Kontaktaufnahme</h4>
                <p>
                  Wenn Sie uns per Kontaktformular, E-Mail oder Telefon Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter (Art. 6 Abs. 1 lit. b DSGVO).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">4. Ihre Rechte als betroffene Person</h4>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-2">5. Hosting &amp; Server-Log-Dateien</h4>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage).
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-50 border-t border-zinc-100 text-right shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
