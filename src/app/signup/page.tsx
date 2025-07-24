"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [emailUsed, setEmailUsed] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Funzione per validare l'email
  const validateEmail = (email: string) => {
    // Regex semplice per la validazione email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Funzione per validare la password: solo lunghezza minima di 8 caratteri
  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return ['La password deve essere di almeno 8 caratteri.'];
    }
    return [];
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(null);

    // --- Validazione lato Client ---
    if (!validateEmail(email)) {
      setError('Inserisci un formato email valido.');
      setLoading(false);
      return;
    }
    // Controllo email già usata su submit
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', email)
      .single();
    if (existingProfile) {
      setError('Questa email è già registrata e confermata. Prova ad accedere o recuperare la password.');
      setLoading(false);
      return;
    }
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError(passwordErrors.join(' '));
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Le password non corrispondono.');
      setLoading(false);
      return;
    }
    // --- Fine Validazione lato Client ---

    // --- Tentativo di registrazione ---
    const { data, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (authError) {
      let userFriendlyError = `Errore durante la registrazione: ${authError.message}.`;
      if (
        authError.message.includes('User already registered') ||
        authError.message.toLowerCase().includes('already registered') ||
        authError.message.toLowerCase().includes('already exists') ||
        authError.message.toLowerCase().includes('email address is already in use')
      ) {
        userFriendlyError = 'Questa email è già registrata. Prova ad accedere o recuperare la password.';
      } else if (authError.message.includes('Password should be at least 6 characters')) {
        userFriendlyError = 'La password deve essere di almeno 8 caratteri.';
      }
      setError(userFriendlyError);
      setLoading(false);
      return;
    }
    // La creazione del profilo va fatta dopo la conferma e login

    setMessage('Registrazione riuscita! Controlla la tua email e clicca il link di verifica.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 font-sans antialiased p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md bg-white shadow-2xl rounded-xl p-6 sm:p-8 border-4 border-blue-200 transition-all duration-300 hover:border-teal-400 hover:shadow-3xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl font-extrabold text-blue-800 mb-2 font-heading tracking-tight">
            Registrati su <span className="text-teal-300 font-bold">Tickle</span>
          </CardTitle>
          <p className="text-gray-600 text-base mt-2 leading-relaxed">
            Crea il tuo account
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-6" aria-describedby={error ? 'form-error' : undefined}>
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
                aria-invalid={!!error || emailUsed}
                aria-describedby={error ? 'form-error' : emailUsed ? 'email-used-error' : undefined}
                className={`w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-base py-2 px-3 transition-colors duration-200 ${emailUsed ? 'border-red-500' : ''}`}
              />
              {checkingEmail && (
                <span className="text-xs text-gray-500 mt-1 block">Controllo email in corso...</span>
              )}
              {emailUsed && (
                <>
                  <span id="email-used-error" className="text-xs text-red-600 mt-1 block" role="alert">
                    Questa email è già registrata. Prova ad accedere o recupera la password.
                  </span>
                </>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-1">Password</label>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimo 8 caratteri"
                required
                autoComplete="new-password"
                aria-invalid={!!error}
                aria-describedby={error ? 'form-error' : undefined}
                className="w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-base py-2 px-3 transition-colors duration-200 pr-10"
              />
              <button
                type="button"
                tabIndex={0}
                aria-label={showPassword ? 'Nascondi password' : 'Mostra password'}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-8 text-gray-500 hover:text-blue-700 focus:outline-none"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                {showPassword ? (
                  // Occhio aperto
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1.5 12C3.5 7 8 4 12 4s8.5 3 10.5 8c-2 5-6.5 8-10.5 8S3.5 17 1.5 12z" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                ) : (
                  // Occhio barrato
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1.5 12C3.5 7 8 4 12 4s8.5 3 10.5 8c-2 5-6.5 8-10.5 8S3.5 17 1.5 12z" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
              <p className="text-xs text-gray-500 mt-1">La password deve essere di almeno 8 caratteri.</p>
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-800 mb-1">Conferma Password</label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Conferma la tua password"
                required
                autoComplete="new-password"
                aria-invalid={!!error}
                aria-describedby={error ? 'form-error' : undefined}
                className="w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-base py-2 px-3 transition-colors duration-200 pr-10"
              />
              <button
                type="button"
                tabIndex={0}
                aria-label={showConfirmPassword ? 'Nascondi conferma password' : 'Mostra conferma password'}
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute right-2 top-8 text-gray-500 hover:text-blue-700 focus:outline-none"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                {showConfirmPassword ? (
                  // Occhio aperto
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1.5 12C3.5 7 8 4 12 4s8.5 3 10.5 8c-2 5-6.5 8-10.5 8S3.5 17 1.5 12z" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                ) : (
                  // Occhio barrato
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1.5 12C3.5 7 8 4 12 4s8.5 3 10.5 8c-2 5-6.5 8-10.5 8S3.5 17 1.5 12z" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
              </button>
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
                  Registrazione in corso...
                </span>
              ) : 'Registrati'}
            </Button>
          </form>
          {message && (
            <p className={`mt-6 text-center text-base ${error ? 'text-red-600' : 'text-green-600'} font-medium`}>
              {message}
            </p>
          )}
          {error && (
            <p id="form-error" className="mt-2 text-center text-sm text-red-600 font-medium" role="alert">
              {error}
            </p>
          )}
          <p className="mt-8 text-center text-base text-gray-700">
            Hai già un account?{' '}
            <Link href="/login" className="text-blue-700 hover:underline font-bold transition-colors duration-200 hover:text-teal-600">
              Accedi qui
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}