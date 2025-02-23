/*
  # Create flat assessments table

  1. New Tables
    - `flat_assessments`
      - `id` (uuid, primary key)
      - `form_name` (text, not null)
      - `energy_level` (integer)
      - `sleep` (integer)
      - `physical_complaints_scale` (integer)
      - `physical_complaints` (text[])
      - `physical_complaints_other` (text)
      - `physical_complaints_duration` (text)
      - `diet_description` (text)
      - `stress_level` (integer)
      - `mental_state` (text[])
      - `mental_state_other` (text)
      - `mental_complaints_duration` (text)
      - `previous_treatments` (text[])
      - `treatments_other` (text)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `created_at` (timestamptz)
      - `completed_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policy for public submissions
    - Add policy for admin-only reads
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS flat_assessments;

-- Create the table with the correct structure
CREATE TABLE flat_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_name text NOT NULL,
  
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

-- Create policies
CREATE POLICY "Enable insert for anyone"
  ON flat_assessments FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for admins"
  ON flat_assessments FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');