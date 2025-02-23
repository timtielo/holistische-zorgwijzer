import { supabase } from './supabase';
import type { AssessmentSection } from '../types/assessment';

export async function submitAssessment(
  answers: Record<string, any>,
  sections: AssessmentSection[]
) {
  // Transform answers into flat structure with all fields
  const flatData = {
    // Form Identification
    form_name: 'Holistische Zorgwijzer',
    
    // General Health
    energy_level: answers.energy,
    sleep: answers.sleep,
    
    // Physical Health
    physical_complaints_scale: answers.physical_complaints_scale,
    physical_complaints: answers.physical_complaints,
    physical_complaints_other: answers.physical_complaints_other,
    physical_complaints_duration: answers.physical_complaints_duration,
    diet_description: answers.diet,
    
    // Mental Health
    stress_level: answers.stress_level,
    mental_state: answers.mental_state,
    mental_state_other: answers.mental_state_other,
    mental_complaints_duration: answers.mental_complaints_duration,
    
    // Previous Treatments
    previous_treatments: answers.previous_treatments,
    treatments_other: answers.treatments_other,
    
    // Personal Information
    full_name: answers.name,
    email: answers.email,
    phone: answers.phone,
    
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