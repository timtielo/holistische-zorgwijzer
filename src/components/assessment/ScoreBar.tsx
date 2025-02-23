import React from 'react';

interface ScoreBarProps {
  value: number;
  description?: string;
}

export function ScoreBar({ value, description }: ScoreBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Score: {value}</span>
        {description && <span>{description}</span>}
      </div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>1</span>
        <span>5</span>
        <span>10</span>
      </div>
    </div>
  );
}