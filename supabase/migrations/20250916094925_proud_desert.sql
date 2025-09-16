/*
  # Clean up flat_assessments table

  This migration removes all unused columns from the flat_assessments table,
  keeping only the columns that are actually used by the current assessment form.

  ## Columns to keep:
  - id (primary key)
  - form_name (form identification)
  - full_name (user's name)
  - email (user's email)
  - age (user's age)
  - mental_complaints_specific (array of mental complaints)
  - mental_complaints_other (additional mental complaints text)
  - physical_complaints_specific (array of physical complaints)
  - physical_complaints_other (additional physical complaints text)
  - complaint_duration (how long complaints have persisted)
  - regular_care_experience (experience with regular healthcare)
  - medication_usage (current medication usage)
  - treatment_results (results from previous treatments)
  - created_at (timestamp when record was created)
  - completed_at (timestamp when assessment was completed)

  ## Columns to remove:
  - energy_level
  - sleep
  - physical_complaints_scale
  - physical_complaints (old array field)
  - physical_complaints_duration
  - diet_description
  - stress_level
  - mental_state
  - mental_state_other
  - mental_complaints_duration
  - previous_treatments
  - treatments_other
  - phone
*/

-- Remove unused columns from flat_assessments table
DO $$
BEGIN
  -- Remove energy_level column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'energy_level'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN energy_level;
  END IF;

  -- Remove sleep column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'sleep'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN sleep;
  END IF;

  -- Remove physical_complaints_scale column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'physical_complaints_scale'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN physical_complaints_scale;
  END IF;

  -- Remove old physical_complaints column if it exists (replaced by physical_complaints_specific)
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'physical_complaints'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN physical_complaints;
  END IF;

  -- Remove physical_complaints_duration column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'physical_complaints_duration'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN physical_complaints_duration;
  END IF;

  -- Remove diet_description column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'diet_description'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN diet_description;
  END IF;

  -- Remove stress_level column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'stress_level'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN stress_level;
  END IF;

  -- Remove mental_state column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'mental_state'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN mental_state;
  END IF;

  -- Remove mental_state_other column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'mental_state_other'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN mental_state_other;
  END IF;

  -- Remove mental_complaints_duration column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'mental_complaints_duration'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN mental_complaints_duration;
  END IF;

  -- Remove previous_treatments column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'previous_treatments'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN previous_treatments;
  END IF;

  -- Remove treatments_other column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'treatments_other'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN treatments_other;
  END IF;

  -- Remove phone column if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'flat_assessments' AND column_name = 'phone'
  ) THEN
    ALTER TABLE flat_assessments DROP COLUMN phone;
  END IF;
END $$;