import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Carica .env.local
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('❌ Variabili d\'ambiente mancanti. Controlla il file .env.local');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  // Interroga una tabella volutamente inesistente
  const { error } = await supabase.from('test_table_che_non_esiste').select('*').limit(1);

  if (error) {
    if (error.message.includes('permission denied') || error.message.includes('does not exist')) {
      console.log('✅ Connessione a Supabase riuscita! (errore atteso: tabella non esiste)');
      process.exit(0);
    } else {
      console.error('❌ Errore dalla connessione:', error.message);
      process.exit(1);
    }
  } else {
    console.log('✅ Connessione riuscita e tabella esistente (sorpresa!)');
    process.exit(0);
  }
}

testConnection();
