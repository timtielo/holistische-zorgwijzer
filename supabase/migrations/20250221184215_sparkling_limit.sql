/*
  # Fix contact messages table RLS policies

  1. Changes
    - Drop existing policies
    - Create new policies with correct permissions
    - Add proper constraints and indexes

  2. Security
    - Allow anonymous submissions
    - Restrict read access to admins only
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable public submissions" ON contact_messages;
DROP POLICY IF EXISTS "Enable admin access" ON contact_messages;
DROP POLICY IF EXISTS "Enable admin submissions" ON contact_messages;

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create new policies with proper permissions
CREATE POLICY "allow_anonymous_submissions"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "allow_admin_read"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Add status constraint if it doesn't exist
ALTER TABLE contact_messages
  DROP CONSTRAINT IF EXISTS contact_messages_status_check,
  ADD CONSTRAINT contact_messages_status_check 
    CHECK (status IN ('new', 'in_progress', 'completed', 'archived'));

-- Add email format check if it doesn't exist
ALTER TABLE contact_messages
  DROP CONSTRAINT IF EXISTS contact_messages_email_check,
  ADD CONSTRAINT contact_messages_email_check 
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add indexes for common queries if they don't exist
CREATE INDEX IF NOT EXISTS contact_messages_status_idx ON contact_messages (status);
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages (created_at DESC);