import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fcpajsvmjqwanuakbjda.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjcGFqc3ZtanF3YW51YWtiamRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MTcwMzgsImV4cCI6MjA1MTk5MzAzOH0.fpho9UmRFotmGQiI-VP83hnkDUErh1pytQOoWbLFfQ0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
}) 