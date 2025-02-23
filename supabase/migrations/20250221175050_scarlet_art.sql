/*
  # Flat Assessment Schema

  1. New Table
    - `flat_assessments`
      - Contains all assessment data in a single table
      - One column per question
      - Additional metadata columns

  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

-- Create flat_assessments table
CREATE TABLE IF NOT EXISTS flat_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  
  -- General Health
  energy_level integer,
  sleep_quality integer,
  
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
  completed_at timestamptz,
  
  -- Calculated Scores
  total_score numeric(3,1),
  physical_score numeric(3,1),
  mental_score numeric(3,1)
);

-- Enable RLS
ALTER TABLE flat_assessments ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own assessments"
  ON flat_assessments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own assessments"
  ON flat_assessments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);