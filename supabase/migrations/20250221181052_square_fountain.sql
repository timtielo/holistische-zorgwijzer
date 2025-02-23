/*
  # Test Assessment Form Submission

  1. Changes
    - Add test data to verify form submission works
    - Ensure form_name is required and has a default value
*/

-- Ensure form_name has a default value
ALTER TABLE flat_assessments 
  ALTER COLUMN form_name SET DEFAULT 'Holistische Gezondheidscheck';

-- Insert test data
INSERT INTO flat_assessments (
  form_name,
  energy_level,
  sleep,
  physical_complaints_scale,
  physical_complaints,
  physical_complaints_other,
  physical_complaints_duration,
  diet_description,
  stress_level,
  mental_state,
  mental_state_other,
  mental_complaints_duration,
  previous_treatments,
  treatments_other,
  full_name,
  email,
  phone,
  completed_at
) VALUES (
  'Holistische Gezondheidscheck',
  7,
  6,
  4,
  ARRAY['Rugpijn', 'Vermoeidheid'],
  'Soms last van hoofdpijn',
  '2 jaar',
  'Gezond en gevarieerd, veel groenten en fruit',
  5,
  ARRAY['Piekeren', 'Concentratieproblemen'],
  NULL,
  'Ongeveer 6 maanden',
  ARRAY['Huisarts', 'Fysiotherapie'],
  NULL,
  'Test Persoon',
  'test@example.com',
  '0612345678',
  NOW()
);