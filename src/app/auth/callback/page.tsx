"use client";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthCallbackPage() {
  const router = useRouter();
  // Utilizza createClientComponentClient per il client Supabase specifico per i componenti client
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Questa funzione gestisce l'URL di callback dopo che Supabase ha processato un'azione di autenticazione (es. verifica email, reset password).
      // Supabase Auth Helpers analizza automaticamente l'URL e aggiorna la sessione.

      // Attendiamo che Supabase elabori il token nell'URL
      // Non è necessario fare supabase.auth.verifyOtp qui, auth-helpers lo fa in background.

      // Otteniamo la sessione corrente per verificare se l'utente è loggato
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        // Se c'è una sessione, l'utente è autenticato. Reindirizza alla dashboard.
        router.replace('/dashboard');
      } else {
        // Se non c'è una sessione (es. token non valido o scaduto), reindirizza alla home o al login.
        router.replace('/login'); // O '/'
      }
    };

    handleAuthCallback();
  }, [router, supabase]); // Dipendenze per useEffect

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 font-sans antialiased">
      <p className="text-lg text-gray-700">Caricamento in corso...</p>
    </div>
  );
}