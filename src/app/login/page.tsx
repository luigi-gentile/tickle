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
      setError('Inserisci email e password.');
      setLoading(false);
      return;
    }

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      let userFriendlyError = `Errore durante il login: ${loginError.message}.`;
      if (loginError.message.includes('Invalid login credentials')) {
        userFriendlyError = 'Email o password non corretti.';
      } else if (loginError.message.includes('Email not confirmed')) {
        userFriendlyError = 'Devi prima confermare la tua email.';
      }
      setError(userFriendlyError);
      setLoading(false);
      return;
    }

    setMessage('Login effettuato con successo!');
    setLoading(false);
    // Redirect alla dashboard (o home)
    router.replace('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 font-sans antialiased p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md bg-white shadow-2xl rounded-xl p-6 sm:p-8 border-4 border-blue-200 transition-all duration-300 hover:border-teal-400 hover:shadow-3xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl font-extrabold text-blue-800 mb-2 font-heading tracking-tight">
            Accedi a <span className="text-teal-300 font-bold">Tickle</span>
          </CardTitle>
          <p className="text-gray-600 text-base mt-2 leading-relaxed">
            Inserisci le tue credenziali per continuare.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="la.tua@email.com"
                required
                className="w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-base py-2 px-3 transition-colors duration-200"
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
                className="w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-base py-2 px-3 transition-colors duration-200"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              disabled={loading}
            >
              {loading ? 'Accesso in corso...' : 'Accedi'}
            </Button>
          </form>
          {message && (
            <p className={`mt-6 text-center text-base ${error ? 'text-red-600' : 'text-green-600'} font-medium`}>
              {message}
            </p>
          )}
          {error && (
            <p className="mt-2 text-center text-sm text-red-600 font-medium">
              {error}
            </p>
          )}
          <p className="mt-8 text-center text-base text-gray-700">
            Non hai un account?{' '}
            <Link href="/signup" className="text-blue-700 hover:underline font-bold transition-colors duration-200 hover:text-teal-600">
              Registrati qui
            </Link>
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            <Link href="/forgot-password" className="text-blue-700 hover:underline font-semibold transition-colors duration-200 hover:text-teal-600">
              Password dimenticata?
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
