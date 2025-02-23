/*
  # Fix assessment submission

  1. Changes
    - Make user_id optional in flat_assessments
    - Update RLS policies to allow public submissions
    - Add policy for admin access

  2. Security
    - Allow unauthenticated submissions
    - Restrict read access to admins only
*/

-- Make user_id optional if it isn't already
DO $$
BEGIN
  ALTER TABLE flat_assessments ALTER COLUMN user_id DROP NOT NULL;
EXCEPTION
  WHEN others THEN NULL;
END $$;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for unauthenticated users" ON flat_assessments;
DROP POLICY IF EXISTS "Enable read access for admins" ON flat_assessments;

-- Create new policies
CREATE POLICY "Enable insert for anyone"
  ON flat_assessments FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for admins"
  ON flat_assessments FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'role' = 'admin'
  );