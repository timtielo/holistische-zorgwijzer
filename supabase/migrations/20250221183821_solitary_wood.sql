/*
  # Create contact form table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `status` (text) - For tracking message status (new, read, replied)
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public submissions
    - Add policy for admin access
*/

-- Create contact messages table
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable public submissions"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable admin access"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');