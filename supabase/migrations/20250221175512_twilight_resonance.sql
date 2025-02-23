/*
  # Restrict assessment access to submissions only

  1. Changes
    - Remove public read access policy
    - Keep public submission policy
    - Add admin-only read access policy

  2. Security
    - Only allow public submissions
    - Restrict reading assessments to authenticated admin users
*/

-- Drop the public read access policy
DROP POLICY IF EXISTS "Public can read own assessments by email" ON flat_assessments;

-- Create admin-only read access policy
CREATE POLICY "Only admins can read assessments"
  ON flat_assessments FOR SELECT
  TO authenticated
  USING (
    auth.jwt() ->> 'role' = 'admin'
  );

-- Keep the existing submission policy
-- Note: The "Anyone can submit assessments" policy remains unchanged