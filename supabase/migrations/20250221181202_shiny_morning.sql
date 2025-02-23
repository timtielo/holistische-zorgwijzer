/*
  # Fix Assessment Policies

  1. Changes
    - Drop existing policies that might conflict
    - Create new policy to allow public submissions
    - Add policy for admin access
    - Ensure form_name has a default value
*/

-- Drop all existing policies on flat_assessments
DROP POLICY IF EXISTS "Allow public form submissions" ON flat_assessments;
DROP POLICY IF EXISTS "Admin read access" ON flat_assessments;
DROP POLICY IF EXISTS "Enable insert for anyone" ON flat_assessments;
DROP POLICY IF EXISTS "Enable read access for admins" ON flat_assessments;

-- Ensure RLS is enabled
ALTER TABLE flat_assessments ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Public can submit assessments"
  ON flat_assessments 
  FOR INSERT 
  TO public
  WITH CHECK (true);

CREATE POLICY "Admins can read assessments"
  ON flat_assessments 
  FOR SELECT 
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Ensure form_name has a default value and is not null
ALTER TABLE flat_assessments 
  ALTER COLUMN form_name SET DEFAULT 'Holistische Gezondheidscheck',
  ALTER COLUMN form_name SET NOT NULL;