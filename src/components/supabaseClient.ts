import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nvbpsfdwqftccuctiqre.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52YnBzZmR3cWZ0Y2N1Y3RpcXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1Njg5MzMsImV4cCI6MjA2MjE0NDkzM30.cv_spjImPmMnhQL7cQEw7f3KdBbUjYPhVaTrhgLcGUw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
