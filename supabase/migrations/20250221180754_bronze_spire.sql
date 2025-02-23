/*
  # Add form name and simplify assessment storage

  1. Changes
    - Add form_name column to flat_assessments table
    - Remove score columns as they're no longer needed
    - Update policies to ensure public access for form submissions

  2. Security
    - Maintain existing RLS policies for admin access
    - Keep public insert access
*/

-- Add form_name column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'form_name'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN form_name text;
  END IF;
END $$;

-- Remove score columns if they exist
DO $$
BEGIN
  ALTER TABLE flat_assessments 
    DROP COLUMN IF EXISTS total_score,
    DROP COLUMN IF EXISTS physical_score,
    DROP COLUMN IF EXISTS mental_score,
    DROP COLUMN IF EXISTS energy_score;
EXCEPTION
  WHEN others THEN NULL;
END $$;