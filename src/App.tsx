/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { ServiceEmergencySection } from './components/ServiceEmergencySection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TargetGroupsSection } from './components/TargetGroupsSection';
import { BrandsSection } from './components/BrandsSection';
import { LeasingSection } from './components/LeasingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [contactSubject, setContactSubject] = useState<string>('Allgemeine Beratung & Anfrage');
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const handleOpenContact = (subject?: string) => {
    if (subject) {
      setContactSubject(subject);
    }
    const contactElem = document.getElementById('kontakt');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('leistungen');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Trust Section ("Kompetenz. Service. Lösungen.") */}
        <TrustBar />

        {/* 3. 11 Leistungsbereiche Modern Cards & Details */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 4. Service- & Reparaturdienst ("Wenn Technik ausfällt...") */}
        <ServiceEmergencySection onOpenContact={handleOpenContact} />

        {/* 5. 4-Schritte Ablauf ("Alles aus einer Hand") */}
        <ProcessSection onOpenContact={handleOpenContact} />

        {/* 6. Über uns (Kay Weschenfelder, seit 1997) */}
        <AboutSection />

        {/* 7. Zielgruppen ("Lösungen für viele Bereiche") */}
        <TargetGroupsSection onOpenContact={handleOpenContact} />

        {/* 8. Marken & Partner */}
        <BrandsSection onOpenContact={handleOpenContact} />

        {/* 9. Leasing ("Professionelle Ausstattung – flexibel finanzieren") */}
        <LeasingSection onOpenContact={handleOpenContact} />

        {/* 10. Kontaktbereich mit Formularen, Karte & Öffnungszeiten */}
        <ContactSection
          initialSubject={contactSubject}
          onOpenPrivacy={() => setLegalModal('datenschutz')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModal(type)}
        onOpenContact={handleOpenContact}
      />

      {/* Legal Modals (Impressum & Datenschutz) */}
      <LegalModals
        activeModal={legalModal}
        onClose={() => setLegalModal(null)}
      />

      {/* Floating Quick Call Button for Mobile in Bento style */}
      <div className="fixed bottom-5 right-5 z-30 sm:hidden">
        <a
          id="floating-mobile-call-btn"
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white font-bold shadow-2xl border border-zinc-700"
          aria-label="Kundendienst anrufen"
        >
          <Phone className="w-4 h-4 text-blue-400" />
          <span className="text-xs">03647 46990</span>
        </a>
      </div>
    </div>
  );
}
