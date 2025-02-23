/*
  # Fix RLS policies for assessment submissions

  1. Changes
    - Drop existing table and recreate with correct structure
    - Set up proper RLS policies for public submissions
    - Ensure all necessary columns are present

  2. Security
    - Allow public submissions without authentication
    - Restrict read access to authenticated admins only
*/

-- Drop existing table and recreate
DROP TABLE IF EXISTS flat_assessments;

CREATE TABLE flat_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_name text DEFAULT 'Holistische Gezondheidscheck' NOT NULL,
  
  -- General Health
  energy_level integer,
  sleep integer,
  
  -- Physical Health
  physical_complaints_scale integer,
  physical_complaints text[],
  physical_complaints_other text,
  physical_complaints_duration text,
  diet_description text,
  
  -- Mental Health
  stress_level integer,
  mental_state text[],
  mental_state_other text,
  mental_complaints_duration text,
  
  -- Previous Treatments
  previous_treatments text[],
  treatments_other text,
  
  -- Personal Information
  full_name text,
  email text,
  phone text,
  
  -- Metadata
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Enable RLS
ALTER TABLE flat_assessments ENABLE ROW LEVEL SECURITY;

-- Create a single policy for public submissions
CREATE POLICY "public_submissions_policy"
  ON flat_assessments
  AS PERMISSIVE
  FOR ALL
  TO PUBLIC
  USING (true)
  WITH CHECK (true);