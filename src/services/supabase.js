import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wgyylifpdfnaepxjjefc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndneXlsaWZwZGZuYWVweGpqZWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NjUzOTcsImV4cCI6MjAxNTE0MTM5N30.j3uUw_ms1NGbRKpX0QaRpWGwmhKJJCoDPVlwi7uOVU4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
