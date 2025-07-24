"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Menu, X, CheckCircle, Timer, LayoutDashboard, Briefcase, Download, BarChart2, Smartphone, Zap, Euro, TrendingUp, Lightbulb, FileText, DollarSign, Globe
} from 'lucide-react';
export default function Home() {
  const currentYear = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-[100dvh] bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 font-sans antialiased overflow-x-hidden pt-[44px] md:pt-[56px]">
      {/* Header & Navigation */}
      <header className="py-2 md:py-3 px-2 md:px-10 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 text-white shadow-2xl fixed top-0 left-0 w-full z-50 rounded-none border-none animate-fade-in-down animate-duration-700 animate-ease-out">
        <nav className="container mx-auto max-w-7xl flex justify-between items-center" aria-label="Main navigation">
          <Link href="/" className="flex items-center space-x-2 text-2xl md:text-3xl font-extrabold text-white tracking-tight group" aria-label="Homepage">
            <span className="flex items-center animate-fade-in animate-duration-700 animate-delay-200">
              <Image src="/logo-tickle.svg" alt="Logo Tickle" width={32} height={32} style={{ marginTop: '0px', display: 'block' }} priority />
            </span>
            <span className="flex items-center text-[1.7rem] md:text-3xl leading-none animate-fade-in animate-duration-700 animate-delay-300">Tickle</span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2 rounded-md focus:ring-2 focus:ring-teal-300"
              aria-label={isMobileMenuOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" aria-hidden="true" /> : <Menu className="h-8 w-8" aria-hidden="true" />}
            </button>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="#funzionalita" className="text-white hover:text-teal-300 transition-colors font-semibold px-2.5 py-1.5 rounded-md text-[1rem] animate-fade-in animate-delay-200">Funzionalità</Link>
            <Link href="#pricing" className="text-white hover:text-teal-300 transition-colors font-semibold px-2.5 py-1.5 rounded-md text-[1rem] animate-fade-in animate-delay-300">Prezzi</Link>
            <span className="h-6 w-px bg-white/40 mx-2 animate-fade-in animate-delay-400" aria-hidden="true"></span>
            <Link href="/login" className="text-white hover:text-teal-300 transition-colors font-semibold px-2.5 py-1.5 rounded-md text-[1rem] animate-fade-in animate-delay-400">Accedi</Link>
            <Button asChild className="bg-teal-400 hover:bg-teal-500 text-blue-900 rounded-md px-3 py-1.5 shadow-lg font-bold transition-all duration-200 transform hover:scale-110 text-[0.97rem] min-h-0 h-auto animate-fade-in animate-delay-500">
              <Link href="/signup">Prova gratis</Link>
            </Button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-gradient-to-r from-blue-800 to-teal-600 py-4 px-4 space-y-4 flex flex-col items-center rounded-none shadow-xl animate-fade-in" aria-label="Mobile navigation">
            <Link href="#funzionalita" className="text-white hover:text-teal-300 transition-colors text-lg font-semibold px-4 py-3 rounded-md mx-auto w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Funzionalità</Link>
            <Link href="#pricing" className="text-white hover:text-teal-300 transition-colors text-lg font-semibold px-4 py-3 rounded-md w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Prezzi</Link>
            <hr className="w-2/3 border-t border-white/30 my-2" />
            <Link href="/login" className="text-white hover:text-teal-300 transition-colors text-lg font-semibold px-4 py-3 rounded-md w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Accedi</Link>
            <Button asChild className="bg-teal-400 hover:bg-teal-500 text-blue-900 rounded-md px-6 py-3 text-lg shadow-lg font-bold transition-all duration-200 transform hover:scale-105 w-full">
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Prova gratis</Link>
            </Button>
          </nav>
        )}
      </header>
      <section id="hero" className="relative bg-gradient-to-br from-blue-700 via-teal-500 to-indigo-800 text-white py-16 md:py-32 overflow-hidden flex items-center justify-center animate-fade-in-up animate-duration-700 animate-delay-200 rounded-none">
        <div className="container mx-auto px-2 md:px-4 text-center z-10 relative">
          <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 font-heading tracking-tight drop-shadow-xl">
              Il <span className="text-teal-300 font-bold">Tempo</span> che tracci è <span className="text-teal-300 font-bold">Fatturato</span> che incassi.<br/> Ogni minuto conta.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
              <span className="text-teal-300 font-bold">Tickle</span> è la soluzione pensata per professionisti digitali che desiderano monitorare le ore lavorate, gestire progetti con precisione e generare report pronti per la fatturazione, in modo semplice e veloce
            </p>
            <Button asChild size="lg" className="bg-teal-400 hover:bg-teal-500 text-blue-900 font-bold py-4 px-10 rounded-md text-xl shadow-xl transition-all duration-300 transform hover:scale-105">
              <a href="#cta" aria-label="Inizia Ora Gratis">Inizia Ora Gratis</a>
            </Button>
            <div className="mt-8 text-base opacity-90 flex items-center justify-center space-x-2 animate-fade-in animate-delay-300">
              <CheckCircle className="w-5 h-5 text-teal-300" aria-hidden="true" />
              <span>Nessuna carta di credito richiesta.</span>
            </div>
          </div>
          <div className="mt-10 md:mt-16 relative w-full max-w-2xl md:max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-none shadow-2xl p-4 md:p-10 border border-blue-200 relative overflow-hidden transition-all duration-300 hover:scale-101 hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20 transform -rotate-45 scale-150"></div>
                <div className="relative z-10 text-center">
                    <p className="text-white text-2xl md:text-3xl font-semibold mb-4 drop-shadow-lg">La tua dashboard di Tickle qui!</p>
                    <p className="text-gray-100 text-lg">Immagina uno screenshot pulito e moderno della dashboard di Tickle, o un mockup di un laptop/tablet con l&apos;interfaccia utente.</p>
                    <p className="text-gray-200 text-base mt-4">Questo darà subito un&apos;idea chiara del tuo prodotto.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema-soluzione" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-100 to-teal-50 rounded-none animate-fade-in-up animate-duration-700 animate-delay-300">
        <div className="container mx-auto px-2 md:px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-12">
            Il Tuo Tempo è Denaro. Non Perderne Più.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Consulenti IT e freelance spesso sottostimano il tempo dedicato ai progetti, perdendo fino al <span className="font-extrabold text-red-600 text-2xl md:text-3xl animate-pulse">25%</span> del potenziale fatturato. Le soluzioni attuali sono complesse o eccessivamente costose. <span className="font-bold">Tickle</span> ti offre la semplicità e l&apos;efficienza per recuperare ogni minuto e massimizzare i tuoi guadagni.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <div key="problem-card-1" className="flex flex-col items-center p-4 md:p-6 bg-white/80 rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-md max-w-xs mx-auto">
              <DollarSign className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">Guadagni Inespressi</h3>
              <p className="text-gray-600 text-center">Recupera il fatturato perso a causa di ore non tracciate.</p>
            </div>
            <div key="problem-card-2" className="flex flex-col items-center p-4 md:p-6 bg-white/80 rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-md max-w-xs mx-auto">
              <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">Complessità Eliminata</h3>
              <p className="text-gray-600 text-center">Dimentica software macchinosi, la semplicità è la nostra forza.</p>
            </div>
            <div key="problem-card-3" className="flex flex-col items-center p-4 md:p-6 bg-white/80 rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-md max-w-xs mx-auto">
              <FileText className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">Gestione Semplificata</h3>
              <p className="text-gray-600 text-center">Basta fogli di calcolo: tutto è organizzato e intuitivo.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="funzionalita" className="py-12 md:py-20 bg-white/80 backdrop-blur-lg rounded-none animate-fade-in-up animate-duration-700 animate-delay-400">
        <div className="container mx-auto px-2 md:px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-12">
            Le Funzionalità Essenziali per il Tuo Successo.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<Timer className="w-10 h-10 text-blue-600 drop-shadow-lg" />}
              title="Timer One-Click Intuitivo"
              description="Avvia e ferma il timer con un solo click. Passa da un progetto all&apos;altro con massima rapidità e precisione."
            />
            <FeatureCard
              icon={<LayoutDashboard className="w-10 h-10 text-blue-600" />}
              title="Dashboard Chiara e Semplice"
              description="Visualizza immediatamente le ore lavorate e i guadagni stimati per giorno, settimana e mese."
            />
            <FeatureCard
              icon={<Briefcase className="w-10 h-10 text-blue-600" />}
              title="Gestione Progetti Illimitata"
              description="Organizza ogni lavoro per cliente e progetto, con la possibilità di impostare tariffe orarie personalizzate."
            />
            <FeatureCard
              icon={<Download className="w-10 h-10 text-blue-600" />}
              title="Export per Fatturazione"
              description="Genera report dettagliati in formato PDF o CSV, pronti per la fatturazione e la condivisione con il tuo commercialista."
            />
            <FeatureCard
              icon={<BarChart2 className="w-10 h-10 text-blue-600" />}
              title="Report Intelligenti"
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

      <section id="differenziatori" className="py-12 md:py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-teal-100 rounded-none animate-fade-in-up animate-duration-700 animate-delay-500">
        <div className="container mx-auto px-2 md:px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-8">
            Perché Scegliere Tickle: I Nostri Punti di Forza.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Tickle è il time tracker che si adatta perfettamente alle tue esigenze
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <DifferentiatorCard
              icon={<Zap className="w-10 h-10 text-teal-600 drop-shadow-lg" />}
              title="Setup in 30 Secondi"
              description="Registrati, crea il tuo primo progetto e avvia il timer. Inizia a tracciare in un lampo, senza configurazioni complesse."
            />
            <DifferentiatorCard
              icon={<Globe className="w-10 h-10 text-teal-600" />}
              title="Interfaccia in Italiano"
              description="Progettato da italiani, per professionisti italiani. Un&apos;interfaccia chiara, intuitiva e senza barriere linguistiche."
            />
            <DifferentiatorCard
              icon={<Euro className="w-10 h-10 text-teal-600" />}
              title="Pricing Trasparente"
              description="Piani chiari ed economici, senza costi nascosti. Sai sempre quanto spendi, con la massima onestà."
            />
            <DifferentiatorCard
              icon={<CodeIcon className="w-10 h-10 text-teal-600" />}
              title="Focus Professionisti Digitali"
              description="Template e categorie predefinite pensati per lo sviluppo software, la consulenza IT e le tue esigenze professionali."
            />
            <DifferentiatorCard
              icon={<FileText className="w-10 h-10 text-teal-600" />}
              title="Export per Contabilità"
              description="Report automatici strutturati in formati CSV e PDF, compatibili per una gestione fiscale senza pensieri."
            />
            <DifferentiatorCard
              icon={<TrendingUp className="w-10 h-10 text-teal-600" />}
              title="Massimizza il Tuo Valore"
              description="Trasforma il tempo non tracciato in fatturato aggiuntivo. Guadagna di più con maggiore precisione."
            />
          </div>
        </div>
      </section>

      {/* SEZIONE TESTIMONIALS RIMOSSA */}

      <section id="pricing" className="scroll-mt-24 pt-12 md:pt-20 pb-8 md:pb-16 bg-gradient-to-br from-blue-700 via-teal-500 to-indigo-700 text-white rounded-none animate-fade-in-up animate-duration-700 animate-delay-600">
        <div className="container mx-auto px-2 md:px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12">
            Scegli il Piano Perfetto per Te.
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Inizia con il piano gratuito e passa al Premium quando sei pronto a massimizzare i tuoi guadagni.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl md:max-w-4xl mx-auto">
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
              price="€5"
              frequency="/mese"
              features={[
                "Progetti illimitati",
                "Report avanzati",
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

      <section id="cta" className="py-16 md:py-24 bg-gray-50 text-center rounded-none shadow-2xl w-full animate-fade-in-up animate-duration-700 animate-delay-700 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight font-heading text-blue-900">
            Non Aspettare. <span className="text-teal-500">Traccia il Tuo Successo Oggi.</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 text-blue-800">
            Recupera tempo prezioso e massimizza i tuoi guadagni con il time tracker più semplice per professionisti IT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <Button asChild
              size="lg"
              className="bg-teal-400 hover:bg-teal-500 text-blue-900 font-bold py-4 px-10 rounded-md text-xl shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto"
            >
              <a href="/signup" aria-label="Registrati Ora e Prova Gratis">Registrati Ora e Prova Gratis</a>
            </Button>
            <Button asChild
              size="lg"
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-50 font-bold py-4 px-10 rounded-md text-xl shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto"
            >
              <a href="/login" aria-label="Accedi">Accedi</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-10 rounded-none shadow-2xl animate-fade-in-up animate-duration-700 animate-delay-800">
        <div className="container mx-auto px-2 md:px-4 text-center text-sm opacity-90">
          <p className="mb-4">&copy; {currentYear} Tickle. Tutti i diritti riservati.</p>
          <nav className="mt-4 space-x-4" aria-label="Footer navigation">
            <a href="#" className="hover:text-teal-400 transition-colors font-semibold" aria-label="Privacy Policy">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors font-semibold" aria-label="Termini di Servizio">Termini di Servizio</a>
            <a href="#" className="hover:text-teal-400 transition-colors font-semibold" aria-label="Contatti">Contatti</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white/80 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-md group animate-fade-in-up">
      <div className="mb-4 group-hover:scale-110 group-hover:drop-shadow-xl transition-all duration-300">{icon}</div>
      <h3 className="text-2xl font-bold font-heading text-gray-800 mb-2 tracking-tight drop-shadow-lg transition-colors duration-200">{title}</h3>
      <p className="text-gray-700 text-center text-lg transition-colors duration-200">{description}</p>
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
    <div className="flex flex-col items-center p-8 bg-white/80 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-md group animate-fade-in-up">
      <div className="mb-4 group-hover:scale-110 group-hover:drop-shadow-xl transition-all duration-300">{icon}</div>
      <h3 className="text-2xl font-bold font-heading text-gray-800 mb-2 tracking-tight drop-shadow-lg transition-colors duration-200">{title}</h3>
      <p className="text-gray-700 text-center text-lg transition-colors duration-200">{description}</p>
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
    <Card className={`flex flex-col p-8 rounded-md shadow-xl ${isPrimary ? 'bg-white text-blue-800 border-4 border-teal-400' : 'bg-blue-800 text-white border-2 border-blue-700'}`}>
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
          className={`w-full font-bold py-3 px-6 rounded-md text-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
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