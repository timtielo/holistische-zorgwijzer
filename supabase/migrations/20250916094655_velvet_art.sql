/*
  # Add missing columns to flat_assessments table

  1. New Columns
    - `mental_complaints_other` (text) - Additional mental complaints description
    - `physical_complaints_specific` (text[]) - Array of specific physical complaints
    - `physical_complaints_other` (text) - Additional physical complaints description
    - `complaint_duration` (text) - Duration of complaints
    - `regular_care_experience` (text) - Experience with regular healthcare
    - `medication_usage` (text) - Current medication usage
    - `treatment_results` (text) - Results from previous treatments
    - `mental_complaints_specific` (text[]) - Array of specific mental complaints

  2. Changes
    - Add all missing columns that are referenced in the assessment submission
    - Ensure compatibility with existing data structure
*/

-- Add missing columns to flat_assessments table
DO $$
BEGIN
  -- Add mental_complaints_other if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'mental_complaints_other'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN mental_complaints_other text;
  END IF;

  -- Add physical_complaints_specific if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'physical_complaints_specific'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN physical_complaints_specific text[];
  END IF;

  -- Add physical_complaints_other if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'physical_complaints_other'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN physical_complaints_other text;
  END IF;

  -- Add complaint_duration if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'complaint_duration'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN complaint_duration text;
  END IF;

  -- Add regular_care_experience if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'regular_care_experience'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN regular_care_experience text;
  END IF;

  -- Add medication_usage if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'medication_usage'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN medication_usage text;
  END IF;

  -- Add treatment_results if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'treatment_results'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN treatment_results text;
  END IF;

  -- Add mental_complaints_specific if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'mental_complaints_specific'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN mental_complaints_specific text[];
  END IF;
END $$;