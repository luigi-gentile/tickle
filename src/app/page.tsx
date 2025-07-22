// src/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full text-center space-y-10">
        {/* Hero */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Time tracking in 30 secondi per consulenti IT
          </h1>
          <p className="text-lg text-gray-600">
            Dimentica Toggl e Harvest. TimeTracker Pro è semplice, veloce e pensato per il mercato italiano.
          </p>
        </div>

        {/* Email Form */}
        <form
          action="https://formspree.io/f/mnqeyzow" // TEMPORARY demo endpoint — sostituibile
          method="POST"
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Inserisci la tua email"
            className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Unisciti alla waitlist
          </button>
        </form>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left pt-10">
          <div>
            <h3 className="font-semibold text-lg">🚀 Setup in 30 secondi</h3>
            <p className="text-gray-600">Avvia il timer subito dopo la registrazione.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">🇮🇹 UI in italiano</h3>
            <p className="text-gray-600">Pensato per freelance e consulenti IT italiani.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">📁 Export contabilità</h3>
            <p className="text-gray-600">Esporta i dati in formato compatibile con i commercialisti.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">📊 Dashboard semplice</h3>
            <p className="text-gray-600">Panoramica giornaliera e settimanale immediata.</p>
          </div>
        </div>

        {/* CTA finale */}
        <div className="pt-10">
          <p className="text-xl font-medium">Vuoi provarlo in anteprima?</p>
          <p className="text-gray-600 mb-4">Iscriviti alla waitlist per accedere alla beta privata.</p>
          <form
            action="https://formspree.io/f/mnqeyzow" // stesso form anche qui
            method="POST"
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Tua email"
              className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Iscrivimi
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
