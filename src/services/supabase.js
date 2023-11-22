import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://omouhruwlzwwahduycnzf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdWhydXdsend3YWhkdXljbnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMzAwNTgsImV4cCI6MjAxNTgwNjA1OH0.VwHNdqNvQ6uGhdJBp8RjylQ3vZU7AE7-M3BZ2UGzOvI"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;