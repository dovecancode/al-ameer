import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwdutacinrkzpnkkdapr.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3ZHV0YWNpbnJrenBua2tkYXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MzAxNTcsImV4cCI6MjAyMjEwNjE1N30._L-zDsd7TXSZAQ3tWzhljyKmzY7iiOLqj5Nf8J_rPoc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
