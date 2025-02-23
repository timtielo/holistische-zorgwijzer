/*
  # Enhanced Assessment Schema

  1. New Tables
    - `assessment_questions`
      - Stores all possible questions
      - Includes question type, text, and options
    - `assessment_answers`
      - Stores individual answers for each question
      - Links to assessment and question

  2. Changes to existing tables
    - Add new columns to `assessments` table
      - `total_score`
      - `physical_score`
      - `mental_score`
      - `energy_score`

  3. Security
    - Enable RLS on new tables
    - Add policies for authenticated users
*/

-- Create assessment_questions table
CREATE TABLE IF NOT EXISTS assessment_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id text NOT NULL,
  question_id text NOT NULL,
  question_text text NOT NULL,
  question_type text NOT NULL,
  options jsonb DEFAULT '[]',
  description text,
  required boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  UNIQUE(section_id, question_id)
);

-- Create assessment_answers table
CREATE TABLE IF NOT EXISTS assessment_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id uuid REFERENCES assessments(id) ON DELETE CASCADE,
  question_id uuid REFERENCES assessment_questions(id),
  answer_value jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(assessment_id, question_id)
);

-- Add new columns to assessments table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'assessments' AND column_name = 'total_score'
  ) THEN
    ALTER TABLE assessments 
      ADD COLUMN total_score numeric(3,1),
      ADD COLUMN physical_score numeric(3,1),
      ADD COLUMN mental_score numeric(3,1),
      ADD COLUMN energy_score numeric(3,1);
  END IF;
END $$;

-- Enable RLS
ALTER TABLE assessment_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_answers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read questions"
  ON assessment_questions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read own answers"
  ON assessment_answers FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM assessments a
    WHERE a.id = assessment_answers.assessment_id
    AND a.user_id = auth.uid()
  ));

CREATE POLICY "Users can create own answers"
  ON assessment_answers FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM assessments a
    WHERE a.id = assessment_answers.assessment_id
    AND a.user_id = auth.uid()
  ));