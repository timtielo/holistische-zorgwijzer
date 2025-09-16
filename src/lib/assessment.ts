import { supabase } from './supabase';
import type { AssessmentSection } from '../types/assessment';

export async function submitAssessment(
  answers: Record<string, any>,
  sections: AssessmentSection[]
) {
  // Transform answers into flat structure with only used fields
  const flatData = {
    // Form Identification
    form_name: 'Holistische Zorgwijzer',
    
    // Personal Information
    full_name: answers.name,
    email: answers.email,
    age: answers.age ? parseInt(answers.age) : null,
    
    // Mental Health
    mental_complaints_specific: answers.mental_complaints_specific,
    mental_complaints_other: answers.mental_complaints_other,
    mental_health_rating: answers.mental_health_rating,
    
    // Physical Health  
    physical_complaints_specific: answers.physical_complaints_specific,
    physical_complaints_other: answers.physical_complaints_other,
    physical_health_rating: answers.physical_health_rating,
    
    // Duration
    complaint_duration: answers.complaint_duration,
    
    // Medical History
    regular_care_experience: answers.regular_care_experience,
    medication_usage: answers.medication_usage,
    treatment_results: answers.treatment_results,
    
    // Metadata
    completed_at: new Date().toISOString()
  };

  try {
    const { data, error } = await supabase
      .from('flat_assessments')
      .insert([flatData])
      .select();

    if (error) {
      console.error('Error submitting assessment:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error submitting assessment:', error);
    throw error;
  }
}