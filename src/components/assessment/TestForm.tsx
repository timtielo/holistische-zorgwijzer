import React from 'react';
import { toast } from 'sonner';
import { submitAssessment } from '../../lib/assessment';
import { assessmentSections } from '../../types/assessment';

export function TestForm() {
  const handleTestSubmission = async () => {
    const testData = {
      // Personal Information
      name: 'Test Persoon',
      email: 'test@example.com',
      age: '35',
      
      // Mental Health
      mental_complaints_specific: ['Stress', 'Mindfog/mentale mist'],
      mental_complaints_other: '',
      mental_health_rating: 2,
      
      // Physical Health
      physical_complaints_specific: ['Moeheid/vermoeidheid', 'Nekpijn'],
      physical_complaints_other: 'Soms hoofdpijn na lang computerwerk',
      physical_health_rating: 3,
      
      // Duration
      complaint_duration: '6 maanden',
      
      // Medical History
      regular_care_experience: 'Huisarts bezocht, doorverwezen naar fysiotherapeut',
      medication_usage: 'Paracetamol bij hoofdpijn',
      treatment_results: 'Fysiotherapie hielp tijdelijk, klachten kwamen terug'
    };

    try {
      await submitAssessment(testData, assessmentSections);
      toast.success('Test data succesvol verzonden!');
    } catch (error) {
      console.error('Error submitting test data:', error);
      toast.error('Fout bij verzenden test data');
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