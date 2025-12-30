import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://fkvwvjugiuxlobhdmpur.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdnd2anVnaXV4bG9iaGRtcHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNDgxMzIsImV4cCI6MjA4MjYyNDEzMn0.qJ2By98MOKBPG_8WfeKVMY2T6PyGogB1UHcnUMCux2w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

