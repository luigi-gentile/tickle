"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return 'La password deve essere di almeno 8 caratteri.';
    }
    return '';
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(null);

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Le password non corrispondono.');
      setLoading(false);
      return;
    }

    // Supabase aggiorna la password tramite updateUser
    const { data, error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError('Errore durante il reset: ' + updateError.message);
      setLoading(false);
      return;
    }

    setMessage('Password aggiornata con successo!');
    setLoading(false);
    // Redirect al login dopo qualche secondo
    setTimeout(() => {
      router.replace('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 font-sans antialiased p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md bg-white shadow-2xl rounded-xl p-6 sm:p-8 border-4 border-blue-200 transition-all duration-300 hover:border-teal-400 hover:shadow-3xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl font-extrabold text-blue-800 mb-2 font-heading tracking-tight">
            Imposta nuova password
          </CardTitle>
          <p className="text-gray-600 text-base mt-2 leading-relaxed">
            Scegli una nuova password per il tuo account.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-1">Nuova Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimo 8 caratteri"
                required
                className="w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-base py-2 px-3 transition-colors duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">La password deve essere di almeno 8 caratteri.</p>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-800 mb-1">Conferma Password</label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Conferma la tua password"
                required
                className="w-full border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg shadow-sm text-base py-2 px-3 transition-colors duration-200"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              disabled={loading}
            >
              {loading ? 'Aggiornamento...' : 'Aggiorna password'}
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
            <Link href="/login" className="text-blue-700 hover:underline font-bold transition-colors duration-200 hover:text-teal-600">
              Torna al login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
