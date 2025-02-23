import React, { useEffect } from 'react';
import { Question } from '../../types/assessment';
import { ScoreBar } from './ScoreBar';

interface QuestionRendererProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export function QuestionRenderer({ question, value, onChange }: QuestionRendererProps) {
  // Set default value for scale questions
  useEffect(() => {
    if (question.type === 'scale' && value === undefined) {
      onChange(5);
    }
  }, [question.type, value, onChange]);

  switch (question.type) {
    case 'scale':
      const currentValue = value === undefined ? 5 : value;
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold text-primary-600">
              {currentValue}
            </div>
            {question.description && (
              <span className="text-sm text-gray-600">{question.description}</span>
            )}
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={currentValue}
            onChange={(e) => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>1</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>
      );

    case 'choice':
      return (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-primary-200 cursor-pointer transition-colors"
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={value === option}
                onChange={(e) => onChange(e.target.value)}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      );

    case 'multiChoice':
      const selectedValues = Array.isArray(value) ? value : [];
      return (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <label
              key={option}
              className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedValues.includes(option)
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...selectedValues, option]
                      : selectedValues.filter((v) => v !== option);
                    onChange(newValues);
                  }}
                  className="h-5 w-5"
                />
              </div>
              <span className="text-gray-700 select-none">{option}</span>
            </label>
          ))}
        </div>
      );

    case 'text':
      return (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 resize-none"
          placeholder="Type je antwoord hier..."
        />
      );

    default:
      return null;
  }
}