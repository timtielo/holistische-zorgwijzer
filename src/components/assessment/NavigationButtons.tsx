import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  loading?: boolean;
}

export function NavigationButtons({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  loading 
}: NavigationButtonsProps) {
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="mt-8 flex justify-between">
      <button
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`
          flex items-center px-6 py-3 rounded-lg text-sm font-medium
          ${currentStep === 0
            ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-500'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }
        `}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Vorige
      </button>
      <button
        onClick={onNext}
        disabled={loading}
        className="flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLastStep ? (
          <>
            <Check className="h-4 w-4 mr-2" />
            Afronden
          </>
        ) : (
          <>
            Volgende
            <ArrowRight className="h-4 w-4 ml-2" />
          </>
        )}
      </button>
    </div>
  );
}