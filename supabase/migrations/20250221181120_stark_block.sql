/*
  # Add Test Assessment Data

  1. Changes
    - Add diverse test data to verify form submissions
    - Include different scenarios and answer combinations
*/

-- Insert multiple test submissions
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
) VALUES 
-- Test case 1: High energy, some physical issues
(
  'Holistische Gezondheidscheck',
  8,
  7,
  3,
  ARRAY['Nekpijn'],
  'Lichte spanning in schouders',
  '6 maanden',
  'Vegetarisch, veel verse producten',
  4,
  ARRAY['Concentratieproblemen'],
  NULL,
  '3 maanden',
  ARRAY['Fysiotherapie', 'Mindfulness/Meditatie'],
  NULL,
  'Emma de Vries',
  'emma.devries@example.com',
  '0612345678',
  NOW()
),
-- Test case 2: Lower energy, mental focus
(
  'Holistische Gezondheidscheck',
  4,
  5,
  2,
  ARRAY['Vermoeidheid'],
  NULL,
  '1 jaar',
  'Normaal eetpatroon, weinig suikers',
  7,
  ARRAY['Burn-out klachten', 'Piekeren'],
  'Moeite met werk-privé balans',
  '8 maanden',
  ARRAY['Psycholoog/Psychiater', 'Mindfulness/Meditatie'],
  'Online coaching',
  'Lucas Bakker',
  'lucas.bakker@example.com',
  '0623456789',
  NOW()
),
-- Test case 3: Mixed health issues
(
  'Holistische Gezondheidscheck',
  6,
  4,
  6,
  ARRAY['Rugpijn', 'Maag- en darmklachten'],
  'Regelmatig hoofdpijn',
  '2 jaar',
  'Glutenvrij, lactosevrij',
  6,
  ARRAY['Slaapproblemen', 'Stemmingswisselingen'],
  NULL,
  '1 jaar',
  ARRAY['Huisarts', 'Osteopaat', 'Voedingsdeskundige'],
  NULL,
  'Sophie van Dam',
  'sophie.vandam@example.com',
  '0634567890',
  NOW()
);