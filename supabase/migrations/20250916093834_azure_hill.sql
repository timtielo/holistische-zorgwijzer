/*
  # Add new fields to assessment form

  1. Changes
    - Add age field
    - Add specific mental health complaints
    - Add specific physical complaints  
    - Add duration of complaints
    - Add regular care experience
    - Add medication usage
    - Add treatment results

  2. Security
    - Maintain existing RLS policies
*/

-- Add new columns to flat_assessments table
DO $$
BEGIN
  -- Add age field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'age'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN age integer;
  END IF;

  -- Add specific mental complaints
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'mental_complaints_specific'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN mental_complaints_specific text[];
  END IF;

  -- Add specific physical complaints
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'physical_complaints_specific'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN physical_complaints_specific text[];
  END IF;

  -- Add complaint duration
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'complaint_duration'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN complaint_duration text;
  END IF;

  -- Add regular care experience
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'regular_care_experience'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN regular_care_experience text;
  END IF;

  -- Add medication usage
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'medication_usage'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN medication_usage text;
  END IF;

  -- Add treatment results
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'treatment_results'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN treatment_results text;
  END IF;
END $$;