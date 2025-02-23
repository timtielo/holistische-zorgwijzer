/*
  # Add Test Assessment Data

  1. Changes
    - Add diverse test submissions to validate form functionality
    - Cover different health scenarios and response types
*/

-- Insert test submissions with varied data
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
-- Test case 1: Low energy, multiple physical complaints
(
  'Holistische Gezondheidscheck',
  3,
  4,
  8,
  ARRAY['Rugpijn', 'Nekpijn', 'Hoofdpijn', 'Vermoeidheid'],
  'Regelmatige migraine aanvallen',
  '3 jaar',
  'Onregelmatig eetpatroon door drukke baan',
  9,
  ARRAY['Burn-out klachten', 'Piekeren', 'Slaapproblemen'],
  'Moeite met werk loslaten',
  '1.5 jaar',
  ARRAY['Huisarts', 'Fysiotherapie', 'Psycholoog/Psychiater'],
  'Acupunctuur geprobeerd',
  'Test Persoon 1',
  'test1@example.com',
  '0612345678',
  NOW()
),
-- Test case 2: High energy, mental focus needed
(
  'Holistische Gezondheidscheck',
  8,
  7,
  3,
  ARRAY['Spierklachten'],
  'Soms stijve spieren na sporten',
  '6 maanden',
  'Gezond, veel proteïne, supplementen voor sport',
  6,
  ARRAY['Concentratieproblemen'],
  'Moeite met focus tijdens lange meetings',
  '2 maanden',
  ARRAY['Mindfulness/Meditatie'],
  'Sportmassage',
  'Test Persoon 2',
  'test2@example.com',
  '0623456789',
  NOW()
),
-- Test case 3: Mixed health profile
(
  'Holistische Gezondheidscheck',
  5,
  6,
  5,
  ARRAY['Maag- en darmklachten', 'Ademhalingsproblemen'],
  'Lactose-intolerantie vermoed',
  '1 jaar',
  'Probeer lactosevrij te eten, veel groenten',
  4,
  ARRAY['Stemmingswisselingen', 'Angstig'],
  NULL,
  '8 maanden',
  ARRAY['Huisarts', 'Voedingsdeskundige', 'Natuurgeneeskunde'],
  NULL,
  'Test Persoon 3',
  'test3@example.com',
  '0634567890',
  NOW()
);