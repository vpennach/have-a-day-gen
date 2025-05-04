import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ttiytpufulvjzxqntxjc.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase anon key environment variable')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 