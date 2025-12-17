import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eweubtxganesqdvniipt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZXVidHhnYW5lc3Fkdm5paXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5Njg2NTgsImV4cCI6MjA4MTU0NDY1OH0.gXvvGZuwZqjPJsQJp9GuNRcju____OqS-ei5fngmHkY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)