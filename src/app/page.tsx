// app/page.tsx
"use client";

import React, { useState } from 'react'; // Importa useState
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, DollarSign, Lightbulb, FileText, Timer, LayoutDashboard, Briefcase, Download, BarChart2, Smartphone, Zap, Globe, Euro, TrendingUp, Menu, X } from 'lucide-react'; // Aggiungi Menu e X per le icone del toggle

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Stato per il menu mobile

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <header className="py-4 px-6 md:px-12 bg-blue-800 text-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-teal-400"
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Tickle</span>
          </Link>

          {/* Icona Hamburger/Close per Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>

          {/* Links per Desktop */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="#funzionalita" className="text-white hover:text-teal-300 transition-colors">Funzionalità</Link>
            <Link href="#pricing" className="text-white hover:text-teal-300 transition-colors">Prezzi</Link>
            <Button asChild className="bg-teal-400 hover:bg-teal-500 text-blue-900 rounded-full px-6 py-2">
              <Link href="#cta">Inizia Ora</Link>
            </Button>
          </div>
        </nav>

        {/* Menu Mobile a scomparsa */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-700 py-4 px-6 space-y-4 flex flex-col items-center">
            <Link href="#funzionalita" className="text-white hover:text-teal-300 transition-colors text-lg" onClick={() => setIsMobileMenuOpen(false)}>Funzionalità</Link>
            <Link href="#pricing" className="text-white hover:text-teal-300 transition-colors text-lg" onClick={() => setIsMobileMenuOpen(false)}>Prezzi</Link>
            <Button asChild className="bg-teal-400 hover:bg-teal-500 text-blue-900 rounded-full px-6 py-2 text-lg">
              <Link href="#cta" onClick={() => setIsMobileMenuOpen(false)}>Inizia Ora</Link>
            </Button>
          </div>
        )}
      </header>

      {/* Resto del tuo codice della pagina rimane invariato */}
      <section id="hero" className="relative bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20 md:py-32 overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="md:w-3/4 lg:w-2/3 mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-heading">
              Il tempo che tracci è fatturato che incassi. Ogni minuto conta.
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              <span className="text-teal-300 font-bold">Tickle</span> è la soluzione pensata per professionisti digitali che desiderano monitorare le ore lavorate, gestire progetti con precisione e generare report pronti per la fatturazione, in modo semplice e veloce
            </p>
            <Button asChild size="lg" className="bg-teal-400 hover:bg-teal-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              <a href="#cta">Inizia Ora Gratis</a>
            </Button>
            <div className="mt-5 text-sm opacity-80 flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-teal-300" />
              <span>Nessuna carta di credito richiesta. Prova senza impegno</span>
            </div>
          </div>
          <div className="mt-16 relative w-full max-w-4xl mx-auto animate-fade-in-up animate-delay-300">
            <div className="bg-blue-900 bg-opacity-70 rounded-lg shadow-2xl p-8 border border-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20 transform -rotate-45 scale-150"></div>
                <div className="relative z-10 text-center">
                    <p className="text-white text-xl md:text-2xl font-semibold mb-4">La tua dashboard di Tickle qui!</p>
                    <p className="text-gray-300 text-lg">Immagina uno screenshot pulito e moderno della dashboard di Tickle, o un mockup di un laptop/tablet con l&apos;interfaccia utente.</p>
                    <p className="text-gray-400 text-sm mt-4">Questo darà subito un&apos;idea chiara del tuo prodotto.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema-soluzione" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-12">
            Il Tuo Tempo è Denaro. Non Perderne Più.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Consulenti IT e freelance spesso sottostimano il tempo dedicato ai progetti, perdendo fino al <span className="font-extrabold text-red-600 text-2xl md:text-3xl animate-pulse">25%</span> del potenziale fatturato. Le soluzioni attuali sono complesse o eccessivamente costose. <span className="font-bold">Tickle</span> ti offre la semplicità e l&apos;efficienza per recuperare ogni minuto e massimizzare i tuoi guadagni.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div key="problem-card-1" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <DollarSign className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">Guadagni Inespressi</h3>
              <p className="text-gray-600 text-center">Recupera il fatturato perso a causa di ore non tracciate.</p>
            </div>
            <div key="problem-card-2" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">Complessità Eliminata</h3>
              <p className="text-gray-600 text-center">Dimentica software macchinosi, la semplicità è la nostra forza.</p>
            </div>
            <div key="problem-card-3" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FileText className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">Gestione Semplificata</h3>
              <p className="text-gray-600 text-center">Basta fogli di calcolo: tutto è organizzato e intuitivo.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="funzionalita" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-12">
            Le Funzionalità Essenziali per il Tuo Successo.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Timer className="w-10 h-10 text-blue-600" />}
              title="Timer One-Click Intuitivo"
              description="Avvia e ferma il timer con un solo click. Passa da un progetto all&apos;altro con massima rapidità e precisione."
            />
            <FeatureCard
              icon={<LayoutDashboard className="w-10 h-10 text-blue-600" />}
              title="Dashboard Chiara e Completa"
              description="Visualizza immediatamente le ore lavorate e i guadagni stimati per giorno, settimana e mese."
            />
            <FeatureCard
              icon={<Briefcase className="w-10 h-10 text-blue-600" />}
              title="Gestione Progetti Illimitata"
              description="Organizza ogni lavoro per cliente e progetto, con la possibilità di impostare tariffe orarie personalizzate."
            />
            <FeatureCard
              icon={<Download className="w-10 h-10 text-blue-600" />}
              title="Export per Fatturazione Semplice"
              description="Genera report dettagliati in formato PDF o CSV, pronti per la fatturazione e la condivisione con il tuo commercialista."
            />
            <FeatureCard
              icon={<BarChart2 className="w-10 h-10 text-blue-600" />}
              title="Report Intelligenti per l&apos;Analisi"
              description="Analizza la tua produttività con report chiari, scopri dove ottimizzare il tuo tempo e prendi decisioni basate sui dati."
            />
            <FeatureCard
              icon={<Smartphone className="w-10 h-10 text-blue-600" />}
              title="Accesso Mobile-Friendly"
              description="Traccia il tempo ovunque tu sia, dal tuo smartphone, tablet o desktop. Massima flessibilità per il tuo lavoro."
            />
          </div>
        </div>
      </section>

      <section id="differenziatori" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-12">
            Perché Scegliere Tickle: I Nostri Punti di Forza.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Tickle è il time tracker che si adatta perfettamente alle tue esigenze, offrendo un&apos;esperienza d&apos;uso superiore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DifferentiatorCard
              icon={<Zap className="w-10 h-10 text-teal-600" />}
              title="Setup in 30 Secondi: Subito Operativo"
              description="Registrati, crea il tuo primo progetto e avvia il timer. Inizia a tracciare in un lampo, senza configurazioni complesse o manuali infiniti."
            />
            <DifferentiatorCard
              icon={<Globe className="w-10 h-10 text-teal-600" />}
              title="Interfaccia Completamente in Italiano"
              description="Progettato da italiani, per professionisti italiani. Un&apos;interfaccia chiara, intuitiva e senza barriere linguistiche."
            />
            <DifferentiatorCard
              icon={<Euro className="w-10 h-10 text-teal-600" />}
              title="Pricing Trasparente e Conveniente"
              description="Piani chiari, senza costi nascosti o funzionalità &quot;freemium&quot; che ti confondono. Sai sempre quanto spendi, con la massima onestà."
            />
            <DifferentiatorCard
              icon={<CodeIcon className="w-10 h-10 text-teal-600" />}
              title="Focus Specifico sul Settore IT"
              description="Template e categorie predefinite pensati per lo sviluppo software, la consulenza IT e le tue esigenze professionali specifiche."
            />
            <DifferentiatorCard
              icon={<FileText className="w-10 h-10 text-teal-600" />}
              title="Export per Contabilità Italiana"
              description="Report strutturati in formati compatibili con le esigenze dei commercialisti italiani, per una gestione fiscale senza pensieri."
            />
            <DifferentiatorCard
              icon={<TrendingUp className="w-10 h-10 text-teal-600" />}
              title="Massimizza il Tuo Valore Professionale"
              description="Trasforma il tempo non tracciato in fatturato aggiuntivo. Guadagna di più con meno sforzo amministrativo e maggiore precisione."
            />
          </div>
        </div>
      </section>

      {/* SEZIONE TESTIMONIALS RIMOSSA */}

      <section id="pricing" className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12">
            Scegli il Piano Perfetto per Te.
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Inizia con il piano gratuito e passa al Premium quando sei pronto a massimizzare i tuoi guadagni.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"> {/* Modificato a 2 colonne */}
            <PricingCard
              title="Free Plan"
              price="€0"
              frequency="/mese"
              features={[
                "Fino a 3 progetti attivi",
                "Report giornalieri semplici",
              ]}
              buttonText="Inizia Gratis"
              isPrimary={false}
            />
            <PricingCard
              title="Premium Plan"
              price="€15"
              frequency="/mese"
              features={[
                "Progetti illimitati",
                "Report avanzati e personalizzabili",
                "Export PDF e CSV",
                "Supporto via email",
              ]}
              buttonText="Passa a Premium"
              isPrimary={true}
            />
            {/* Rimosso il Team Plan per focalizzarsi su Free/Premium come richiesto */}
          </div>
          <p className="mt-12 text-sm opacity-80">Senza impegno, passa al piano Premium quando desideri funzionalità aggiuntive.</p>
        </div>
      </section>

      <section id="cta" className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight font-heading">
            Non Aspettare. <span className="text-teal-300">Inizia a Tracciare il Tuo Successo Oggi.</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Recupera tempo prezioso e massimizza i tuoi guadagni con il time tracker più semplice per professionisti IT.
          </p>
          <Button asChild
            size="lg"
            className="bg-teal-400 hover:bg-teal-500 text-blue-900 font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="#">Registrati Ora e Prova Gratis</a>
          </Button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Tickle. Tutti i diritti riservati.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Termini di Servizio</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

interface DifferentiatorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DifferentiatorCard: React.FC<DifferentiatorCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const CodeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);


interface PricingCardProps {
  title: string;
  price: string;
  frequency: string;
  features: string[];
  buttonText: string;
  isPrimary: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, frequency, features, buttonText, isPrimary }) => {
  return (
    <Card className={`flex flex-col p-8 rounded-lg shadow-xl ${isPrimary ? 'bg-white text-blue-800 border-4 border-teal-400' : 'bg-blue-800 text-white border-2 border-blue-700'}`}>
      <CardHeader className="pb-4 text-center">
        <CardTitle className={`text-3xl font-bold mb-2 font-heading ${isPrimary ? 'text-blue-800' : 'text-white'}`}>{title}</CardTitle>
        <CardDescription className={`text-5xl font-extrabold font-heading ${isPrimary ? 'text-blue-800' : 'text-teal-400'}`}>
          {price}<span className="text-xl font-normal">{frequency}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <ul className="space-y-3 text-lg">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className={`w-6 h-6 mr-3 ${isPrimary ? 'text-teal-500' : 'text-teal-400'}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-8">
        <Button
          size="lg"
          className={`w-full font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
            isPrimary
              ? 'bg-teal-400 hover:bg-teal-500 text-blue-900'
              : 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-500'
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};