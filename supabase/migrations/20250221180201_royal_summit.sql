/*
  # Update flat_assessments table schema

  1. Changes
    - Rename sleep_quality to sleep to match form data
    - Add energy_score column
    - Update column types to better match data

  2. Security
    - Maintain existing RLS policies
*/

-- Rename sleep_quality to sleep
ALTER TABLE flat_assessments RENAME COLUMN sleep_quality TO sleep;

-- Add energy_score if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'energy_score'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN energy_score numeric(3,1);
  END IF;
END $$;