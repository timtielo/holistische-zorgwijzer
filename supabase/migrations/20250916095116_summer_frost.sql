/*
  # Add Health Rating Scales

  1. New Columns
    - `mental_health_rating` (integer) - Rating from 1-5 for mental health
    - `physical_health_rating` (integer) - Rating from 1-5 for physical health

  2. Changes
    - Add rating scales to capture overall health assessment
    - Constraints to ensure ratings are between 1 and 5
*/

DO $$
BEGIN
  -- Add mental health rating column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'mental_health_rating'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN mental_health_rating integer;
    ALTER TABLE flat_assessments ADD CONSTRAINT mental_health_rating_check CHECK (mental_health_rating >= 1 AND mental_health_rating <= 5);
  END IF;

  -- Add physical health rating column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'physical_health_rating'
  ) THEN
    ALTER TABLE flat_assessments ADD COLUMN physical_health_rating integer;
    ALTER TABLE flat_assessments ADD CONSTRAINT physical_health_rating_check CHECK (physical_health_rating >= 1 AND physical_health_rating <= 5);
  END IF;
END $$;