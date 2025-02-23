import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-primary-600 rounded-full transition-all duration-300"
          style={{
            width: `${((currentStep + 1) / totalSteps) * 100}%`
          }}
        />
      </div>
      <div className="mt-2 text-sm text-gray-500 text-right">
        Stap {currentStep + 1} van {totalSteps}
      </div>
    </div>
  );
}