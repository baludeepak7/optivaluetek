/*
  # Create News and Press Releases Table

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title` (text) - News article or press release title
      - `type` (text) - Type: 'press_release', 'social_media', 'blog', 'announcement'
      - `summary` (text) - Brief summary
      - `content` (text) - Full content
      - `pdf_url` (text) - URL to PDF file (for press releases)
      - `external_url` (text) - URL to social media post or external article
      - `image_url` (text) - Featured image URL
      - `published_date` (timestamptz) - Publication date
      - `category` (text) - Category: 'product', 'partnership', 'award', 'company', 'industry'
      - `tags` (text[]) - Array of tags
      - `is_featured` (boolean) - Featured on homepage
      - `status` (text) - 'draft', 'published', 'archived'
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `news` table
    - Add policy for public read access to published news
    - Add policy for authenticated admin users to manage news
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL DEFAULT 'announcement',
  summary text NOT NULL,
  content text,
  pdf_url text,
  external_url text,
  image_url text,
  published_date timestamptz DEFAULT now(),
  category text DEFAULT 'company',
  tags text[] DEFAULT '{}',
  is_featured boolean DEFAULT false,
  status text DEFAULT 'published',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_type CHECK (type IN ('press_release', 'social_media', 'blog', 'announcement')),
  CONSTRAINT valid_category CHECK (category IN ('product', 'partnership', 'award', 'company', 'industry')),
  CONSTRAINT valid_status CHECK (status IN ('draft', 'published', 'archived'))
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  USING (status = 'published');

CREATE POLICY "Authenticated users can insert news"
  ON news FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_news_published_date ON news(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_news_status ON news(status);
CREATE INDEX IF NOT EXISTS idx_news_type ON news(type);
CREATE INDEX IF NOT EXISTS idx_news_is_featured ON news(is_featured);
