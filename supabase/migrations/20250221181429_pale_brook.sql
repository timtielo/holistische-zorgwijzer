/*
  # Fix RLS policies for assessment submissions

  1. Changes
    - Drop existing policies that might conflict
    - Create new policy to allow public submissions
    - Create new policy for admin access
    - Ensure RLS is properly enabled

  2. Security
    - Allow anonymous users to submit assessments
    - Restrict read access to admin users only
*/

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Public can submit assessments" ON flat_assessments;
DROP POLICY IF EXISTS "Admins can read assessments" ON flat_assessments;
DROP POLICY IF EXISTS "Allow public form submissions" ON flat_assessments;
DROP POLICY IF EXISTS "Admin read access" ON flat_assessments;
DROP POLICY IF EXISTS "Enable insert for anyone" ON flat_assessments;
DROP POLICY IF EXISTS "Enable read access for admins" ON flat_assessments;

-- Ensure RLS is enabled
ALTER TABLE flat_assessments ENABLE ROW LEVEL SECURITY;

-- Create new policies with proper permissions
CREATE POLICY "Allow anonymous submissions"
  ON flat_assessments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin read access"
  ON flat_assessments
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');