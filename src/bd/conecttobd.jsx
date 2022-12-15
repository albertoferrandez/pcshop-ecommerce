import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://syjbrjvgcdtagpigodzc.supabase.co"

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5amJyanZnY2R0YWdwaWdvZHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5OTQ2MDEsImV4cCI6MTk4NTU3MDYwMX0.33Rp4HWWxnWkeExnBUfvi7ju7XgOTuvyCHNkNHsU870"

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase