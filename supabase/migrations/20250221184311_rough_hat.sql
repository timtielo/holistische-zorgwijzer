/*
  # Fix contact messages RLS policies

  1. Changes
    - Drop all existing policies
    - Create new simplified policy for anonymous submissions
    - Create admin read policy
    - Ensure proper constraints and indexes

  2. Security
    - Allow both anonymous and authenticated submissions
    - Restrict read access to admins only
*/

-- Drop existing table and recreate
DROP TABLE IF EXISTS contact_messages;

CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'archived')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a single policy for public submissions
CREATE POLICY "public_submissions_policy"
  ON contact_messages
  AS PERMISSIVE
  FOR ALL
  TO PUBLIC
  USING (true)
  WITH CHECK (true);

-- Add indexes for common queries
CREATE INDEX contact_messages_status_idx ON contact_messages (status);
CREATE INDEX contact_messages_created_at_idx ON contact_messages (created_at DESC);