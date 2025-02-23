/*
  # Update RLS policies for flat_assessments

  1. Changes
    - Drop existing policies
    - Create new policies for unauthenticated submissions
    - Add policy for admin access

  2. Security
    - Allow public submissions without authentication
    - Restrict read access to admins only
    - Ensure data integrity
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit assessments" ON flat_assessments;
DROP POLICY IF EXISTS "Only admins can read assessments" ON flat_assessments;

-- Create new policies
CREATE POLICY "Enable insert for unauthenticated users"
  ON flat_assessments FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for admins"
  ON flat_assessments FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'role' = 'admin'
  );