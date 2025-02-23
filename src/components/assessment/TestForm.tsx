import React from 'react';
import { toast } from 'sonner';
import { submitAssessment } from '../../lib/assessment';
import { assessmentSections } from '../../types/assessment';

export function TestForm() {
  const handleTestSubmission = async () => {
    const testData = {
      // General Health
      energy: 7,
      sleep: 8,
      
      // Physical Health
      physical_complaints_scale: 4,
      physical_complaints: ['Rugpijn', 'Vermoeidheid'],
      physical_complaints_other: 'Soms hoofdpijn na lang computerwerk',
      physical_complaints_duration: '6 maanden',
      diet: 'Gezond en gevarieerd, veel groenten',
      
      // Mental Health
      stress_level: 6,
      mental_state: ['Concentratieproblemen', 'Piekeren'],
      mental_state_other: '',
      mental_complaints_duration: '3 maanden',
      
      // Previous Treatments
      previous_treatments: ['Huisarts', 'Fysiotherapie'],
      treatments_other: '',
      
      // Personal Information
      name: 'Test Persoon',
      email: 'test@example.com',
      phone: '0612345678'
    };

    try {
      await submitAssessment(testData, assessmentSections);
      toast.success('Test data successfully submitted!');
    } catch (error) {
      console.error('Error submitting test data:', error);
      toast.error('Failed to submit test data');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleTestSubmission}
        className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary-700 transition-colors"
      >
        Submit Test Data
      </button>
    </div>
  );
}