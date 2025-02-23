import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { submitAssessment } from '../lib/assessment';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';
import { AssessmentSection, assessmentSections } from '../types/assessment';
import { ProgressBar } from '../components/assessment/ProgressBar';
import { QuestionRenderer } from '../components/assessment/QuestionRenderer';
import { NavigationButtons } from '../components/assessment/NavigationButtons';
import { TestForm } from '../components/assessment/TestForm';

export function Assessment() {
  const navigate = useNavigate();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);

  const currentSection = assessmentSections[currentSectionIndex];

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const isCurrentSectionValid = () => {
    return currentSection.questions.every(question => {
      if (!question.required) return true;
      
      const answer = answers[question.id];
      
      if (question.type === 'scale') {
        return answer === undefined || answer === 5 || (typeof answer === 'number' && answer >= 1 && answer <= 10);
      }
      
      if (Array.isArray(answer)) {
        return answer.length > 0;
      }
      
      return answer !== undefined && answer !== '';
    });
  };

  const handleNext = () => {
    if (!isCurrentSectionValid()) {
      toast.error('Vul alstublieft alle verplichte vragen in');
      return;
    }
    
    if (currentSectionIndex < assessmentSections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitAssessment(answers, assessmentSections);
      navigate('/assessment/success');
    } catch (error) {
      console.error('Error submitting assessment:', error);
      toast.error('Er is iets misgegaan bij het opslaan van je antwoorden. Probeer het later opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Zorgwijzer"
        description="Vul onze uitgebreide zorgwijzer in voor een persoonlijk advies."
        canonicalUrl="https://hollistischezorgwijzer.nl/assessment"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Zorgwijzer - Hollistische Zorgwijzer",
            "Vul onze uitgebreide zorgwijzer in voor een persoonlijk advies.",
            "https://hollistischezorgwijzer.nl/assessment"
          ))}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressBar 
            currentStep={currentSectionIndex} 
            totalSteps={assessmentSections.length} 
          />

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentSection.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {currentSection.description}
            </p>

            <div className="space-y-8">
              {currentSection.questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <div className="flex items-start">
                    <h3 className="text-lg font-medium text-gray-900">
                      {question.text}
                      {question.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </h3>
                  </div>
                  {question.description && (
                    <p className="text-sm text-gray-500">
                      {question.description}
                    </p>
                  )}
                  <QuestionRenderer
                    question={question}
                    value={answers[question.id]}
                    onChange={(value) => handleAnswer(question.id, value)}
                  />
                </div>
              ))}
            </div>

            <NavigationButtons
              currentStep={currentSectionIndex}
              totalSteps={assessmentSections.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {/* Test Form Component */}
      {process.env.NODE_ENV === 'development' && <TestForm />}
    </>
  );
}