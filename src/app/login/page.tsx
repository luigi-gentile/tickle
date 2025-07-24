"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(null);

    if (!email || !password) {
      setError('Per favore inserisci sia l’email che la password.');
      setLoading(false);
      return;
    }

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      let userFriendlyError = `Si è verificato un errore durante l’accesso. Riprova.`;
      if (loginError.message.includes('Invalid login credentials')) {
        userFriendlyError = 'Email o password non corretti.';
      } else if (loginError.message.includes('Email not confirmed')) {
        userFriendlyError = 'Devi prima confermare la tua email. Controlla la posta elettronica.';
      } else if (loginError.message.toLowerCase().includes('network')) {
        userFriendlyError = 'Errore di connessione. Verifica la tua rete e riprova.';
      }
      setError(userFriendlyError);
      setLoading(false);
      return;
    }

    setMessage('Accesso effettuato con successo! Benvenuto su Tickle.');
    setLoading(false);
    // Redirect alla dashboard (o home)
    router.replace('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 font-sans antialiased p-2 sm:p-6 lg:p-8">
      <Card className="w-full max-w-sm sm:max-w-md bg-white shadow-2xl rounded-xl p-3 sm:p-8 border-4 border-blue-200 transition-all duration-300 hover:border-teal-400 hover:shadow-3xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl font-extrabold text-blue-800 mb-2 font-heading tracking-tight">
            Accedi a <span className="text-teal-300 font-bold">Tickle</span>
          </CardTitle>
          <p className="text-gray-600 text-base mt-2 leading-relaxed">
            Inserisci le tue credenziali per continuare.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6" aria-describedby={error ? 'form-error' : undefined}>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="la.tua@email.com"
                required
                autoComplete="email"
                aria-invalid={!!error}
                aria-describedby={error ? 'form-error' : undefined}
                className="w-full min-w-0 border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-sm sm:text-base py-2 px-3 transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-1">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="La tua password"
                required
                autoComplete="current-password"
                aria-invalid={!!error}
                aria-describedby={error ? 'form-error' : undefined}
                className="w-full min-w-0 border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-sm sm:text-base py-2 px-3 transition-colors duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">La password è case-sensitive.</p>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Accesso in corso...
                </span>
              ) : 'Accedi'}
            </Button>
          </form>
          <div aria-live="polite" className="mt-4 min-h-[24px]">
            {message && !error && (
              <p className="text-center text-base text-green-600 font-semibold" role="status">{message}</p>
            )}
            {error && (
              <p id="form-error" className="text-center text-base text-red-600 font-semibold" role="alert">{error}</p>
            )}
          </div>
          <p className="mt-8 text-center text-base text-gray-700">
            Non hai un account?{' '}
            <Link href="/signup" className="text-blue-700 hover:underline font-bold transition-colors duration-200 hover:text-teal-600">
              Registrati qui
            </Link>
          </p>
          <p className="mt-4 text-center">
            <Link href="/forgot-password" className="text-blue-700 hover:underline font-semibold transition-colors duration-200 hover:text-teal-600 text-base">
              Password dimenticata?
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}