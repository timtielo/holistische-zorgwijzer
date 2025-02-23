/*
  # Fix contact messages table

  1. Changes
    - Add status constraint to ensure only valid statuses
    - Add indexes for better query performance
    - Add email format check

  2. Security
    - RLS policies remain unchanged
*/

-- Add status constraint
ALTER TABLE contact_messages
  DROP CONSTRAINT IF EXISTS contact_messages_status_check,
  ADD CONSTRAINT contact_messages_status_check 
    CHECK (status IN ('new', 'in_progress', 'completed', 'archived'));

-- Add email format check
ALTER TABLE contact_messages
  DROP CONSTRAINT IF EXISTS contact_messages_email_check,
  ADD CONSTRAINT contact_messages_email_check 
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add indexes for common queries
CREATE INDEX IF NOT EXISTS contact_messages_status_idx ON contact_messages (status);
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages (created_at DESC);