import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(
    "https://inwlpkbabgxhbizodela.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlud2xwa2JhYmd4aGJpem9kZWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMDcyODQsImV4cCI6MjA0MjY4MzI4NH0.br4ARDAF21Uqg9sMWT6QNG-LfYTZBKZ2zNFXtAIEvJU",
)