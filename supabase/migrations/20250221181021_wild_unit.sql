/*
  # Fix RLS policies for assessment submissions

  1. Changes
    - Drop existing RLS policies
    - Create new policy to allow public form submissions
    - Create new policy for admin read access

  2. Security
    - Enable RLS
    - Allow unauthenticated submissions
    - Restrict read access to admins only
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for anyone" ON flat_assessments;
DROP POLICY IF EXISTS "Enable read access for admins" ON flat_assessments;
DROP POLICY IF EXISTS "Enable insert for unauthenticated users" ON flat_assessments;

-- Enable RLS (in case it was disabled)
ALTER TABLE flat_assessments ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Allow public form submissions"
  ON flat_assessments FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admin read access"
  ON flat_assessments FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');