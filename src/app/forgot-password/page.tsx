"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(null);

    if (!email) {
      setError('Inserisci la tua email.');
      setLoading(false);
      return;
    }

    const { data, error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/reset-password`,
    });

    if (resetError) {
      let userFriendlyError = `Errore durante la richiesta: ${resetError.message}.`;
      if (resetError.message.includes('User not found')) {
        userFriendlyError = 'Nessun account trovato con questa email.';
      }
      setError(userFriendlyError);
      setLoading(false);
      return;
    }

    setMessage('Se l’email è corretta, riceverai un link per reimpostare la password.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-teal-100 font-sans antialiased p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md bg-white shadow-2xl rounded-xl p-6 sm:p-8 border-4 border-blue-200 transition-all duration-300 hover:border-teal-400 hover:shadow-3xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-4xl font-extrabold text-blue-800 mb-2 font-heading tracking-tight">
            Recupera la password
          </CardTitle>
          <p className="text-gray-600 text-base mt-2 leading-relaxed">
            Inserisci la tua email per ricevere il link di reset password.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPassword} className="space-y-6">
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
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              disabled={loading}
            >
              {loading ? 'Invio in corso...' : 'Invia link di reset'}
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
