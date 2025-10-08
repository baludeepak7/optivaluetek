import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface NewsItem {
  id: string;
  title: string;
  type: 'press_release' | 'social_media' | 'blog' | 'announcement';
  summary: string;
  content: string | null;
  pdf_url: string | null;
  external_url: string | null;
  image_url: string | null;
  published_date: string;
  category: 'product' | 'partnership' | 'award' | 'company' | 'industry';
  tags: string[];
  is_featured: boolean;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
}
