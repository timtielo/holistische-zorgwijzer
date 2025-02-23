/*
  # Allow anonymous assessment submissions

  1. Changes
    - Remove user_id requirement from flat_assessments table
    - Update RLS policies to allow anonymous submissions
    - Add policy for public read access to own submissions via email

  2. Security
    - Enable RLS on flat_assessments table
    - Add policies for anonymous submissions
    - Restrict access to only own submissions via email
*/

-- Make user_id optional
ALTER TABLE flat_assessments ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own assessments" ON flat_assessments;
DROP POLICY IF EXISTS "Users can create own assessments" ON flat_assessments;

-- Create new policies
CREATE POLICY "Anyone can submit assessments"
  ON flat_assessments FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can read own assessments by email"
  ON flat_assessments FOR SELECT
  TO public
  USING (
    email = current_setting('app.user_email', true)::text
  );